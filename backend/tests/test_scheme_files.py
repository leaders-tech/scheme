"""Test scheme file endpoint behavior against a temporary backend test database.

Edit this file when scheme file routes or file queries change.
Copy a test pattern here when you add tests for another small CRUD feature.
"""

from __future__ import annotations

import pytest

from backend.tests.conftest import login


@pytest.mark.asyncio
async def test_scheme_files_crud(client, create_user, auth_headers) -> None:
    await create_user("user", "user")
    await login(client, "user", "user", auth_headers)

    create_response = await client.post(
        "/scheme-files/create",
        json={"name": "scheme 1", "content": "scheme () main ():\nend"},
        headers=auth_headers,
    )
    assert create_response.status == 201
    scheme_file = (await create_response.json())["data"]["file"]

    list_response = await client.post("/scheme-files/list", json={})
    assert list_response.status == 200
    listed_files = (await list_response.json())["data"]["files"]
    assert [item["name"] for item in listed_files] == ["scheme 1"]

    update_response = await client.post(
        "/scheme-files/save",
        json={"id": scheme_file["id"], "name": "renamed", "content": "scheme () renamed ():\nend"},
        headers=auth_headers,
    )
    assert update_response.status == 200
    saved_file = (await update_response.json())["data"]["file"]
    assert saved_file["name"] == "renamed"
    assert saved_file["content"] == "scheme () renamed ():\nend"

    delete_response = await client.post("/scheme-files/delete", json={"id": scheme_file["id"]}, headers=auth_headers)
    assert delete_response.status == 200


@pytest.mark.asyncio
async def test_scheme_files_are_isolated_per_user(client, create_user, auth_headers) -> None:
    await create_user("user", "user")
    await create_user("second", "second")

    await login(client, "user", "user", auth_headers)
    create_response = await client.post(
        "/scheme-files/create",
        json={"name": "private", "content": "scheme () private ():\nend"},
        headers=auth_headers,
    )
    file_id = (await create_response.json())["data"]["file"]["id"]

    await login(client, "second", "second", auth_headers)

    list_response = await client.post("/scheme-files/list", json={})
    listed_files = (await list_response.json())["data"]["files"]
    assert listed_files == []

    save_response = await client.post(
        "/scheme-files/save",
        json={"id": file_id, "name": "stolen", "content": ""},
        headers=auth_headers,
    )
    assert save_response.status == 404

    delete_response = await client.post("/scheme-files/delete", json={"id": file_id}, headers=auth_headers)
    assert delete_response.status == 404


@pytest.mark.asyncio
async def test_scheme_file_content_can_be_empty_but_name_cannot(client, create_user, auth_headers) -> None:
    await create_user("user", "user")
    await login(client, "user", "user", auth_headers)

    create_response = await client.post("/scheme-files/create", json={"name": "empty ok", "content": ""}, headers=auth_headers)
    assert create_response.status == 201

    bad_create = await client.post("/scheme-files/create", json={"name": "   ", "content": ""}, headers=auth_headers)
    assert bad_create.status == 400

    bad_save = await client.post("/scheme-files/save", json={"id": 999, "name": "   ", "content": ""}, headers=auth_headers)
    assert bad_save.status == 400


@pytest.mark.asyncio
async def test_deleting_missing_scheme_file_returns_404(client, create_user, auth_headers) -> None:
    await create_user("user", "user")
    await login(client, "user", "user", auth_headers)

    delete_response = await client.post("/scheme-files/delete", json={"id": 999}, headers=auth_headers)
    assert delete_response.status == 404
