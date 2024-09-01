import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCarrito } from "./components/CarritoContext";

const AuthContext = createContext();

const loginU = async function (data) {
  const usuario = { nombre_usuario: data.username, contrasena: data.password };
  const response = await fetch("http://localhost:3000/api/usuarios/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  });
  return response.json();
};


const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("site") || "");
  const navigate = useNavigate();
  const { limpiarCarrito } = useCarrito();

  const loginAction = async (data) => {
    try {
      let response = await loginU(data);
      if (response && response.usuario) {
        setUser({ ...response.usuario, tipo: "usuario" });
        setToken(response.token);
        localStorage.setItem("site", response.token);
        navigate("/dashboard");
        return { success: true };
      }


      throw new Error(response.error || "Error desconocido");
    } catch (error) {
      console.error("Error al iniciar sesión:", error.message);
      return { success: false };
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("site");
    limpiarCarrito();
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, token, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// Hook personalizado
export const useAuth = () => {
  return useContext(AuthContext);
};
