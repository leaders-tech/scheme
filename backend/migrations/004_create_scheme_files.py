"""Create the scheme_files table for saved scheme editor files.

Edit this file only if this migration has not been used yet.
Create a new migration file instead when you need another schema change.
"""

from yoyo import step


steps = [
    step(
        """
        CREATE TABLE scheme_files (
            id INTEGER PRIMARY KEY,
            user_id INTEGER NOT NULL,
            name TEXT NOT NULL,
            content TEXT NOT NULL,
            created_at TEXT NOT NULL,
            updated_at TEXT NOT NULL,
            FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
        ) STRICT
        """,
        "DROP TABLE scheme_files",
    )
]
