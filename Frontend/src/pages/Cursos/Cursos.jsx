import Navbar from "../../components/NavBar";
import "../../styles/Cursos.css";
import Footer from "../../components/Footer"
import { NavLink } from "react-router-dom";
import { useAuth } from "../../AuthProvider";

const Cursos = () => {
   const auth = useAuth();
   return (
      <div className="containerP-cursos" >
         <div className="container-Cursos">
            <Navbar />
            <div className='TitleCursos'>
               <h3>¡Estrategias para Implementación Ágil!</h3>
               <p className="subtCursos">Guía a las personas para que opten por tus propuestas, asegurando que lo hagan de manera rápida y efectiva.</p>
            </div>
            <div className="cursos">
               <div className="cont-curso">
                  {auth.user ? (
                     <NavLink to="/dashboard" className="navlink">
                        <img src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725171474/imagenes/cursos/r8lywkz1fserrjhbl3er.jpg" alt="img curso1" className="img-curso1" />
                        <div className="icono-gratis">GRATIS</div>
                     </NavLink>
                  ) : (
                     <NavLink to="/Login" className="navlink">
                        <img src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725171474/imagenes/cursos/r8lywkz1fserrjhbl3er.jpg" alt="img curso1" className="img-curso1" />
                        <div className="icono-gratis">GRATIS</div>
                     </NavLink>
                  )}
                  <h3 className="curso-name"><b>MARKETING DIGITAL</b></h3>
                  <div className="descr-cur">
                     <h4>MODULO 1</h4>
                     <li>El Inbound Marketing.</li>
                     <li>Diferencias entre Inbound Marketing y Marketing de contenidos.</li>
                     <br />
                     <h4>MODULO 2</h4>
                     <li>Estrategias.</li>
                     <li>Que es un plan de Marketing.</li>
                     <li>Etapas en la elaboración en un plan de marketing.</li>
                     <li>Que es el inbound marketing.</li>
                     <li>Buyer persona.</li>
                     <li>Buyer Journey.</li>
                     <li>Marketing de contenidos.</li>
                     <li>Análisis de resultados.</li>
                     <li>Tipos de marketing que existen.</li>
                     <li>Que es un plan de Marketing.</li>
                     <br />
                     <h4>RESULTADOS QUE PODRÁS ALCANZAR CON ESTE CURSO  </h4>
                     <li>Destácate como un Marketer Excepcional.</li>
                     <li>Visión Integral del Mercado.</li>
                     <li>Capacidad de Anticipación.</li>
                     <li>Creatividad con Propósito.</li>
                     <li>Relaciones Comunicativas Sólidas.</li>
                     <li>Relaciones a Largo Plazo.</li>
                     <li>Capacidad Analítica Avanzada.</li>
                  </div>
                  <div className="pie-curso">2 Modulos</div>
               </div>
               <div className="cont-curso">
                  {auth.user ? (
                     <a
                        href="https://biz.payulatam.com/B0f770aCBE466B6"
                        className="navlink"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <img
                           src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725171475/imagenes/cursos/akrxsmxpe0ndtudxbmqv.png" alt="icono-premium" className="icono-premium"
                        />
                        <img
                           src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725171474/imagenes/cursos/cfcfn1qbafunhpvoctf1.jpg" alt="img curso2" className="img-curso2"
                        />
                        <div className="icono-acceso-inmediato">ACCEDE DE FORMA INMEDIATA - $16</div>
                     </a>
                  ) : (
                     <NavLink to="/Login" className="navlink">
                        <img
                           src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725171475/imagenes/cursos/akrxsmxpe0ndtudxbmqv.png" alt="icono-premium" className="icono-premium"
                        />
                        <img
                           src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725171474/imagenes/cursos/cfcfn1qbafunhpvoctf1.jpg" alt="img curso2" className="img-curso2"
                        />
                        <div className="icono-acceso-inmediato">ACCEDE DE FORMA INMEDIATA - $16</div>
                     </NavLink>
                  )}
                  <h3 className="curso-name"><b>VENTAS</b></h3>
                  <div className="descr-cur">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ut autem, pariatur dolorum eius dolorem cupiditate sunt numquam molestiae, optio voluptas? Corrupti minima possimus, mollitia, quibusdam aliquam earum fugiat similique suscipit, necessitatibus architecto autem facilis laborum nostrum commodi. Neque, consectetur? Molestias reiciendis error alias eos facere voluptatem accusantium quas nulla!
                  </div>
                  <div className="pie-curso">3 Modulos</div>
               </div>
               <div className="cont-curso">
                  {auth.user ? (
                     <a
                        href="https://biz.payulatam.com/B0f770aCAD62610"
                        className="navlink"
                        target="_blank"
                        rel="noopener noreferrer"
                     >
                        <img
                           src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725171475/imagenes/cursos/akrxsmxpe0ndtudxbmqv.png"
                           alt="icono-premium"
                           className="icono-premium"
                        />
                        <img
                           src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725171474/imagenes/cursos/iuh1nn0dnlft7o9jp7nz.jpg"
                           alt="img curso3"
                           className="img-curso3"
                        />
                        <div className="icono-acceso-inmediato">ACCEDE DE FORMA INMEDIATA - $24</div>
                     </a>

                  ) : (
                     <NavLink to="/Login" className="navlink">
                        <img src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725171475/imagenes/cursos/akrxsmxpe0ndtudxbmqv.png" alt="icono-premium" className="icono-premium" />
                        <img src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725171474/imagenes/cursos/iuh1nn0dnlft7o9jp7nz.jpg" alt="img curso3" className="img-curso3" />
                        <div className="icono-acceso-inmediato">ACCEDE DE FORMA INMEDIATA - $24</div>
                     </NavLink>
                  )}
                  <h3 className="curso-name"><b>PUBLICIDAD</b></h3>
                  <div className="descr-cur">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ut autem, pariatur dolorum eius dolorem cupiditate sunt numquam molestiae, optio voluptas? Corrupti minima possimus, mollitia, quibusdam aliquam earum fugiat similique suscipit, necessitatibus architecto autem facilis laborum nostrum commodi.
                     <br />
                     <br />
                     Neque, consectetur? Molestias reiciendis error alias eos facere voluptatem accusantium quas nulla!
                  </div>
                  <div className="pie-curso">7 Modulos</div>
               </div>
               <div className="cont-curso">
                  <img src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725171475/imagenes/cursos/akrxsmxpe0ndtudxbmqv.png" alt="icono-premium" className="icono-premium" />
                  <img src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725171474/imagenes/cursos/r8lywkz1fserrjhbl3er.jpg" alt="img curso4" className="img-curso4" />
                  <div className="icono-acceso-inmediato">ACCEDE DE FORMA INMEDIATA - $8</div>
                  <h3 className="curso-name"><b>REDES SOCIALES</b></h3>
                  <div className="descr-cur">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ut autem, pariatur dolorum eius dolorem cupiditate sunt numquam molestiae, optio voluptas? Corrupti minima possimus, mollitia, quibusdam aliquam earum fugiat similique suscipit, necessitatibus architecto autem facilis laborum nostrum commodi. Neque, consectetur? Molestias reiciendis error alias eos facere voluptatem accusantium quas nulla!
                  </div>
                  <div className="pie-curso">5 Modulos</div>
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
};

export default Cursos;
