"""Store and load prepared assignment tasks used by student submit checks.

Edit this file when the tasks table or task query behavior changes.
Copy this file as a starting point when you add queries for another table.
"""

from __future__ import annotations

from dataclasses import dataclass
import json
from typing import Any

import aiosqlite

from backend.db.connection import utc_now_text


@dataclass(slots=True)
class TaskPayload:
    title: str
    statement_markdown: str
    input_count: int
    output_count: int
    expected_outputs_text: str | None
    reference_solution: str | None


def parse_result_json(value: str | None) -> dict[str, Any] | None:
    if value is None:
        return None
    decoded = json.loads(value)
    return decoded if isinstance(decoded, dict) else None


def row_to_task_progress(row: aiosqlite.Row | None) -> dict[str, Any]:
    if row is None:
        return {
            "draft_solution": "",
            "passed": False,
            "attempt_count": 0,
            "latest_result": None,
            "latest_submitted_at": None,
        }
    return {
        "draft_solution": row["draft_solution"],
        "passed": bool(row["passed"]),
        "attempt_count": row["attempt_count"],
        "latest_result": parse_result_json(row["latest_result_json"]),
        "latest_submitted_at": row["latest_submitted_at"],
    }


def row_to_admin_task(row: aiosqlite.Row | None) -> dict[str, Any] | None:
    if row is None:
        return None
    return {
        "id": row["id"],
        "title": row["title"],
        "statement_markdown": row["statement_markdown"],
        "input_count": row["input_count"],
        "output_count": row["output_count"],
        "expected_outputs_text": row["expected_outputs_text"],
        "reference_solution": row["reference_solution"],
        "created_at": row["created_at"],
        "updated_at": row["updated_at"],
    }


def row_to_student_task(row: aiosqlite.Row | None) -> dict[str, Any] | None:
    if row is None:
        return None
    task = {
        "id": row["id"],
        "title": row["title"],
        "statement_markdown": row["statement_markdown"],
        "input_count": row["input_count"],
        "output_count": row["output_count"],
        "created_at": row["created_at"],
        "updated_at": row["updated_at"],
    }
    if "passed" in row.keys():
        task.update(
            {
                "passed": bool(row["passed"]),
                "attempt_count": row["attempt_count"],
                "latest_result": parse_result_json(row["latest_result_json"]),
                "latest_submitted_at": row["latest_submitted_at"],
            }
        )
    return task


async def list_tasks_for_student(db: aiosqlite.Connection, user_id: int) -> list[dict[str, Any]]:
    cursor = await db.execute(
        """
        SELECT
            tasks.id,
            tasks.title,
            tasks.statement_markdown,
            tasks.input_count,
            tasks.output_count,
            tasks.created_at,
            tasks.updated_at,
            COALESCE(
                (
                    SELECT task_progress.passed
                    FROM task_progress
                    WHERE task_progress.user_id = ? AND task_progress.task_id = tasks.id
                ),
                0
            ) AS passed,
            (
                SELECT COUNT(*)
                FROM task_submissions
                WHERE task_submissions.user_id = ? AND task_submissions.task_id = tasks.id
            ) AS attempt_count,
            (
                SELECT task_submissions.result_json
                FROM task_submissions
                WHERE task_submissions.user_id = ? AND task_submissions.task_id = tasks.id
                ORDER BY task_submissions.id DESC
                LIMIT 1
            ) AS latest_result_json,
            (
                SELECT task_submissions.created_at
                FROM task_submissions
                WHERE task_submissions.user_id = ? AND task_submissions.task_id = tasks.id
                ORDER BY task_submissions.id DESC
                LIMIT 1
            ) AS latest_submitted_at
        FROM tasks
        ORDER BY sort_index, id
        """,
        (user_id, user_id, user_id, user_id),
    )
    rows = await cursor.fetchall()
    return [row_to_student_task(row) for row in rows if row is not None]


async def get_task_for_student(db: aiosqlite.Connection, user_id: int, task_id: int) -> dict[str, Any] | None:
    cursor = await db.execute(
        """
        SELECT
            tasks.id,
            tasks.title,
            tasks.statement_markdown,
            tasks.input_count,
            tasks.output_count,
            tasks.created_at,
            tasks.updated_at,
            COALESCE(
                (
                    SELECT task_progress.passed
                    FROM task_progress
                    WHERE task_progress.user_id = ? AND task_progress.task_id = tasks.id
                ),
                0
            ) AS passed,
            (
                SELECT COUNT(*)
                FROM task_submissions
                WHERE task_submissions.user_id = ? AND task_submissions.task_id = tasks.id
            ) AS attempt_count,
            (
                SELECT task_submissions.result_json
                FROM task_submissions
                WHERE task_submissions.user_id = ? AND task_submissions.task_id = tasks.id
                ORDER BY task_submissions.id DESC
                LIMIT 1
            ) AS latest_result_json,
            (
                SELECT task_submissions.created_at
                FROM task_submissions
                WHERE task_submissions.user_id = ? AND task_submissions.task_id = tasks.id
                ORDER BY task_submissions.id DESC
                LIMIT 1
            ) AS latest_submitted_at
        FROM tasks
        WHERE tasks.id = ?
        """,
        (user_id, user_id, user_id, user_id, task_id),
    )
    return row_to_student_task(await cursor.fetchone())


async def get_task_progress(db: aiosqlite.Connection, user_id: int, task_id: int) -> dict[str, Any]:
    cursor = await db.execute(
        """
        SELECT
            COALESCE(
                (
                    SELECT task_progress.draft_solution
                    FROM task_progress
                    WHERE task_progress.user_id = ? AND task_progress.task_id = ?
                ),
                ''
            ) AS draft_solution,
            COALESCE(
                (
                    SELECT task_progress.passed
                    FROM task_progress
                    WHERE task_progress.user_id = ? AND task_progress.task_id = ?
                ),
                0
            ) AS passed,
            (
                SELECT COUNT(*)
                FROM task_submissions
                WHERE task_submissions.user_id = ? AND task_submissions.task_id = ?
            ) AS attempt_count,
            (
                SELECT task_submissions.result_json
                FROM task_submissions
                WHERE task_submissions.user_id = ? AND task_submissions.task_id = ?
                ORDER BY task_submissions.id DESC
                LIMIT 1
            ) AS latest_result_json,
            (
                SELECT task_submissions.created_at
                FROM task_submissions
                WHERE task_submissions.user_id = ? AND task_submissions.task_id = ?
                ORDER BY task_submissions.id DESC
                LIMIT 1
            ) AS latest_submitted_at
        """,
        (user_id, task_id, user_id, task_id, user_id, task_id, user_id, task_id, user_id, task_id),
    )
    return row_to_task_progress(await cursor.fetchone())


async def save_task_draft(db: aiosqlite.Connection, user_id: int, task_id: int, solution: str) -> dict[str, Any]:
    now = utc_now_text()
    await db.execute(
        """
        INSERT INTO task_progress (user_id, task_id, draft_solution, passed, created_at, updated_at)
        VALUES (?, ?, ?, 0, ?, ?)
        ON CONFLICT (user_id, task_id) DO UPDATE SET
            draft_solution = excluded.draft_solution,
            updated_at = excluded.updated_at
        """,
        (user_id, task_id, solution, now, now),
    )
    await db.commit()
    return await get_task_progress(db, user_id, task_id)


async def record_task_submission(
    db: aiosqlite.Connection,
    user_id: int,
    task_id: int,
    solution: str,
    result: dict[str, Any],
) -> dict[str, Any]:
    now = utc_now_text()
    accepted = 1 if result.get("accepted") is True else 0
    result_json = json.dumps(result, sort_keys=True)
    await db.execute(
        """
        INSERT INTO task_submissions (user_id, task_id, solution, accepted, result_json, created_at)
        VALUES (?, ?, ?, ?, ?, ?)
        """,
        (user_id, task_id, solution, accepted, result_json, now),
    )
    await db.execute(
        """
        INSERT INTO task_progress (user_id, task_id, draft_solution, passed, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?, ?)
        ON CONFLICT (user_id, task_id) DO UPDATE SET
            draft_solution = excluded.draft_solution,
            passed = CASE
                WHEN excluded.passed = 1 THEN 1
                ELSE task_progress.passed
            END,
            updated_at = excluded.updated_at
        """,
        (user_id, task_id, solution, accepted, now, now),
    )
    await db.commit()
    return await get_task_progress(db, user_id, task_id)


async def get_task_for_admin(db: aiosqlite.Connection, task_id: int) -> dict[str, Any] | None:
    cursor = await db.execute(
        """
        SELECT id, title, statement_markdown, input_count, output_count, expected_outputs_text, reference_solution, created_at, updated_at
        FROM tasks
        WHERE id = ?
        """,
        (task_id,),
    )
    return row_to_admin_task(await cursor.fetchone())


async def list_tasks_for_admin(db: aiosqlite.Connection) -> list[dict[str, Any]]:
    cursor = await db.execute(
        """
        SELECT id, title, statement_markdown, input_count, output_count, expected_outputs_text, reference_solution, created_at, updated_at
        FROM tasks
        ORDER BY sort_index, id
        """
    )
    rows = await cursor.fetchall()
    return [row_to_admin_task(row) for row in rows if row is not None]


async def create_task(db: aiosqlite.Connection, payload: TaskPayload) -> dict[str, Any]:
    now = utc_now_text()
    cursor = await db.execute("SELECT COALESCE(MAX(sort_index), 0) + 1 AS next_sort_index FROM tasks")
    row = await cursor.fetchone()
    next_sort_index = int(row["next_sort_index"]) if row is not None else 1
    cursor = await db.execute(
        """
        INSERT INTO tasks (
            title,
            statement_markdown,
            input_count,
            output_count,
            sort_index,
            expected_outputs_text,
            reference_solution,
            created_at,
            updated_at
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        """,
        (
            payload.title,
            payload.statement_markdown,
            payload.input_count,
            payload.output_count,
            next_sort_index,
            payload.expected_outputs_text,
            payload.reference_solution,
            now,
            now,
        ),
    )
    await db.commit()
    task_id = int(cursor.lastrowid)
    created = await get_task_for_admin(db, task_id)
    if created is None:
        raise RuntimeError("Task was created but could not be loaded.")
    return created


async def save_task(db: aiosqlite.Connection, task_id: int, payload: TaskPayload) -> dict[str, Any] | None:
    now = utc_now_text()
    cursor = await db.execute(
        """
        UPDATE tasks
        SET
            title = ?,
            statement_markdown = ?,
            input_count = ?,
            output_count = ?,
            expected_outputs_text = ?,
            reference_solution = ?,
            updated_at = ?
        WHERE id = ?
        """,
        (
            payload.title,
            payload.statement_markdown,
            payload.input_count,
            payload.output_count,
            payload.expected_outputs_text,
            payload.reference_solution,
            now,
            task_id,
        ),
    )
    if cursor.rowcount == 0:
        await db.rollback()
        return None
    await db.commit()
    return await get_task_for_admin(db, task_id)


async def delete_task(db: aiosqlite.Connection, task_id: int) -> bool:
    cursor = await db.execute(
        """
        DELETE FROM tasks
        WHERE id = ?
        """,
        (task_id,),
    )
    deleted = cursor.rowcount > 0
    if deleted:
        await db.commit()
    else:
        await db.rollback()
    return deleted
