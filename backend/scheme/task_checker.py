"""Validate task answer sources and check submitted scheme code against task expectations.

Edit this file when submit verdict rules or task answer validation changes.
Copy this file as a starting point when you add another deterministic checker workflow.
"""

from __future__ import annotations

from dataclasses import dataclass

from backend.scheme.language import ParsedMainScheme, SchemeDiagnostic, evaluate_main_scheme, parse_and_validate_main_scheme


@dataclass(slots=True)
class TaskCheckMismatch:
    case_index: int
    input_bits: str
    expected_output: str
    actual_output: str

    def as_dict(self) -> dict[str, int | str]:
        return {
            "case_index": self.case_index,
            "input_bits": self.input_bits,
            "expected_output": self.expected_output,
            "actual_output": self.actual_output,
        }


@dataclass(slots=True)
class TaskSubmitResult:
    accepted: bool
    message: str
    mismatch: TaskCheckMismatch | None = None
    diagnostics: list[SchemeDiagnostic] | None = None

    def as_dict(self) -> dict[str, object]:
        data: dict[str, object] = {"accepted": self.accepted, "message": self.message}
        if self.mismatch is not None:
            data["mismatch"] = self.mismatch.as_dict()
        if self.diagnostics is not None:
            data["diagnostics"] = [item.as_dict() for item in self.diagnostics]
        return data


def normalize_optional_text(value: str | None) -> str | None:
    if value is None:
        return None
    stripped = value.strip()
    return stripped if stripped else None


def build_input_cases(input_count: int) -> list[str]:
    return [format(index, f"0{input_count}b") for index in range(2**input_count)]


def parse_expected_outputs_text(expected_outputs_text: str, input_count: int, output_count: int) -> list[str]:
    lines = [line.strip() for line in expected_outputs_text.splitlines()]
    if any(line == "" for line in lines):
        raise ValueError("Expected outputs must not contain empty lines.")
    expected_line_count = 2**input_count
    if len(lines) != expected_line_count:
        raise ValueError(f"Expected outputs must contain exactly {expected_line_count} line(s) for N={input_count}.")
    for index, line in enumerate(lines):
        if len(line) != output_count:
            raise ValueError(f"Expected output line {index + 1} must contain exactly {output_count} bit(s).")
        if any(char not in {"0", "1"} for char in line):
            raise ValueError(f'Expected output line {index + 1} must contain only "0" and "1".')
    return lines


def parse_reference_solution(reference_solution: str, input_count: int, output_count: int) -> ParsedMainScheme:
    parsed, diagnostics = parse_and_validate_main_scheme(reference_solution)
    if parsed is None:
        first = diagnostics[0]
        raise ValueError(f"Reference solution is invalid at line {first.line}, column {first.column}: {first.message}")
    if len(parsed.inputs) != input_count:
        raise ValueError(f"Reference solution main scheme must have exactly {input_count} input(s).")
    if len(parsed.outputs) != output_count:
        raise ValueError(f"Reference solution main scheme must have exactly {output_count} output(s).")
    return parsed


def validate_task_answers(
    input_count: int,
    output_count: int,
    expected_outputs_text: str | None,
    reference_solution: str | None,
) -> None:
    normalized_expected = normalize_optional_text(expected_outputs_text)
    normalized_reference = normalize_optional_text(reference_solution)
    if normalized_expected is None and normalized_reference is None:
        raise ValueError("Task must have expected outputs, a reference solution, or both.")
    if normalized_expected is not None:
        parse_expected_outputs_text(normalized_expected, input_count, output_count)
    if normalized_reference is not None:
        parse_reference_solution(normalized_reference, input_count, output_count)


def evaluate_solution_table(parsed: ParsedMainScheme, input_count: int) -> list[str]:
    outputs: list[str] = []
    for bits in build_input_cases(input_count):
        input_state = {parsed.inputs[index]: 1 if bits[index] == "1" else 0 for index in range(input_count)}
        output_bits = evaluate_main_scheme(parsed, input_state)
        outputs.append("".join("1" if value == 1 else "0" for value in output_bits))
    return outputs


def check_submission(
    input_count: int,
    output_count: int,
    expected_outputs_text: str | None,
    reference_solution: str | None,
    submitted_solution: str,
) -> TaskSubmitResult:
    normalized_expected = normalize_optional_text(expected_outputs_text)
    normalized_reference = normalize_optional_text(reference_solution)

    parsed_submitted, submitted_diagnostics = parse_and_validate_main_scheme(submitted_solution)
    if parsed_submitted is None:
        return TaskSubmitResult(
            accepted=False,
            message="Submitted solution has syntax or structure errors.",
            diagnostics=submitted_diagnostics,
        )
    if len(parsed_submitted.inputs) != input_count:
        return TaskSubmitResult(
            accepted=False,
            message=f"Submitted main scheme must have exactly {input_count} input(s), got {len(parsed_submitted.inputs)}.",
        )
    if len(parsed_submitted.outputs) != output_count:
        return TaskSubmitResult(
            accepted=False,
            message=f"Submitted main scheme must have exactly {output_count} output(s), got {len(parsed_submitted.outputs)}.",
        )

    student_outputs = evaluate_solution_table(parsed_submitted, input_count)
    inputs = build_input_cases(input_count)

    expected_outputs: list[str]
    if normalized_expected is not None:
        expected_outputs = parse_expected_outputs_text(normalized_expected, input_count, output_count)
    elif normalized_reference is not None:
        parsed_reference = parse_reference_solution(normalized_reference, input_count, output_count)
        expected_outputs = evaluate_solution_table(parsed_reference, input_count)
    else:
        raise ValueError("Task has no answer source configured.")

    for index, expected in enumerate(expected_outputs):
        actual = student_outputs[index]
        if expected != actual:
            return TaskSubmitResult(
                accepted=False,
                message="Wrong answer on one of the input combinations.",
                mismatch=TaskCheckMismatch(
                    case_index=index,
                    input_bits=inputs[index],
                    expected_output=expected,
                    actual_output=actual,
                ),
            )

    return TaskSubmitResult(accepted=True, message="Accepted.")
