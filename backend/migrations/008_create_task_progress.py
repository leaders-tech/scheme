"""Create saved task drafts and submission history for each student.

Edit this file only if this migration has not been used yet.
Create a new migration file instead when you need another task progress schema change.
"""

from yoyo import step


steps = [
    step(
        """
        CREATE TABLE task_progress (
            user_id INTEGER NOT NULL,
            task_id INTEGER NOT NULL,
            draft_solution TEXT NOT NULL,
            passed INTEGER NOT NULL CHECK (passed IN (0, 1)),
            created_at TEXT NOT NULL,
            updated_at TEXT NOT NULL,
            UNIQUE (user_id, task_id),
            FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
            FOREIGN KEY (task_id) REFERENCES tasks (id) ON DELETE CASCADE
        ) STRICT
        """,
        "DROP TABLE task_progress",
    ),
    step(
        """
        CREATE TABLE task_submissions (
            id INTEGER PRIMARY KEY,
            user_id INTEGER NOT NULL,
            task_id INTEGER NOT NULL,
            solution TEXT NOT NULL,
            accepted INTEGER NOT NULL CHECK (accepted IN (0, 1)),
            result_json TEXT NOT NULL,
            created_at TEXT NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
            FOREIGN KEY (task_id) REFERENCES tasks (id) ON DELETE CASCADE
        ) STRICT
        """,
        "DROP TABLE task_submissions",
    ),
]
