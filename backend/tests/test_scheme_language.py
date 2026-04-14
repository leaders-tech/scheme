"""Test backend scheme diagnostics for structure and signal-flow rules.

Edit this file when backend scheme validation rules change.
Copy this file as a starting point when you add another backend parser test.
"""

from backend.scheme.language import parse_and_validate_main_scheme


def test_backend_reports_duplicate_writes() -> None:
    _, diagnostics = parse_and_validate_main_scheme(
        "\n".join(
            [
                "scheme (x1 x2) main (out):",
                " local temp",
                " (x1 x2) and (temp)",
                " (x1 x2) or (temp)",
                " (x1) not (out)",
                " (x2) not (out)",
                "end",
            ]
        )
    )

    messages = [item.message for item in diagnostics]
    assert 'Signal "temp" can only be written once in scheme "main".' in messages
    assert 'Signal "out" can only be written once in scheme "main".' in messages


def test_backend_reports_local_used_without_writer() -> None:
    _, diagnostics = parse_and_validate_main_scheme(
        "\n".join(
            [
                "scheme (x) main (out):",
                " local temp",
                " (temp) not (out)",
                "end",
            ]
        )
    )

    assert [item.message for item in diagnostics] == [
        'Local signal "temp" is used as an input, but no statement writes to it in scheme "main".'
    ]


def test_backend_reports_signal_graph_cycles() -> None:
    _, diagnostics = parse_and_validate_main_scheme(
        "\n".join(
            [
                "scheme (x) main (out):",
                " local left right",
                " (x right) and (left)",
                " (left) not (right)",
                " (left) not (out)",
                "end",
            ]
        )
    )

    assert any('Signal graph in scheme "main" must be acyclic.' in item.message for item in diagnostics)
