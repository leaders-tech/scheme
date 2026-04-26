"""Add an internal sort order to tasks so series order is stable.

Edit this file only if this migration has not been used yet.
Create a new migration file instead when you need another tasks schema change.
"""

from yoyo import step


steps = [
    step(
        """
        ALTER TABLE tasks ADD COLUMN sort_index INTEGER NOT NULL DEFAULT 0
        """,
        """
        ALTER TABLE tasks DROP COLUMN sort_index
        """,
    ),
    step(
        """
        UPDATE tasks
        SET sort_index = 1000 + id
        WHERE sort_index = 0
        """,
        """
        UPDATE tasks
        SET sort_index = 0
        WHERE sort_index >= 1000
        """,
    ),
]
