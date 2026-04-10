"""Create the tasks table for prepared assignment statements and expected answers.

Edit this file only if this migration has not been used yet.
Create a new migration file instead when you need another schema change.
"""

from yoyo import step


steps = [
    step(
        """
        CREATE TABLE tasks (
            id INTEGER PRIMARY KEY,
            title TEXT NOT NULL,
            statement_markdown TEXT NOT NULL,
            input_count INTEGER NOT NULL,
            output_count INTEGER NOT NULL,
            expected_outputs_text TEXT,
            reference_solution TEXT,
            created_at TEXT NOT NULL,
            updated_at TEXT NOT NULL
        ) STRICT
        """,
        "DROP TABLE tasks",
    )
]
