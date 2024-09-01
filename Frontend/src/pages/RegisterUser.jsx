import React, { useState, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer"
import "../styles/RegisterUser.css";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";

const RegisterUser = () => {
  const [usuario, setUsuario] = useState({
    nombre_apellidos: "",
    nombre_usuario: "",
    contrasena: "",
    confirmar_contrasena: "",
    correo: ""
  });
  const [mensaje, setMensaje] = useState("");
  const [mensajeCaptcha, setMensajeCaptcha] = useState("");
  const auth = useAuth();
  const [captchaValido, cambiarCaptchaValido] = useState(null);
  const [usuarioValido, cambiarUsuarioValido] = useState(false);
  const captcha = useRef(null);
  const navigate = useNavigate();

  const handleSubmitEvent = async (e) => {
    e.preventDefault();

    submit(e);

    if (!usuarioValido) {
      setMensajeCaptcha("Por favor, completa el captcha correctamente.");
      return;
    }

    if (usuario.nombre_apellidos.trim() !== "" &&
      usuario.nombre_usuario.trim() !== "" &&
      usuario.contrasena.trim() !== "" &&
      usuario.correo.trim() !== "" &&
      usuario.contrasena === usuario.confirmar_contrasena) { 

      try {
        const response = await fetch("http://localhost:3000/api/usuarios", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth.token}`,
          },
          body: JSON.stringify(usuario),
        });
        const data = await response.json();
        if (response.ok) {
          setMensaje(data.message);
          setUsuario({
            nombre_apellidos: "",
            nombre_usuario: "",
            contrasena: "",
            confirmar_contrasena: "", 
            correo: ""
          });
          Swal.fire({
            text: "Usuario registrado con Éxito!",
            icon: "success",
            confirmButtonText: "OK"
          }).then(() => {
            navigate("/login");
          });
        } else {
          setMensaje(data.message || "Error al registrar el Usuario");
        }
      } catch (error) {
        setMensaje("Error de conexión");
      }
    } else if (usuario.contrasena !== usuario.confirmar_contrasena) {
      setMensaje("Las contraseñas no coinciden");
    } else {
      setMensaje("Todos los campos son obligatorios");
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUsuario((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const onChange = () => {
    if (captcha.current.getValue()) {
      cambiarCaptchaValido(true);
    }
  }

  const submit = (e) => {
    e.preventDefault();
    if (captcha.current.getValue()) {
      cambiarUsuarioValido(true);
      cambiarCaptchaValido(true);
    } else {
      cambiarUsuarioValido(false);
      cambiarCaptchaValido(false);
    }
  }

  return (
    <div>
      <div className="container-register">
        <Navbar />
        <div className="container-register-contenido">
          <h2 className="title-register-user">REGISTRO DE USUARIO</h2>
          <img src="https://firebasestorage.googleapis.com/v0/b/marketingdigital-13e4b.appspot.com/o/imagenes%2Flogin%2Flogo-escala-grises.png?alt=media" alt="logo-mkdpt" loading="lazy" className="logo-mkdpt-register" />
          <img src="https://firebasestorage.googleapis.com/v0/b/marketingdigital-13e4b.appspot.com/o/imagenes%2Flogin%2Fimagen-login.png?alt=media" alt="logo-login" loading="lazy" className="logo-login-register" />
          <div id="mensaje">{mensaje}</div>
          <form id="datos-user" onSubmit={handleSubmitEvent}>
            <div>
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                name="nombre_apellidos"
                aria-describedby="name"
                aria-invalid="false"
                placeholder="Nombre Completo"
                value={usuario.nombre_apellidos}
                onChange={handleInput}
              />
            </div>
            <div>
              <label htmlFor="user-name"></label>
              <input
                type="text"
                id="user-name"
                name="nombre_usuario"
                aria-describedby="user-name"
                aria-invalid="false"
                placeholder="Usuario"
                value={usuario.nombre_usuario}
                onChange={handleInput}
              />
            </div>
            <div className="cont-password">
              <div>
                <label htmlFor="password"></label>
                <input
                  type="password"
                  id="password"
                  name="contrasena"
                  aria-describedby="user-password"
                  aria-invalid="false"
                  placeholder="Contraseña"
                  value={usuario.contrasena}
                  onChange={handleInput}
                  className="input-pass"
                />
              </div>
              <div>
                <label htmlFor="confirmar-password"></label>
                <input
                  type="password"
                  id="confirmar-password"
                  name="confirmar_contrasena" // Nombre actualizado
                  aria-describedby="user-password"
                  aria-invalid="false"
                  placeholder="Confirmar Contraseña"
                  value={usuario.confirmar_contrasena}
                  onChange={handleInput}
                  className="input-pass"
                />
              </div>
            </div>
            <div>
              <label htmlFor="user-email"></label>
              <input
                type="email"
                id="user-email"
                name="correo"
                aria-describedby="user-email"
                aria-invalid="false"
                placeholder="Correo electronico"
                value={usuario.correo}
                onChange={handleInput}
              />
            </div>
            <div className="cont-registrarse">
              <div>
                <p>
                  ¿Ya estas registrado?<br />
                </p>
                <NavLink to="/login">
                  <span className="enlace-registrarse"> <b>Ingresar</b></span>
                </NavLink>
              </div>
              <button className="btn-submit-login"><b>REGISTRAR</b></button>
            </div>
            {captchaValido === false && <div className="error-captcha">{mensajeCaptcha}</div>}
            <div className="recaptcha">
              <ReCAPTCHA
                ref={captcha}
                sitekey="6Ldzyy0qAAAAACU8c9UmB5BqDibQlJ8ulqbvG12f"
                onChange={onChange}
              />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterUser;
