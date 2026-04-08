"""Store and load user-owned scheme files for the learning workspace.

Edit this file when the scheme_files table or file query behavior changes.
Copy this file as a starting point when you add queries for another user-owned table.
"""

from __future__ import annotations

from typing import Any

import aiosqlite

from backend.db.connection import utc_now_text


def row_to_scheme_file(row: aiosqlite.Row) -> dict[str, object]:
    return dict(row)


async def list_scheme_files(db: aiosqlite.Connection, user_id: int) -> list[dict[str, Any]]:
    cursor = await db.execute(
        """
        SELECT id, user_id, name, content, created_at, updated_at
        FROM scheme_files
        WHERE user_id = ?
        ORDER BY id ASC
        """,
        (user_id,),
    )
    rows = await cursor.fetchall()
    return [row_to_scheme_file(row) for row in rows]


async def create_scheme_file(db: aiosqlite.Connection, user_id: int, name: str, content: str = "") -> dict[str, Any]:
    now = utc_now_text()
    cursor = await db.execute(
        """
        INSERT INTO scheme_files (user_id, name, content, created_at, updated_at)
        VALUES (?, ?, ?, ?, ?)
        RETURNING id, user_id, name, content, created_at, updated_at
        """,
        (user_id, name, content, now, now),
    )
    row = await cursor.fetchone()
    await db.commit()
    if row is None:
        raise ValueError("Scheme file was not created.")
    return row_to_scheme_file(row)


async def save_scheme_file(
    db: aiosqlite.Connection,
    user_id: int,
    file_id: int,
    name: str,
    content: str,
) -> dict[str, Any] | None:
    cursor = await db.execute(
        """
        UPDATE scheme_files
        SET name = ?, content = ?, updated_at = ?
        WHERE id = ? AND user_id = ?
        RETURNING id, user_id, name, content, created_at, updated_at
        """,
        (name, content, utc_now_text(), file_id, user_id),
    )
    row = await cursor.fetchone()
    await db.commit()
    if row is None:
        return None
    return row_to_scheme_file(row)


async def delete_scheme_file(db: aiosqlite.Connection, user_id: int, file_id: int) -> bool:
    cursor = await db.execute("DELETE FROM scheme_files WHERE id = ? AND user_id = ?", (file_id, user_id))
    await db.commit()
    return cursor.rowcount > 0
