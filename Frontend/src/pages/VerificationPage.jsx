import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/VerificationPage.css';

const VerificationPage = () => {
    const { token } = useParams();
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const verifyAccount = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/usuarios/verify-account/${token}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });

                const result = await response.json();

                if (response.ok) {
                    setMessage(result.message || "Cuenta verificada con éxito. Ahora puedes iniciar sesión.");
                } else {
                    setMessage(result.message || "Error al verificar la cuenta.");
                }
            } catch (error) {
                setMessage("Error en la verificación de la cuenta.");
            }
        };

        verifyAccount();
    }, [token]);

    return (
        <div>
            <div className="container-verify">
                <div className="container-verify-contenido">
                    <h2 className="title-verify">VERIFICACION DE CUENTA</h2>
                    <img
                        src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725172120/imagenes/login/rtxexftuvw2koarf1h8d.png"
                        alt="logo-mkdpt"
                        loading="lazy"
                        className="logo-mkdpt-verify"
                    />
                    <img
                        src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725172120/imagenes/login/cqdbgmhmg8wmqtc4cwty.png"
                        alt="logo-login"
                        loading="lazy"
                        className="logo-verify"
                    />
                    <p>{message}</p>
                    <div className="verify-goTologin">
                        <a href="/login"> <u>Ir al Login</u></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerificationPage;
