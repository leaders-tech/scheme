"""Create the first beginner Scheme task series in the tasks table.

Edit this file only if this migration has not been used yet.
Create a new migration file instead when you need another production task batch.
"""

from __future__ import annotations

from datetime import UTC, datetime
from typing import TypedDict

from yoyo import step


class SeedTask(TypedDict):
    title: str
    statement_markdown: str
    input_count: int
    output_count: int
    expected_outputs_text: str
    reference_solution: str
    sort_index: int


def utc_now_text() -> str:
    return datetime.now(tz=UTC).isoformat(timespec="seconds")


def join_lines(lines: list[str]) -> str:
    return "\n".join(lines)


def build_or_outputs(input_count: int) -> str:
    return join_lines(["1" if value > 0 else "0" for value in range(2**input_count)])


def build_majority_of_three_outputs() -> str:
    return join_lines(["1" if format(value, "03b").count("1") >= 2 else "0" for value in range(8)])


def build_xor_two_outputs() -> str:
    return join_lines(["1" if format(value, "02b").count("1") == 1 else "0" for value in range(4)])


def build_odd_parity_outputs(input_count: int) -> str:
    return join_lines(["1" if format(value, f"0{input_count}b").count("1") % 2 == 1 else "0" for value in range(2**input_count)])


def task_one_markdown() -> str:
    return join_lines(
        [
            "# Build OR for Three Inputs",
            "## Theory",
            "A signal in this course is a wire that can carry only `0` or `1`.",
            "You can think of `0` as `false` and `1` as `true`.",
            "The built-in scheme `or` has two inputs and one output.",
            "It outputs `1` when at least one input is `1`.",
            "A line like `(a b) or (x)` means: send signals `a` and `b` into the scheme `or`, and store the result in signal `x`.",
            "Because built-in `or` has only two inputs, you need two `or` calls to combine three input signals.",
            "## Task",
            "Build a scheme with three input signals and one output signal.",
            "The output must be `1` when at least one input is `1`.",
            "## What to submit",
            "- Write one final scheme.",
            "- Use the input names `a`, `b`, and `c`.",
            "- Use the output name `out`.",
            "- You may use `local` for one intermediate signal.",
        ]
    )


def task_two_markdown() -> str:
    return join_lines(
        [
            "# Build OR for Four Inputs",
            "## Theory",
            "Large circuits are built from smaller circuits.",
            "When one result is needed later, store it in a `local` signal.",
            "For four input signals, a simple plan is: combine two signals, combine the other two signals, then combine those two results.",
            "## Task",
            "Build a scheme with four input signals and one output signal.",
            "The output must be `1` when at least one input is `1`.",
            "## What to submit",
            "- Write one final scheme.",
            "- Use the input names `a`, `b`, `c`, and `d`.",
            "- Use the output name `out`.",
            "- Use `local` signals for intermediate results.",
        ]
    )


def task_three_markdown() -> str:
    return join_lines(
        [
            "# Build a Majority-of-Three Circuit",
            "## Theory",
            "With three inputs, there are more ones than zeros exactly when at least two inputs are `1`.",
            "So this task is the same as checking whether two or three inputs are `1`.",
            "A useful idea is to build all pair results first, then combine them.",
            "## Task",
            "Build a scheme with three input signals and one output signal.",
            "The output must be `1` when at least two of the three inputs are `1`.",
            "Otherwise the output must be `0`.",
            "## What to submit",
            "- Write one final scheme.",
            "- Use the input names `a`, `b`, and `c`.",
            "- Use the output name `out`.",
        ]
    )


def task_four_markdown() -> str:
    return join_lines(
        [
            "# Build XOR for Two Inputs",
            "## Theory",
            "XOR means exclusive OR.",
            "For two inputs, XOR outputs `1` only when the inputs are different.",
            "So the output is `1` for `01` and `10`, and `0` for `00` and `11`.",
            "One way to build XOR is to use `not`, `and`, and `or` together.",
            "## Task",
            "Build a scheme with two input signals and one output signal.",
            "The output must be `1` when exactly one input is `1`.",
            "## What to submit",
            "- Write one final scheme.",
            "- Use the input names `a` and `b`.",
            "- Use the output name `out`.",
        ]
    )


def task_five_markdown() -> str:
    return join_lines(
        [
            "# Build Odd Parity for Four Inputs",
            "## Theory",
            "Odd parity means that the output is `1` when the number of input ones is odd.",
            "With four inputs, that means the output is `1` when there are exactly one or three ones.",
            "You may define helper schemes before the final scheme in the same file.",
            "A good plan is to build a helper `xor2`, then use it again to combine larger groups.",
            "## Task",
            "Build a scheme with four input signals and one output signal.",
            "The output must be `1` when the number of ones on the input is odd.",
            "## What to submit",
            "- Write a helper scheme `xor2` first.",
            "- Write the final scheme after the helper scheme.",
            "- Use the input names `a`, `b`, `c`, and `d`.",
            "- Use the output name `out`.",
        ]
    )


def task_one_solution() -> str:
    return join_lines(
        [
            "scheme (a b c) main (out):",
            " local temp",
            " (a b) or (temp)",
            " (temp c) or (out)",
            "end",
        ]
    )


def task_two_solution() -> str:
    return join_lines(
        [
            "scheme (a b c d) main (out):",
            " local left right",
            " (a b) or (left)",
            " (c d) or (right)",
            " (left right) or (out)",
            "end",
        ]
    )


def task_three_solution() -> str:
    return join_lines(
        [
            "scheme (a b c) main (out):",
            " local ab ac bc temp",
            " (a b) and (ab)",
            " (a c) and (ac)",
            " (b c) and (bc)",
            " (ab ac) or (temp)",
            " (temp bc) or (out)",
            "end",
        ]
    )


def xor_two_solution(scheme_name: str) -> str:
    return join_lines(
        [
            f"scheme (a b) {scheme_name} (out):",
            " local not_a not_b a_and_not_b not_a_and_b",
            " (a) not (not_a)",
            " (b) not (not_b)",
            " (a not_b) and (a_and_not_b)",
            " (not_a b) and (not_a_and_b)",
            " (a_and_not_b not_a_and_b) or (out)",
            "end",
        ]
    )


def task_four_solution() -> str:
    return xor_two_solution("main")


def task_five_solution() -> str:
    return join_lines(
        [
            xor_two_solution("xor2"),
            "",
            "scheme (a b c d) main (out):",
            " local left right",
            " (a b) xor2 (left)",
            " (c d) xor2 (right)",
            " (left right) xor2 (out)",
            "end",
        ]
    )


BEGINNER_TASKS: list[SeedTask] = [
    {
        "title": "1. Build OR for Three Inputs",
        "statement_markdown": task_one_markdown(),
        "input_count": 3,
        "output_count": 1,
        "expected_outputs_text": build_or_outputs(3),
        "reference_solution": task_one_solution(),
        "sort_index": 1,
    },
    {
        "title": "2. Build OR for Four Inputs",
        "statement_markdown": task_two_markdown(),
        "input_count": 4,
        "output_count": 1,
        "expected_outputs_text": build_or_outputs(4),
        "reference_solution": task_two_solution(),
        "sort_index": 2,
    },
    {
        "title": "3. Build a Majority-of-Three Circuit",
        "statement_markdown": task_three_markdown(),
        "input_count": 3,
        "output_count": 1,
        "expected_outputs_text": build_majority_of_three_outputs(),
        "reference_solution": task_three_solution(),
        "sort_index": 3,
    },
    {
        "title": "4. Build XOR for Two Inputs",
        "statement_markdown": task_four_markdown(),
        "input_count": 2,
        "output_count": 1,
        "expected_outputs_text": build_xor_two_outputs(),
        "reference_solution": task_four_solution(),
        "sort_index": 4,
    },
    {
        "title": "5. Build Odd Parity for Four Inputs",
        "statement_markdown": task_five_markdown(),
        "input_count": 4,
        "output_count": 1,
        "expected_outputs_text": build_odd_parity_outputs(4),
        "reference_solution": task_five_solution(),
        "sort_index": 5,
    },
]


def apply_seed(connection) -> None:
    now = utc_now_text()
    for task in BEGINNER_TASKS:
        cursor = connection.execute(
            """
            UPDATE tasks
            SET
                statement_markdown = ?,
                input_count = ?,
                output_count = ?,
                sort_index = ?,
                expected_outputs_text = ?,
                reference_solution = ?,
                updated_at = ?
            WHERE title = ?
            """,
            (
                task["statement_markdown"],
                task["input_count"],
                task["output_count"],
                task["sort_index"],
                task["expected_outputs_text"],
                task["reference_solution"],
                now,
                task["title"],
            ),
        )
        if cursor.rowcount == 0:
            connection.execute(
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
                    task["title"],
                    task["statement_markdown"],
                    task["input_count"],
                    task["output_count"],
                    task["sort_index"],
                    task["expected_outputs_text"],
                    task["reference_solution"],
                    now,
                    now,
                ),
            )


def rollback_seed(connection) -> None:
    titles = tuple(task["title"] for task in BEGINNER_TASKS)
    connection.execute(
        f"DELETE FROM tasks WHERE title IN ({', '.join('?' for _ in titles)})",
        titles,
    )


steps = [step(apply_seed, rollback_seed)]
