"""Handle non-auth JSON endpoints such as health and scheme file CRUD.

Edit this file when app endpoints outside the auth and websocket groups change.
Copy the route pattern here when you add another endpoint group backed by backend/db code.
"""

from __future__ import annotations

from aiohttp import web

from backend.auth.access import require_user
from backend.db.scheme_files import create_scheme_file, delete_scheme_file, list_scheme_files, save_scheme_file
from backend.http.json_api import AppError, ok, read_json
from backend.http.middleware import require_allowed_origin


async def health(request: web.Request) -> web.Response:
    return ok({"status": "ok"})


async def scheme_files_list(request: web.Request) -> web.Response:
    user = require_user(request)
    files = await list_scheme_files(request.app["db"], user["id"])
    return ok({"files": files})


async def scheme_files_create(request: web.Request) -> web.Response:
    require_allowed_origin(request)
    user = require_user(request)
    payload = await read_json(request)
    name = str(payload.get("name", "")).strip()
    content = str(payload.get("content", ""))
    if not name:
        raise AppError(400, "bad_request", "File name is required.")
    scheme_file = await create_scheme_file(request.app["db"], user["id"], name, content)
    return ok({"file": scheme_file}, status=201)


async def scheme_files_save(request: web.Request) -> web.Response:
    require_allowed_origin(request)
    user = require_user(request)
    payload = await read_json(request)
    file_id = payload.get("id")
    name = str(payload.get("name", "")).strip()
    content = str(payload.get("content", ""))
    if not isinstance(file_id, int):
        raise AppError(400, "bad_request", "File id must be an integer.")
    if not name:
        raise AppError(400, "bad_request", "File name is required.")
    scheme_file = await save_scheme_file(request.app["db"], user["id"], file_id, name, content)
    if scheme_file is None:
        raise AppError(404, "not_found", "File does not exist.")
    return ok({"file": scheme_file})


async def scheme_files_delete(request: web.Request) -> web.Response:
    require_allowed_origin(request)
    user = require_user(request)
    payload = await read_json(request)
    file_id = payload.get("id")
    if not isinstance(file_id, int):
        raise AppError(400, "bad_request", "File id must be an integer.")
    deleted = await delete_scheme_file(request.app["db"], user["id"], file_id)
    if not deleted:
        raise AppError(404, "not_found", "File does not exist.")
    return ok({"deleted": True, "id": file_id})


def setup_api_routes(app: web.Application) -> None:
    app.router.add_get("/health", health)
    app.router.add_post("/scheme-files/list", scheme_files_list)
    app.router.add_post("/scheme-files/create", scheme_files_create)
    app.router.add_post("/scheme-files/save", scheme_files_save)
    app.router.add_post("/scheme-files/delete", scheme_files_delete)
