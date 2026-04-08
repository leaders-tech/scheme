/*
This file shows the main logged-in workspace page for editing and testing scheme files.
Edit this file when the logged-in main page or workspace framing changes.
Copy this file as a starting point when you add another full-page authenticated workspace.
*/

import { useAuth } from "../app/auth";
import { SchemeWorkspace } from "../features/scheme-workspace/SchemeWorkspace";

export function WorkspacePage() {
  const { user, logout } = useAuth();

  if (!user) {
    return null;
  }

  return <SchemeWorkspace onLogout={logout} user={user} />;
}
