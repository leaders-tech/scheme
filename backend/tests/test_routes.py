"""Test backend route registration rules.

Edit this file when top-level backend URL rules change.
Copy this file only when you add another small route-shape test group.
"""

from __future__ import annotations

from aiohttp import web


def test_backend_routes_use_api_or_ws_prefix(app: web.Application) -> None:
    bad_paths: list[str] = []
    for route in app.router.routes():
        path = route.resource.canonical
        if path.startswith("/api/") or path == "/ws" or path.startswith("/ws/"):
            continue
        bad_paths.append(path)

    assert sorted(set(bad_paths)) == []
