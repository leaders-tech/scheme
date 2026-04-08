/*
This file builds the main frontend layout, routes, and auth guard behavior.
Edit this file when top-level pages, navigation, or auth redirects change.
Copy the route pattern here when you add another top-level page.
*/

import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "./auth";
import { LoginPage } from "../pages/LoginPage";
import { WorkspacePage } from "../pages/WorkspacePage";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#eef6ff_100%)]">
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
  return <Navigate replace to={user ? "/workspace" : "/login"} />;
}

export function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<IndexRoute />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/workspace"
          element={
            <RequireAuth>
              <WorkspacePage />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Layout>
  );
}

export { RequireAuth };
