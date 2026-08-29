"""Update the seeded parity task for Schemio's first-scheme entry rule.

Edit this file only if this migration has not been used yet.
Create a new migration file instead when an existing task needs another production update.
"""

from __future__ import annotations

from datetime import UTC, datetime

from yoyo import step


TASK_TITLE = "5. Build Odd Parity for Four Inputs"

NEW_STATEMENT = """# Build Odd Parity for Four Inputs
## Theory
Odd parity means that the output is `1` when the number of input ones is odd.
With four inputs, that means the output is `1` when there are exactly one or three ones.
The first scheme in the file is the main scheme.
You may define helper schemes after the main scheme in the same file.
A good plan is to build a helper `xor2`, then use it again to combine larger groups.
## Task
Build a scheme with four input signals and one output signal.
The output must be `1` when the number of ones on the input is odd.
## What to submit
- Write the final scheme first.
- Write a helper scheme `xor2` after it.
- Use the input names `a`, `b`, `c`, and `d`.
- Use the output name `out`."""

NEW_REFERENCE = """scheme (a b c d) main (out):
 local left right
 (a b) xor2 (left)
 (c d) xor2 (right)
 (left right) xor2 (out)
end

scheme (a b) xor2 (out):
 local not_a not_b a_and_not_b not_a_and_b
 (a) not (not_a)
 (b) not (not_b)
 (a not_b) and (a_and_not_b)
 (not_a b) and (not_a_and_b)
 (a_and_not_b not_a_and_b) or (out)
end"""

OLD_STATEMENT = """# Build Odd Parity for Four Inputs
## Theory
Odd parity means that the output is `1` when the number of input ones is odd.
With four inputs, that means there are exactly one or three ones.
You may define helper schemes before the final scheme in the same file.
A good plan is to build a helper `xor2`, then use it again to combine larger groups.
## Task
Build a scheme with four input signals and one output signal.
The output must be `1` when the number of ones on the input is odd.
## What to submit
- Write a helper scheme `xor2` first.
- Write the final scheme after the helper scheme.
- Use the input names `a`, `b`, `c`, and `d`.
- Use the output name `out`."""

OLD_REFERENCE = """scheme (a b) xor2 (out):
 local not_a not_b a_and_not_b not_a_and_b
 (a) not (not_a)
 (b) not (not_b)
 (a not_b) and (a_and_not_b)
 (not_a b) and (not_a_and_b)
 (a_and_not_b not_a_and_b) or (out)
end

scheme (a b c d) main (out):
 local left right
 (a b) xor2 (left)
 (c d) xor2 (right)
 (left right) xor2 (out)
end"""


def now() -> str:
    return datetime.now(tz=UTC).isoformat(timespec="seconds")


def update_task(connection, statement_markdown: str, reference_solution: str) -> None:
    connection.execute(
        """
        UPDATE tasks
        SET statement_markdown = ?, reference_solution = ?, updated_at = ?
        WHERE title = ?
        """,
        (statement_markdown, reference_solution, now(), TASK_TITLE),
    )


def apply_first_scheme_rule(connection) -> None:
    update_task(connection, NEW_STATEMENT, NEW_REFERENCE)


def rollback_first_scheme_rule(connection) -> None:
    update_task(connection, OLD_STATEMENT, OLD_REFERENCE)


steps = [step(apply_first_scheme_rule, rollback_first_scheme_rule)]
