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

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#+$%^&*(),.?":{}|<>])[A-Za-z\d!@#+$%^&*(),.?":{}|<>]{8,}$/;

    return passwordRegex.test(password);
  };

  const handleSubmitEvent = async (e) => {
    e.preventDefault();

    // Validación del captcha
    if (!captcha.current.getValue()) {
      setMensajeCaptcha("Por favor, completa el captcha correctamente.");
      cambiarCaptchaValido(false);
      return;
    } else {
      cambiarCaptchaValido(true);
      setMensajeCaptcha(""); // Limpiar mensaje de error si el captcha es válido
    }

    // Validación de la contraseña
    if (!validatePassword(usuario.contrasena)) {
      setMensaje("La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y un carácter especial.");
      return;
    } else {
      setMensaje("");
    }

    // Validación de campos
    if (
      usuario.nombre_apellidos.trim() !== "" &&
      usuario.nombre_usuario.trim() !== "" &&
      usuario.contrasena.trim() !== "" &&
      usuario.correo.trim() !== "" &&
      usuario.contrasena === usuario.confirmar_contrasena
    ) {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/usuarios`, {
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
            text: "Usuario registrado con Éxito!, por favor confirma tu cuenta en tu correo",
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
    <div className="container-register-user">
      <div className="container-register">
        <Navbar />
        <div className="container-register-contenido">
          <h2 className="title-register-user">REGISTRO DE USUARIO</h2>
          <img src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725172120/imagenes/login/rtxexftuvw2koarf1h8d.png" alt="logo-mkdpt" loading="lazy" className="logo-mkdpt-register" />
          <img src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725172120/imagenes/login/cqdbgmhmg8wmqtc4cwty.png" alt="logo-login" loading="lazy" className="logo-login-register" />
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
                autoComplete="off"
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
                autoComplete="off"
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
                  autoComplete="off"
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
                  name="confirmar_contrasena"
                  aria-describedby="user-password"
                  aria-invalid="false"
                  placeholder="Confirmar Contraseña"
                  autoComplete="off"
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
                autoComplete="off"
                value={usuario.correo}
                onChange={handleInput}
              />
            </div>
            <div className="cont-registrarse">
              <div className="cont-registrarse2">
                <p>
                  ¿Ya estas registrado?<br />
                </p>
                <NavLink to="/login">
                  <span className="enlace-registrarse"> <b>Ingresar</b></span>
                </NavLink>
              </div>
              <button className="btn-submit-register"><b>REGISTRAR</b></button>
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
