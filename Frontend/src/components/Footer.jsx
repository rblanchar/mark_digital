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
                        <img src="https://firebasestorage.googleapis.com/v0/b/marketingdigital-13e4b.appspot.com/o/imagenes%2Fsocial%2Ffacebook.png?alt=media" className="social-face" loading='lazy' alt="logo-facebook" />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <img src="https://firebasestorage.googleapis.com/v0/b/marketingdigital-13e4b.appspot.com/o/imagenes%2Fsocial%2Finst2.jpg?alt=media" alt="logo-instagram" className="social-inst" loading='lazy'/>
                    </a>
                    <a href="https://x.com/?lang=es" target="_blank" rel="noopener noreferrer" aria-label="Twiter">
                    <img src="https://firebasestorage.googleapis.com/v0/b/marketingdigital-13e4b.appspot.com/o/imagenes%2Fsocial%2Fx.png?alt=media" className="social-twt" alt="logo-twiter" loading='lazy' />
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
