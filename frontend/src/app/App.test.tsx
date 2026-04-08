/*
This file tests the main app router and route guards.
Edit this file when top-level routes or auth redirects change.
Copy a test pattern here when you add another route or route guard.
*/

import "@testing-library/jest-dom/vitest";
import { describe, expect, it, vi } from "vitest";

vi.mock("../pages/WorkspacePage", () => ({
  WorkspacePage: () => <h2>Workspace</h2>,
}));

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { App } from "./App";
import { AuthContext } from "./auth";
import type { User } from "../shared/types";

const userValue: User = {
  id: 2,
  username: "user",
  is_admin: false,
  created_at: "2026-03-06T10:00:00+00:00",
  updated_at: "2026-03-06T10:00:00+00:00",
};

function renderApp(path: string, user: User | null) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AuthContext.Provider
        value={{
          user,
          loading: false,
          login: vi.fn(),
          logout: vi.fn(),
          reloadUser: vi.fn(),
        }}
      >
        <App />
      </AuthContext.Provider>
    </MemoryRouter>,
  );
}

describe("App routes", () => {
  it("redirects anonymous users to login", () => {
    renderApp("/workspace", null);
    expect(screen.getByRole("heading", { name: "Login" })).toBeInTheDocument();
  });

  it("sends logged-in users to the workspace from the root route", () => {
    renderApp("/", userValue);
    expect(screen.getByRole("heading", { name: "Workspace" })).toBeInTheDocument();
  });
});
