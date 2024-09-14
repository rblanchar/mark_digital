import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import AuthProvider from "./AuthProvider";
import ScrollToTop from "./components/ScrollToTop";
import { CarritoProvider } from "./components/CarritoContext";
import Login from "./pages/Login";
import Dashboard from "./pages/Dasboard";
import About from "./pages/About";
import RegisterUser from "./pages/RegisterUser";
import Home from "./pages/Home";
import Cursos from "./pages/Cursos/Cursos"
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import VerificationPage from "./pages/VerificationPage";
import Privacidad from "./pages/Privacidad";
import Terminos from "./pages/Terminos";
import AvisoLegal from "./pages/AvisoLegal";
import './styles/Login.css';


function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <CarritoProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Cursos />} />
            <Route path="/register-user" element={<RegisterUser />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/verify-account/:token" element={<VerificationPage />} />
            <Route path="/privacy" element={<Privacidad />} />
            <Route path="/terms" element={<Terminos />} />
            <Route path="/legal" element={<AvisoLegal />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </AuthProvider>
      </CarritoProvider>
    </div>
  );
}

export default App;
