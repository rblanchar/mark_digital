import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../AuthProvider";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer"
import "../styles/Login.css";

const Login = () => {
  const [input, setInput] = useState({
    username: "",
    password: "",
  });

  const [mensaje, setMensaje] = useState("");
  const { loginAction } = useAuth();

  const handleSubmitEvent = async (e) => {
    e.preventDefault();
    if (input.username !== "" && input.password !== "") {
      try {
        const response = await loginAction(input);
        if (response.success) {
          setMensaje("");
        } else {
          setMensaje("Usuario o contraseña incorrecta");
        }
      } catch (error) {
        setMensaje("Error en el inicio de sesión");
      }
      return;
    }
    alert("El usuario y la contraseña son obligatorios");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="container-login">
        <Navbar />
        <div className="container-login-contenido">
          <h2 className="title-login-user">ACCESO DE USUARIO</h2>
          <img src="https://firebasestorage.googleapis.com/v0/b/marketingdigital-13e4b.appspot.com/o/imagenes%2Flogin%2Flogo-escala-grises.png?alt=media" alt="logo-mkdpt" loading="lazy" className="logo-mkdpt" />
          <img src="https://firebasestorage.googleapis.com/v0/b/marketingdigital-13e4b.appspot.com/o/imagenes%2Flogin%2Fimagen-login.png?alt=media" alt="logo-login" loading="lazy" className="logo-login" />
          <div id="mensaje">{mensaje}</div>
          <form id="datos" onSubmit={handleSubmitEvent}>
            <div>
              <label htmlFor="user-name"></label>
              <input
                type="text"
                id="user-name"
                name="username"
                aria-describedby="user-name"
                aria-invalid="false"
                placeholder="Usuario o Correo electronico"
                onChange={handleInput}
              />
              <div id="user-name" className="sr-onlyLG"></div>
            </div>
            <div>
              <label htmlFor="password"></label>
              <input
                type="password"
                id="password"
                name="password"
                aria-describedby="user-password"
                aria-invalid="false"
                placeholder="Contraseña"
                onChange={handleInput}
              />
              <div id="user-password" className="sr-onlyLG"></div>
            </div>
            <div className="olvide-pass">
              Si no recuerdas tu contraseña, haz clic en <a href="/forgot-password"> <u>Olvidé mi Contraseña</u></a> para iniciar el proceso de recuperación y acceder nuevamente a tu cuenta.
            </div>
            <div className="cont-registrarse">
              <div>
                <p>
                  ¿Aún no tienes una cuenta?<br />
                </p>
                <NavLink to="/register/user">
                  <span className="enlace-registrarse"> <b>Registrarse</b></span>
                </NavLink>
              </div>
              <button className="btn-submit-login"><b>INGRESAR</b></button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
