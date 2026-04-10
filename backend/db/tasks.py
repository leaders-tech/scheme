"""Store and load prepared assignment tasks used by student submit checks.

Edit this file when the tasks table or task query behavior changes.
Copy this file as a starting point when you add queries for another table.
"""

from __future__ import annotations

from dataclasses import dataclass
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
    return {
        "id": row["id"],
        "title": row["title"],
        "statement_markdown": row["statement_markdown"],
        "input_count": row["input_count"],
        "output_count": row["output_count"],
        "created_at": row["created_at"],
        "updated_at": row["updated_at"],
    }


async def list_tasks_for_student(db: aiosqlite.Connection) -> list[dict[str, Any]]:
    cursor = await db.execute(
        """
        SELECT id, title, statement_markdown, input_count, output_count, created_at, updated_at
        FROM tasks
        ORDER BY id
        """
    )
    rows = await cursor.fetchall()
    return [row_to_student_task(row) for row in rows if row is not None]


async def get_task_for_student(db: aiosqlite.Connection, task_id: int) -> dict[str, Any] | None:
    cursor = await db.execute(
        """
        SELECT id, title, statement_markdown, input_count, output_count, created_at, updated_at
        FROM tasks
        WHERE id = ?
        """,
        (task_id,),
    )
    return row_to_student_task(await cursor.fetchone())


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
        ORDER BY id
        """
    )
    rows = await cursor.fetchall()
    return [row_to_admin_task(row) for row in rows if row is not None]


async def create_task(db: aiosqlite.Connection, payload: TaskPayload) -> dict[str, Any]:
    now = utc_now_text()
    cursor = await db.execute(
        """
        INSERT INTO tasks (
            title,
            statement_markdown,
            input_count,
            output_count,
            expected_outputs_text,
            reference_solution,
            created_at,
            updated_at
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """,
        (
            payload.title,
            payload.statement_markdown,
            payload.input_count,
            payload.output_count,
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
