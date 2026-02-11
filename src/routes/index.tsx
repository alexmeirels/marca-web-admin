import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Schedules from "../pages/Schedules";
import Reservation from "../pages/Reservation";
import Customers from "../pages/Customers";
import Login from "../pages/Login";
import useAuth from "../hooks/useAuth";
// import NotFound from "../pages/NotFound";

type RouteGuardProps = {
  children: React.ReactElement;
};

function PrivateRoute({ children, isAuthenticated }: RouteGuardProps & { isAuthenticated: boolean }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function PublicRoute({ children, isAuthenticated }: RouteGuardProps & { isAuthenticated: boolean }) {
  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default function AppRoutes() {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <PublicRoute isAuthenticated={isAuthenticated}>
              <Login />
            </PublicRoute>
          }
        />

        {/* Área logada com sidebar (sem fluxo de login agora) */}
        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <MainLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="schedules" element={<Schedules />} />
          <Route path="reservations" element={<Reservation />} />
          <Route path="customers" element={<Customers />} />
        </Route>

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
