import React from 'react'
import '../styles/NavBar.css'
import '../styles/Footer.css'
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer">
                <div className="footer-column">
                    <h4>Sobre Nosotros</h4>
                    <p>Somos un equipo de apasionados del marketing digital, dedicados a ayudar a emprendedores a alcanzar su máximo potencial. Con enfoque en la innovación y resultados, transformamos ideas en éxitos tangibles.</p>
                    <br />
                    {/* <p>Telefono: +57 310 368 70 17</p> */}
                    <p>Email: marketingdigital@gmail.com</p>
                </div>
                <div className="footer-column">
                    <h4>Metodología</h4>
                    <p>Nuestro enfoque está centrado en la personalización. Trabajamos de cerca con cada cliente para entender sus objetivos y diseñar estrategias que se alineen perfectamente con sus necesidades específicas.</p>
                </div>
            </footer>
            <div className="social">
                {/*<h4>Siguenos en</h4> */}
                <div className="social-icons">
                    <a href="https://www.facebook.com/reel/863584452334870" target="_blank" rel="noopener noreferrer"  aria-label="Facebook">
                        <img src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725172376/imagenes/social/qq0wvuivkvkd6kwgniny.png" className="social-face" loading='lazy' alt="logo-facebook" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <img src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725172375/imagenes/social/jfwsawh8cdei6byw2abu.jpg" alt="logo-instagram" className="social-inst" loading='lazy'/>
                    </a>
                    <a href="https://x.com/?lang=es" target="_blank" rel="noopener noreferrer" aria-label="Twiter">
                    <img src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725172376/imagenes/social/swxdt9jubyizqjquf9ie.png" className="social-twt" alt="logo-twiter" loading='lazy' />
                    </a>
                </div>
            </div>
            <footer class="footerCopy">
                <h3> marketingdigital.com Copyrigth @ 2024</h3>
                <h3> Reservado todos los derechos</h3>
            </footer>
        </div>
    )
}

export default Footer
