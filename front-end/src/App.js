import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./componentes/session/Login";
import Fotter from "./componentes/globalLayouts/Fotter";
import DashWelcome from "./componentes/welcome/dashwelcome";
import ProtectedRoute from "./componentes/protected/routeProtected";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/dash" element={
            <ProtectedRoute>
              <DashWelcome/>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  )
}