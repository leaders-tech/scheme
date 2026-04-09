"""Handle non-auth JSON endpoints such as health, scheme file CRUD, and task APIs.

Edit this file when app endpoints outside the auth and websocket groups change.
Copy the route pattern here when you add another endpoint group backed by backend/db code.
"""

from __future__ import annotations

from aiohttp import web

from backend.auth.access import require_user
from backend.db.scheme_files import create_scheme_file, delete_scheme_file, list_scheme_files, save_scheme_file
from backend.db.tasks import (
    TaskPayload,
    create_task,
    delete_task,
    get_task_for_admin,
    get_task_for_student,
    list_tasks_for_admin,
    list_tasks_for_student,
    save_task,
)
from backend.http.json_api import AppError, ok, read_json
from backend.http.middleware import require_allowed_origin
from backend.scheme.task_checker import check_submission, normalize_optional_text, validate_task_answers


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


def read_task_payload(payload: dict[str, object]) -> TaskPayload:
    title = str(payload.get("title", "")).strip()
    statement_markdown = str(payload.get("statement_markdown", "")).strip()
    input_count = payload.get("input_count")
    output_count = payload.get("output_count")
    if not title:
        raise AppError(400, "bad_request", "Task title is required.")
    if not statement_markdown:
        raise AppError(400, "bad_request", "Task statement markdown is required.")
    if not isinstance(input_count, int) or input_count < 0 or input_count > 10:
        raise AppError(400, "bad_request", "Input count must be an integer between 0 and 10.")
    if not isinstance(output_count, int) or output_count < 1 or output_count > 10:
        raise AppError(400, "bad_request", "Output count must be an integer between 1 and 10.")
    expected_outputs_text = normalize_optional_text(str(payload["expected_outputs_text"]) if payload.get("expected_outputs_text") is not None else None)
    reference_solution = normalize_optional_text(str(payload["reference_solution"]) if payload.get("reference_solution") is not None else None)
    try:
        validate_task_answers(
            input_count=input_count,
            output_count=output_count,
            expected_outputs_text=expected_outputs_text,
            reference_solution=reference_solution,
        )
    except ValueError as error:
        raise AppError(400, "bad_request", str(error)) from error
    return TaskPayload(
        title=title,
        statement_markdown=statement_markdown,
        input_count=input_count,
        output_count=output_count,
        expected_outputs_text=expected_outputs_text,
        reference_solution=reference_solution,
    )


async def tasks_list(request: web.Request) -> web.Response:
    require_user(request)
    tasks = await list_tasks_for_student(request.app["db"])
    return ok({"tasks": tasks})


async def tasks_get(request: web.Request) -> web.Response:
    require_user(request)
    payload = await read_json(request)
    task_id = payload.get("id")
    if not isinstance(task_id, int):
        raise AppError(400, "bad_request", "Task id must be an integer.")
    task = await get_task_for_student(request.app["db"], task_id)
    if task is None:
        raise AppError(404, "not_found", "Task does not exist.")
    return ok({"task": task})


async def tasks_submit(request: web.Request) -> web.Response:
    require_allowed_origin(request)
    require_user(request)
    payload = await read_json(request)
    task_id = payload.get("task_id")
    solution = str(payload.get("solution", ""))
    if not isinstance(task_id, int):
        raise AppError(400, "bad_request", "Task id must be an integer.")
    task = await get_task_for_admin(request.app["db"], task_id)
    if task is None:
        raise AppError(404, "not_found", "Task does not exist.")
    try:
        result = check_submission(
            input_count=int(task["input_count"]),
            output_count=int(task["output_count"]),
            expected_outputs_text=task["expected_outputs_text"],
            reference_solution=task["reference_solution"],
            submitted_solution=solution,
        )
    except ValueError as error:
        raise AppError(400, "bad_request", str(error)) from error
    return ok({"result": result.as_dict()})


async def admin_tasks_list(request: web.Request) -> web.Response:
    tasks = await list_tasks_for_admin(request.app["db"])
    return ok({"tasks": tasks})


async def admin_tasks_create(request: web.Request) -> web.Response:
    require_allowed_origin(request)
    payload = await read_json(request)
    task_payload = read_task_payload(payload)
    task = await create_task(request.app["db"], task_payload)
    return ok({"task": task}, status=201)


async def admin_tasks_save(request: web.Request) -> web.Response:
    require_allowed_origin(request)
    payload = await read_json(request)
    task_id = payload.get("id")
    if not isinstance(task_id, int):
        raise AppError(400, "bad_request", "Task id must be an integer.")
    task_payload = read_task_payload(payload)
    task = await save_task(request.app["db"], task_id, task_payload)
    if task is None:
        raise AppError(404, "not_found", "Task does not exist.")
    return ok({"task": task})


async def admin_tasks_delete(request: web.Request) -> web.Response:
    require_allowed_origin(request)
    payload = await read_json(request)
    task_id = payload.get("id")
    if not isinstance(task_id, int):
        raise AppError(400, "bad_request", "Task id must be an integer.")
    deleted = await delete_task(request.app["db"], task_id)
    if not deleted:
        raise AppError(404, "not_found", "Task does not exist.")
    return ok({"deleted": True, "id": task_id})


def setup_api_routes(app: web.Application) -> None:
    app.router.add_get("/health", health)
    app.router.add_post("/scheme-files/list", scheme_files_list)
    app.router.add_post("/scheme-files/create", scheme_files_create)
    app.router.add_post("/scheme-files/save", scheme_files_save)
    app.router.add_post("/scheme-files/delete", scheme_files_delete)
    app.router.add_post("/tasks/list", tasks_list)
    app.router.add_post("/tasks/get", tasks_get)
    app.router.add_post("/tasks/submit", tasks_submit)
    app.router.add_post("/admin/tasks/list", admin_tasks_list)
    app.router.add_post("/admin/tasks/create", admin_tasks_create)
    app.router.add_post("/admin/tasks/save", admin_tasks_save)
    app.router.add_post("/admin/tasks/delete", admin_tasks_delete)
