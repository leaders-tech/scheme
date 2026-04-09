/*
This file builds the main frontend layout, routes, and auth guard behavior.
Edit this file when top-level pages, navigation, or auth redirects change.
Copy the route pattern here when you add another top-level page.
*/

import { Link, Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./auth";
import { LoginPage } from "../pages/LoginPage";
import { WorkspacePage } from "../pages/WorkspacePage";
import { TasksPage } from "../pages/TasksPage";
import { AdminTasksPage } from "../pages/AdminTasksPage";

function Layout({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eef6ff_100%)]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-4 pt-6">
        <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-2 py-1 text-sm">
          <Link className="rounded-full px-3 py-2 text-slate-700 hover:bg-slate-100" to={user ? "/sandbox" : "/login"}>
            Sandbox
          </Link>
          <Link className="rounded-full px-3 py-2 text-slate-700 hover:bg-slate-100" to={user ? "/tasks" : "/login"}>
            Tasks
          </Link>
          <Link className="rounded-full px-3 py-2 text-slate-700 hover:bg-slate-100" to="/admin/tasks">
            Admin tasks
          </Link>
        </div>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8">{children}</main>
    </div>
  );
}

function RequireAuth({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) {
    return <p className="text-slate-600">Loading session...</p>;
  }
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}

function IndexRoute() {
  const { user, loading } = useAuth();
  if (loading) {
    return <p className="text-slate-600">Loading session...</p>;
  }
  return <Navigate replace to={user ? "/sandbox" : "/login"} />;
}

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<IndexRoute />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/sandbox"
          element={
            <RequireAuth>
              <WorkspacePage />
            </RequireAuth>
          }
        />
        <Route
          path="/tasks"
          element={
            <RequireAuth>
              <TasksPage />
            </RequireAuth>
          }
        />
        <Route path="/admin/tasks" element={<AdminTasksPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Layout>
  );
}

export { RequireAuth };
