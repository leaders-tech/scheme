"""Test task admin CRUD and student submit-check behavior against temporary DB state.

Edit this file when task routes or checker behavior changes.
Copy a test pattern here when you add another end-to-end backend feature test.
"""

from __future__ import annotations

import pytest

from backend.tests.conftest import login


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
async def test_admin_tasks_crud(client, auth_headers) -> None:
    create_response = await client.post(
        "/admin/tasks/create",
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

    list_response = await client.post("/admin/tasks/list", json={})
    assert list_response.status == 200
    tasks = (await list_response.json())["data"]["tasks"]
    assert [item["title"] for item in tasks] == ["XOR"]

    save_response = await client.post(
        "/admin/tasks/save",
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

    delete_response = await client.post("/admin/tasks/delete", json={"id": created["id"]}, headers=auth_headers)
    assert delete_response.status == 200


@pytest.mark.asyncio
async def test_admin_task_requires_at_least_one_answer_source(client, auth_headers) -> None:
    response = await client.post(
        "/admin/tasks/create",
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
        "/admin/tasks/create",
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
        "/admin/tasks/create",
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
        "/tasks/submit",
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
        "/admin/tasks/create",
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
        "/tasks/submit",
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
        "/admin/tasks/create",
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
        "/tasks/submit",
        json={"task_id": task_id, "solution": "scheme (a) main (z)\nend"},
        headers=auth_headers,
    )
    assert submit_response.status == 200
    result = (await submit_response.json())["data"]["result"]
    assert result["accepted"] is False
    assert result["diagnostics"]


@pytest.mark.asyncio
async def test_student_task_endpoints_require_auth(client, auth_headers) -> None:
    list_response = await client.post("/tasks/list", json={})
    assert list_response.status == 401

    get_response = await client.post("/tasks/get", json={"id": 1})
    assert get_response.status == 401

    submit_response = await client.post("/tasks/submit", json={"task_id": 1, "solution": ""}, headers=auth_headers)
    assert submit_response.status == 401
