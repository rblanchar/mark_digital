import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/Login.css";
import "../styles/ResetPassword.css"
import Swal from "sweetalert2";

const ResetPassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
  
  }, [token]);

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      Swal.fire({
        text: "Las contraseñas no coinciden",
        icon: "error",
        confirmButtonText: "Error",
      });
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/usuarios/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, password }), 
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          text: "Contraseña actualizada exitosamente",
          icon: "success",
          confirmButtonText: "¡Listo!",
        }).then(() => {
          navigate("/login");
        });
      } else {
        Swal.fire({
          text: data.message || "Error al actualizar la contraseña",
          icon: "error",
          confirmButtonText: "Error",
        });
      }
    } catch (error) {
      Swal.fire({
        text: "Error de conexión",
        icon: "error",
        confirmButtonText: "Error",
      });
    }
  };

  return (
    <div>
      <div className="container-login">
        <Navbar />
        <div className="container-login-contenido">
          <h2 className="title-reset-pass">ACTUALIZAR CONTRASEÑA</h2>
          <img
            src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725172120/imagenes/login/rtxexftuvw2koarf1h8d.png"
            alt="logo-mkdpt"
            loading="lazy"
            className="logo-mkdpt-register"
          />
          <img
            src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725172120/imagenes/login/cqdbgmhmg8wmqtc4cwty.png"
            alt="logo-login"
            loading="lazy"
            className="logo-reset-pass"
          />
          <form id="datos" onSubmit={handleResetPassword}>
            <div>
              <label htmlFor="password"></label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Nueva contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="confirm-password"></label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="Confirmar contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="cont-reset-password">
              <button className="btn-submit-reset"><b>ACTUALIZAR</b></button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPassword;
