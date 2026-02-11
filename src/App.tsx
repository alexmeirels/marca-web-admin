import "./App.css";
import AppRoutes from "./routes";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { AuthProvider } from "./contexts/AuthProvider";

function App() {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </LocalizationProvider>
  );
}

export default App;
