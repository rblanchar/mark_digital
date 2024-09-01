import React, { lazy, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Navbar from "../components/NavBar";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Footer from "../components/Footer";
import '../styles/Home.css';

const arrayOfWords = ['Las estrategias en línea permiten conectar con una audiencia global, adaptar mensajes a cada grupo y evaluar resultados al momento, acelerando el crecimiento empresarial.',
    'Dominar el marketing digital te permite aprovechar al máximo las oportunidades en línea, creando estrategias más eficientes que impulsan el éxito de tu marca.',
    'Reconocemos la oportunidad de optimizar nuestras estrategias de marketing y ventas digitales, y estamos enfocados en descubrir enfoques más efectivos para maximizar nuestro éxito.'

]
const Home = () => {
    const [paragraph, setParagraph] = useState('');
    const [paragraphCounter, setParagraphCounter] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setParagraphCounter((currentValue) => {
                if (currentValue + 1 === arrayOfWords.length) {
                    return 0;
                }
                return currentValue + 1;
            });
        }, 8000);
        return () => clearInterval(interval);
    }, []);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="container1">
            <Navbar />
            <div className="container2">
                <br />
                <h2 className="c2-titulo">
                    ¡ES POSIBLE ALCANZAR TODO LO QUE DESEAS!
                </h2>
                <SwitchTransition>
                    <CSSTransition classNames='fade' key={arrayOfWords[paragraphCounter]} addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}>
                        <h2>
                            {arrayOfWords[paragraphCounter]}
                        </h2>
                    </CSSTransition>
                </SwitchTransition>
                <div className="btn-accedeCursos">
                    <NavLink to="/Courses" className="navlink">
                        Accede a Nuestros Cursos <b>GRATIS</b>
                        <div className="img-fl-der"></div>
                    </NavLink>
                </div>
            </div>
            <div className="container3">
                <img src="https://firebasestorage.googleapis.com/v0/b/marketingdigital-13e4b.appspot.com/o/imagenes%2Fhome%2Fhome_img1.jpg?alt=media" className="imagenC3" loading="lazy" alt="imgC3"></img>
                <div className="C3-columna-2">
                    <h3>Revisión y Mejora de tu Estrategia de Marketing Digital</h3>
                    <p>Revisar y mejorar tu estrategia de marketing digital es una tarea fundamental para alcanzar el éxito en el competitivo entorno actual. Este proceso implica una serie de pasos detallados que te ayudarán a identificar las áreas que necesitan ajustes y a implementar cambios efectivos para maximizar tus resultados.</p>
                    <ul>
                        <li>Redefinir tus metas y objetivos</li>
                        <li>Evaluar el desempeño actual de tus campañas</li>
                        <li>Comprender a tu público objetivo</li>
                        <li>Optimización y mejora del contenido</li>
                        <li>Fortalecer tu presencia en redes sociales</li>
                        <li>Estrategias efectivas de email marketing</li>
                        <li>Inversión en publicidad digital</li>
                        <li>Monitoreo continuo y ajustes regulares</li>
                        <li>Educación y actualización constante</li>
                        <li>Recopilación de feedback</li>
                    </ul>
                </div>
            </div>
            <div className="containerF5">
                <h3 className="h3-C5">Accede a Nuestros Cursos!</h3>
                <div className="container5">

                    <Carousel responsive={responsive}>
                        <NavLink to="/Courses">
                            <img src="https://firebasestorage.googleapis.com/v0/b/marketingdigital-13e4b.appspot.com/o/imagenes%2Fcursos%2Fcurso-marketing-digital.jpg?alt=media" className="C5-curso1" loading="lazy" alt="C5-curso1"></img>
                        </NavLink>
                        <NavLink to="/Courses">
                            <img src="https://firebasestorage.googleapis.com/v0/b/marketingdigital-13e4b.appspot.com/o/imagenes%2Fcursos%2Fcurso-publicidad-instagram.jpg?alt=media" className="C5-curso2" loading="lazy" alt="C5-curso2"></img>
                        </NavLink>
                        <NavLink to="/Courses">
                            <img src="https://firebasestorage.googleapis.com/v0/b/marketingdigital-13e4b.appspot.com/o/imagenes%2Fcursos%2Fcurso-ventas.jpg?alt=media" className="C5-curso3" loading="lazy" alt="C5-curso3"></img>
                        </NavLink>
                        <NavLink to="/Courses">

                            <img src="https://firebasestorage.googleapis.com/v0/b/marketingdigital-13e4b.appspot.com/o/imagenes%2Fcursos%2Fcurso-marketing-digital.jpg?alt=media" className="C5-curso1" loading="lazy" alt="C5-curso1"></img>
                        </NavLink>
                        <NavLink to="/Courses">
                            <img src="https://firebasestorage.googleapis.com/v0/b/marketingdigital-13e4b.appspot.com/o/imagenes%2Fcursos%2Fcurso-publicidad-instagram.jpg?alt=media" className="C5-curso2" loading="lazy" alt="C5-curso2"></img>
                        </NavLink>
                        <NavLink to="/Courses">
                            <img src="https://firebasestorage.googleapis.com/v0/b/marketingdigital-13e4b.appspot.com/o/imagenes%2Fcursos%2Fcurso-ventas.jpg?alt=media" className="C5-curso3" loading="lazy" alt="C5-curso3"></img>
                        </NavLink>
                    </Carousel>

                </div>
            </div>
            <div className="container4">
                <div className="C4-column1">
                    <p className="T-parrafo">Innovación</p>
                    <p>Aplicamos innovación constante, incorporando las últimas tendencias digitales para mantener a tu negocio siempre competitivo.</p>
                    <img src="https://firebasestorage.googleapis.com/v0/b/marketingdigital-13e4b.appspot.com/o/imagenes%2Fhome%2Fimg1.jpg?alt=media" className="imagenC4-1" alt="card-1" loading="lazy"></img>
                </div>
                <div className="C4-column2">
                    <p className="T-parrafo">Beneficios</p>
                    <p>Aprovecha al máximo tu inversión con soluciones enfocadas en generar beneficios concretos y medibles para tu negocio.</p>
                    <img src="https://firebasestorage.googleapis.com/v0/b/marketingdigital-13e4b.appspot.com/o/imagenes%2Fhome%2Fimg2.jpg?alt=media" className="imagenC4-2" alt="card-2" loading="lazy"></img>
                </div>
                <div className="C4-column3">
                    <p className="T-parrafo"> Estrategias</p>
                    <p>Diseñamos estrategias personalizadas que alinean tus objetivos con acciones efectivas, garantizando un impacto positivo en tu negocio.</p>
                    <img src="https://firebasestorage.googleapis.com/v0/b/marketingdigital-13e4b.appspot.com/o/imagenes%2Fhome%2Fimg3.jpg?alt=media" className="imagenC4-3" alt="card-3" loading="lazy"></img>
                </div>
                <div className="C4-column4">
                    <p className="T-parrafo">Acompañamiento</p>
                    <p>Te acompañamos en cada paso del camino, brindando soporte continuo para superar desafíos y alcanzar el éxito.</p>
                    <img src="https://firebasestorage.googleapis.com/v0/b/marketingdigital-13e4b.appspot.com/o/imagenes%2Fhome%2Fimg4.jpg?alt=media" className="imagenC4-4" alt="card-4" loading="lazy"></img>
                </div>
                <div className="C4-column5">
                    <p className="T-parrafo">Experiencia</p>
                    <p>Con más de 5 años impulsando emprendimientos, aplicamos nuestra experiencia para lograr resultados excepcionales.</p>
                    <img src="https://firebasestorage.googleapis.com/v0/b/marketingdigital-13e4b.appspot.com/o/imagenes%2Fhome%2Fimg5.jpg?alt=media" className="imagenC4-5" loading="lazy" alt="card-5"></img>
                </div>
                <div className="C4-column6">
                    <p className="T-parrafo">Liderazgo</p>
                    <p>Guiamos a emprendedores con liderazgo estratégico, asegurando un crecimiento constante y sostenido en el mercado digital.</p>
                    <img src="https://firebasestorage.googleapis.com/v0/b/marketingdigital-13e4b.appspot.com/o/imagenes%2Fhome%2Fimg6.jpg?alt=media" className="imagenC4-6" loading="lazy" alt="card-6"></img>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;