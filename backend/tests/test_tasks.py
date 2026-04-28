"""Test task admin CRUD and student submit-check behavior against temporary DB state.

Edit this file when task routes or checker behavior changes.
Copy a test pattern here when you add another end-to-end backend feature test.
"""

from __future__ import annotations

import pytest

from backend.tests.conftest import login


BEGINNER_TITLES = [
    "1. Build OR for Three Inputs",
    "2. Build OR for Four Inputs",
    "3. Build a Majority-of-Three Circuit",
    "4. Build XOR for Two Inputs",
    "5. Build Odd Parity for Four Inputs",
]


def xor_reference_solution() -> str:
    return "\n".join(
        [
            "scheme (a b) xor2 (z):",
            " local x1 x2 x3",
            " (a b) or (x1)",
            " (a b) and (x2)",
            " (x2) not (x3)",
            " (x1 x3) and (z)",
            "end",
        ]
    )


@pytest.mark.asyncio
async def test_seeded_beginner_tasks_are_available_in_order(client, db, create_user, auth_headers) -> None:
    admin_list_response = await client.post("/api/admin/tasks/list", json={})
    assert admin_list_response.status == 200
    admin_tasks = (await admin_list_response.json())["data"]["tasks"]

    assert [item["title"] for item in admin_tasks[:5]] == BEGINNER_TITLES
    assert admin_tasks[0]["input_count"] == 3
    assert admin_tasks[0]["output_count"] == 1
    assert admin_tasks[0]["expected_outputs_text"] == "0\n1\n1\n1\n1\n1\n1\n1"
    assert admin_tasks[0]["reference_solution"]

    cursor = await db.execute(
        "SELECT title, sort_index FROM tasks WHERE sort_index <= 5 ORDER BY sort_index, id"
    )
    seeded_rows = await cursor.fetchall()
    assert [(row["title"], row["sort_index"]) for row in seeded_rows] == list(zip(BEGINNER_TITLES, [1, 2, 3, 4, 5], strict=False))

    await create_user("user", "user")
    await login(client, "user", "user", auth_headers)
    student_list_response = await client.post("/api/tasks/list", json={}, headers=auth_headers)
    assert student_list_response.status == 200
    student_tasks = (await student_list_response.json())["data"]["tasks"]
    assert [item["title"] for item in student_tasks[:5]] == BEGINNER_TITLES


@pytest.mark.asyncio
async def test_admin_tasks_crud(client, db, auth_headers) -> None:
    cursor = await db.execute("SELECT MAX(sort_index) AS max_sort_index FROM tasks")
    initial_max_sort_index = int((await cursor.fetchone())["max_sort_index"])

    create_response = await client.post(
        "/api/admin/tasks/create",
        json={
            "title": "XOR",
            "statement_markdown": "Build xor.",
            "input_count": 2,
            "output_count": 1,
            "expected_outputs_text": "0\n1\n1\n0",
            "reference_solution": xor_reference_solution(),
        },
        headers=auth_headers,
    )
    assert create_response.status == 201
    created = (await create_response.json())["data"]["task"]

    list_response = await client.post("/api/admin/tasks/list", json={})
    assert list_response.status == 200
    tasks = (await list_response.json())["data"]["tasks"]
    assert [item["title"] for item in tasks[:5]] == BEGINNER_TITLES
    assert tasks[-1]["title"] == "XOR"

    cursor = await db.execute("SELECT sort_index FROM tasks WHERE id = ?", (created["id"],))
    created_sort_index = int((await cursor.fetchone())["sort_index"])
    assert created_sort_index == initial_max_sort_index + 1

    save_response = await client.post(
        "/api/admin/tasks/save",
        json={
            "id": created["id"],
            "title": "XOR updated",
            "statement_markdown": "Build xor updated.",
            "input_count": 2,
            "output_count": 1,
            "expected_outputs_text": "0\n1\n1\n0",
            "reference_solution": xor_reference_solution(),
        },
        headers=auth_headers,
    )
    assert save_response.status == 200
    assert (await save_response.json())["data"]["task"]["title"] == "XOR updated"

    delete_response = await client.post("/api/admin/tasks/delete", json={"id": created["id"]}, headers=auth_headers)
    assert delete_response.status == 200


@pytest.mark.asyncio
async def test_admin_task_requires_at_least_one_answer_source(client, auth_headers) -> None:
    response = await client.post(
        "/api/admin/tasks/create",
        json={
            "title": "broken",
            "statement_markdown": "broken",
            "input_count": 1,
            "output_count": 1,
            "expected_outputs_text": "",
            "reference_solution": "",
        },
        headers=auth_headers,
    )
    assert response.status == 400


@pytest.mark.asyncio
async def test_admin_task_validates_expected_outputs_format(client, auth_headers) -> None:
    response = await client.post(
        "/api/admin/tasks/create",
        json={
            "title": "bad outputs",
            "statement_markdown": "bad outputs",
            "input_count": 2,
            "output_count": 1,
            "expected_outputs_text": "0\n1\n1",
            "reference_solution": None,
        },
        headers=auth_headers,
    )
    assert response.status == 400


@pytest.mark.asyncio
async def test_student_submit_uses_expected_outputs_when_present(client, create_user, auth_headers) -> None:
    await create_user("user", "user")
    await login(client, "user", "user", auth_headers)
    create_response = await client.post(
        "/api/admin/tasks/create",
        json={
            "title": "XOR outputs",
            "statement_markdown": "xor",
            "input_count": 2,
            "output_count": 1,
            "expected_outputs_text": "0\n1\n1\n0",
            "reference_solution": xor_reference_solution(),
        },
        headers=auth_headers,
    )
    task_id = (await create_response.json())["data"]["task"]["id"]

    wrong_solution = "\n".join(
        [
            "scheme (a b) main (z):",
            " (a b) and (z)",
            "end",
        ]
    )

    submit_response = await client.post(
        "/api/tasks/submit",
        json={"task_id": task_id, "solution": wrong_solution},
        headers=auth_headers,
    )
    assert submit_response.status == 200
    result = (await submit_response.json())["data"]["result"]
    assert result["accepted"] is False
    assert result["mismatch"]["case_index"] == 1
    assert result["mismatch"]["input_bits"] == "01"
    assert result["mismatch"]["expected_output"] == "1"
    assert result["mismatch"]["actual_output"] == "0"


@pytest.mark.asyncio
async def test_student_submit_uses_reference_solution_if_outputs_are_missing(client, create_user, auth_headers) -> None:
    await create_user("user", "user")
    await login(client, "user", "user", auth_headers)
    create_response = await client.post(
        "/api/admin/tasks/create",
        json={
            "title": "XOR reference",
            "statement_markdown": "xor",
            "input_count": 2,
            "output_count": 1,
            "expected_outputs_text": None,
            "reference_solution": xor_reference_solution(),
        },
        headers=auth_headers,
    )
    task_id = (await create_response.json())["data"]["task"]["id"]

    accepted_solution = "\n".join(
        [
            "scheme (a b) main (z):",
            " local x1 x2 x3",
            " (a b) or (x1)",
            " (a b) and (x2)",
            " (x2) not (x3)",
            " (x1 x3) and (z)",
            "end",
        ]
    )
    submit_response = await client.post(
        "/api/tasks/submit",
        json={"task_id": task_id, "solution": accepted_solution},
        headers=auth_headers,
    )
    assert submit_response.status == 200
    result = (await submit_response.json())["data"]["result"]
    assert result["accepted"] is True


@pytest.mark.asyncio
async def test_student_submit_returns_diagnostics_for_invalid_code(client, create_user, auth_headers) -> None:
    await create_user("user", "user")
    await login(client, "user", "user", auth_headers)
    create_response = await client.post(
        "/api/admin/tasks/create",
        json={
            "title": "simple",
            "statement_markdown": "simple",
            "input_count": 1,
            "output_count": 1,
            "expected_outputs_text": "0\n1",
            "reference_solution": None,
        },
        headers=auth_headers,
    )
    task_id = (await create_response.json())["data"]["task"]["id"]

    submit_response = await client.post(
        "/api/tasks/submit",
        json={"task_id": task_id, "solution": "scheme (a) main (z)\nend"},
        headers=auth_headers,
    )
    assert submit_response.status == 200
    result = (await submit_response.json())["data"]["result"]
    assert result["accepted"] is False
    assert result["diagnostics"]


@pytest.mark.asyncio
async def test_student_task_draft_persists_for_same_user_only(client, create_user, auth_headers) -> None:
    await create_user("user", "user")
    await create_user("other", "other")
    await login(client, "user", "user", auth_headers)

    list_response = await client.post("/api/tasks/list", json={}, headers=auth_headers)
    task = (await list_response.json())["data"]["tasks"][0]
    draft = "scheme (a b c) main (out):\nend"

    save_response = await client.post(
        "/api/tasks/save-draft",
        json={"task_id": task["id"], "solution": draft},
        headers=auth_headers,
    )
    assert save_response.status == 200
    assert (await save_response.json())["data"]["progress"]["draft_solution"] == draft

    get_response = await client.post("/api/tasks/get", json={"id": task["id"]}, headers=auth_headers)
    assert get_response.status == 200
    assert (await get_response.json())["data"]["progress"]["draft_solution"] == draft

    await login(client, "other", "other", auth_headers)
    other_get_response = await client.post("/api/tasks/get", json={"id": task["id"]}, headers=auth_headers)
    assert other_get_response.status == 200
    assert (await other_get_response.json())["data"]["progress"]["draft_solution"] == ""


@pytest.mark.asyncio
async def test_student_submissions_are_saved_and_pass_stays_sticky(client, db, create_user, auth_headers) -> None:
    await create_user("user", "user")
    await login(client, "user", "user", auth_headers)

    list_response = await client.post("/api/tasks/list", json={}, headers=auth_headers)
    task = next(item for item in (await list_response.json())["data"]["tasks"] if item["title"] == "1. Build OR for Three Inputs")
    wrong_solution = "\n".join(
        [
            "scheme (a b c) main (out):",
            " (a b) and (out)",
            "end",
        ]
    )
    accepted_solution = "\n".join(
        [
            "scheme (a b c) main (out):",
            " local temp",
            " (a b) or (temp)",
            " (temp c) or (out)",
            "end",
        ]
    )

    first_submit = await client.post(
        "/api/tasks/submit",
        json={"task_id": task["id"], "solution": wrong_solution},
        headers=auth_headers,
    )
    assert first_submit.status == 200
    first_progress = (await first_submit.json())["data"]["progress"]
    assert first_progress["passed"] is False
    assert first_progress["attempt_count"] == 1

    accepted_submit = await client.post(
        "/api/tasks/submit",
        json={"task_id": task["id"], "solution": accepted_solution},
        headers=auth_headers,
    )
    assert accepted_submit.status == 200
    accepted_progress = (await accepted_submit.json())["data"]["progress"]
    assert accepted_progress["passed"] is True
    assert accepted_progress["attempt_count"] == 2

    final_submit = await client.post(
        "/api/tasks/submit",
        json={"task_id": task["id"], "solution": wrong_solution},
        headers=auth_headers,
    )
    assert final_submit.status == 200
    final_progress = (await final_submit.json())["data"]["progress"]
    assert final_progress["passed"] is True
    assert final_progress["attempt_count"] == 3
    assert final_progress["latest_result"]["accepted"] is False

    cursor = await db.execute("SELECT COUNT(*) AS count FROM task_submissions WHERE task_id = ?", (task["id"],))
    assert int((await cursor.fetchone())["count"]) == 3

    refreshed_list_response = await client.post("/api/tasks/list", json={}, headers=auth_headers)
    refreshed_task = next(item for item in (await refreshed_list_response.json())["data"]["tasks"] if item["id"] == task["id"])
    assert refreshed_task["passed"] is True
    assert refreshed_task["attempt_count"] == 3
    assert refreshed_task["latest_result"]["accepted"] is False
    assert refreshed_task["latest_submitted_at"] is not None


@pytest.mark.asyncio
async def test_student_task_endpoints_require_auth(client, auth_headers) -> None:
    list_response = await client.post("/api/tasks/list", json={})
    assert list_response.status == 401

    get_response = await client.post("/api/tasks/get", json={"id": 1})
    assert get_response.status == 401

    submit_response = await client.post("/api/tasks/submit", json={"task_id": 1, "solution": ""}, headers=auth_headers)
    assert submit_response.status == 401

    save_draft_response = await client.post("/api/tasks/save-draft", json={"task_id": 1, "solution": ""}, headers=auth_headers)
    assert save_draft_response.status == 401


@pytest.mark.asyncio
async def test_seeded_beginner_task_accepts_matching_solution(client, create_user, auth_headers) -> None:
    await create_user("user", "user")
    await login(client, "user", "user", auth_headers)

    list_response = await client.post("/api/tasks/list", json={}, headers=auth_headers)
    assert list_response.status == 200
    tasks = (await list_response.json())["data"]["tasks"]
    task = next(item for item in tasks if item["title"] == "1. Build OR for Three Inputs")

    submit_response = await client.post(
        "/api/tasks/submit",
        json={
            "task_id": task["id"],
            "solution": "\n".join(
                [
                    "scheme (a b c) main (out):",
                    " local temp",
                    " (a b) or (temp)",
                    " (temp c) or (out)",
                    "end",
                ]
            ),
        },
        headers=auth_headers,
    )
    assert submit_response.status == 200
    result = (await submit_response.json())["data"]["result"]
    assert result["accepted"] is True
