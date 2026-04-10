/*
This file renders the logged-in student tasks page and wires auth actions into the tasks workspace.
Edit this file when the student tasks page framing or auth handoff changes.
Copy this file as a starting point when adding another full-page auth-gated feature.
*/

import { useAuth } from "../app/auth";
import { TasksWorkspace } from "../features/tasks/TasksWorkspace";

export function TasksPage() {
  const { user, logout } = useAuth();
  if (!user) {
    return null;
  }
  return <TasksWorkspace onLogout={logout} user={user} />;
}
