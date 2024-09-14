import React from 'react'
import '../styles/NavBar.css'
import '../styles/Footer.css'
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className='container-footer'>
                <hr />
                <div className='footer-columns'>
                    <div className='footer-col-logo'>
                        <img src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725172120/imagenes/login/rtxexftuvw2koarf1h8d.png" alt="logo-mdpt" className='logo-footer' loading='lazy' />
                        <p>Todos los derechos reservados</p>
                    </div>
                    <div className='footer-col-1'>
                        <br />
                        <ul className='footer-contacto'>Vinculos</ul>
                        <NavLink to="/About"><ul>Acerca de nosotros</ul></NavLink>
                        <NavLink to="/About"><ul>Metodologia</ul></NavLink>
                        <NavLink to="/About"><ul>Logros</ul></NavLink>
                        <NavLink to="#"><ul>Servicios</ul></NavLink>
                    </div>
                    <div className='footer-col-2'>
                        <br />
                        <ul className='footer-contacto'>Contactenos</ul>
                        <ul>info@marketingdigital.com</ul>
                        <ul>Valledupar, Colombia</ul>
                    </div>
                    <div className='footer-col-3'>
                        <br />
                        <ul className='footer-contacto'>Siguenos</ul>
                        <div className="social">
                            <div className="social-icons">
                                <a href="https://www.facebook.com/reel/863584452334870" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <img src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725172376/imagenes/social/qq0wvuivkvkd6kwgniny.png" className="social-face" loading='lazy' alt="logo-facebook" />
                                </a>
                                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <img src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725172375/imagenes/social/jfwsawh8cdei6byw2abu.jpg" alt="logo-instagram" className="social-inst" loading='lazy' />
                                </a>
                                <a href="https://x.com/?lang=es" target="_blank" rel="noopener noreferrer" aria-label="Twiter">
                                    <img src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725172376/imagenes/social/swxdt9jubyizqjquf9ie.png" className="social-twt" alt="logo-twiter" loading='lazy' />
                                </a>
                                <a href="https://youtube.com/?lang=es" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                                    <img src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725989635/imagenes/social/ui8tymsjcep9puhgxd31.png" className="social-ytb" alt="logo-youtube" loading='lazy' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='footer-pie'>
                    <NavLink to="/Privacy"><ul>Privacidad</ul></NavLink>
                    <ul>|</ul>
                    <NavLink to="/Terms"><ul>Términos y condiciones</ul></NavLink>
                    <ul>|</ul>
                    <NavLink to="/Legal"><ul>Aviso Legal</ul></NavLink>
                </div>
                <div className='footer-info'>
                    ©2024 www.marketingdigital.com. La información que contiene este documento está sujeta a cambios sin previo aviso.
                </div>
                {/* <footer className="footer">
                    <div className="footer-column">
                        <h4>Sobre Nosotros</h4>
                        <p>Somos un equipo de apasionados del marketing digital, dedicados a ayudar a emprendedores a alcanzar su máximo potencial. Con enfoque en la innovación y resultados, transformamos ideas en éxitos tangibles.</p>
                        <br />
                        
                        <p>Email: marketingdigital@gmail.com</p>
                    </div>
                    <div className="footer-column">
                        <h4>Metodología</h4>
                        <p>Nuestro enfoque está centrado en la personalización. Trabajamos de cerca con cada cliente para entender sus objetivos y diseñar estrategias que se alineen perfectamente con sus necesidades específicas.</p>
                    </div>
                </footer>
                <div className="social">
                  
                    <div className="social-icons">
                        <a href="https://www.facebook.com/reel/863584452334870" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <img src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725172376/imagenes/social/qq0wvuivkvkd6kwgniny.png" className="social-face" loading='lazy' alt="logo-facebook" />
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <img src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725172375/imagenes/social/jfwsawh8cdei6byw2abu.jpg" alt="logo-instagram" className="social-inst" loading='lazy' />
                        </a>
                        <a href="https://x.com/?lang=es" target="_blank" rel="noopener noreferrer" aria-label="Twiter">
                            <img src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725172376/imagenes/social/swxdt9jubyizqjquf9ie.png" className="social-twt" alt="logo-twiter" loading='lazy' />
                        </a>
                    </div>
                </div>
                <footer class="footerCopy">
                    <h3> marketingdigital.com Copyrigth @ 2024</h3>
                    <h3> Reservado todos los derechos</h3>
                </footer> */}
            </div>
        </div>
    )
}

export default Footer
