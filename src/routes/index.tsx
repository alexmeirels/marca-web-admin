import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Dashboard from "../pages/Dashboard";
import Schedules from "../pages/Schedules";
import Reservation from "../pages/Reservation";
import Customers from "../pages/Customers";
// import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Área logada com sidebar (sem fluxo de login agora) */}
        <Route path="/" element={<MainLayout />}>
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
