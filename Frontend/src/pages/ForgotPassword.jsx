import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer"
import "../styles/ForgotPassword.css"
import Swal from "sweetalert2";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/usuarios/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          text: "Revisa tu bandeja de entrada para restablecer tu contraseña",
          icon: "success",
          confirmButtonText: "¡Correo enviado!"
        });
        setEmail("");
      } else {
        Swal.fire({
          text:  data.message || "Error al enviar el correo de restablecimiento",
          icon: "error",
          confirmButtonText: "Error"
        });
      }
    } catch (error) {
      Swal.fire({
        text:  "Error de conexion",
        icon: "error",
        confirmButtonText: "Error"
      });
    }
  };


  return (
    <div>
      <div className="container-olvido">
        <Navbar />
        <div className="container-login-contenido">
          <h2 className="title-reset-pass">REESTABLECER CONTRASEÑA</h2>
          <img src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725172120/imagenes/login/rtxexftuvw2koarf1h8d.png" alt="logo-mkdpt" loading="lazy" className="logo-mkdpt" />
          <img src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725172120/imagenes/login/cqdbgmhmg8wmqtc4cwty.png" alt="logo-login" loading="lazy" className="logo-reset-pass" />
          <form id="datos" onSubmit={handleForgotPassword}>
            <div>
              <label htmlFor="user-name-reset"></label>
              <input
                type="text"
                id="user-name-reset"
                name="user-name-reset"
                aria-describedby="user-name"
                aria-invalid="false"
                placeholder="Correo electronico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="texto-reset-pass">
              Por favor, ingresa tu dirección de correo electrónico registrado. Te enviaremos un enlace para restablecer tu contraseña.
            </div>
            <div className="cont-registrarse">
              <div className="enlace-volver">
                <NavLink to="/login">
                  <span> <i><u>Regresar a Inicio de Sesión</u></i></span>
                </NavLink>
              </div>
              <button className="btn-submit-login"><b>REESTABLECER</b></button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ForgotPassword;
