import Navbar from "../../components/NavBar";
import "../../styles/Cursos.css";
import Footer from "../../components/Footer"
import { NavLink } from "react-router-dom";

const Cursos = () => {
   return (
      <div >
         <div className="container-Cursos">
            <Navbar />
            <div className='TitleCursos'>
               <h3>¡Estrategias para Implementación Ágil!</h3>
               <p className="subtCursos">Guía a las personas para que opten por tus propuestas, asegurando que lo hagan de manera rápida y efectiva.</p>
            </div>
            <div className="cursos">
               <div className="cont-curso1">
                  <div className="icono-gratis">GRATIS</div>
                  <NavLink to="/Login" className="navlink">
                     <img src="https://firebasestorage.googleapis.com/v0/b/marketingdigital-13e4b.appspot.com/o/imagenes%2Fcursos%2FCurso1.jpg?alt=media" alt="img curso1" className="img-curso1" />
                  </NavLink>
                  <h4 className="curso-name">hola mundo1</h4>
                  <div className="descr-cur">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ut autem, pariatur dolorum eius dolorem cupiditate sunt numquam molestiae, optio voluptas? <br /><br />Corrupti minima possimus, mollitia, quibusdam aliquam earum fugiat similique suscipit, necessitatibus architecto autem facilis laborum nostrum commodi. <br /><br />Neque, consectetur? Molestias reiciendis error alias eos facere voluptatem accusantium quas nulla!
                  </div>
                  <div className="pie-curso">9 Modulos</div>
               </div>
               <div className="cont-curso2">
                  <img src="https://firebasestorage.googleapis.com/v0/b/marketingdigital-13e4b.appspot.com/o/imagenes%2Fcursos%2Ficono-premium.png?alt=media" alt="icono-premium" className="icono-premium" />
                  <img src="https://firebasestorage.googleapis.com/v0/b/marketingdigital-13e4b.appspot.com/o/imagenes%2Fcursos%2FCurso2.jpg?alt=media" alt="img curso2" className="img-curso2" />
                  <div className="icono-acceso-inmediato">ACCEDE DE FORMA INMEDIATA - $8</div>
                  <h4 className="curso-name">hola mundo2</h4>
                  <div className="descr-cur">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ut autem, pariatur dolorum eius dolorem cupiditate sunt numquam molestiae, optio voluptas? Corrupti minima possimus, mollitia, quibusdam aliquam earum fugiat similique suscipit, necessitatibus architecto autem facilis laborum nostrum commodi. Neque, consectetur? Molestias reiciendis error alias eos facere voluptatem accusantium quas nulla!
                  </div>
                  <div className="pie-curso">3 Modulos</div>
               </div>
               <div className="cont-curso3">
                  <img src="https://firebasestorage.googleapis.com/v0/b/marketingdigital-13e4b.appspot.com/o/imagenes%2Fcursos%2Ficono-premium.png?alt=media" alt="icono-premium" className="icono-premium" />
                  <img src="https://firebasestorage.googleapis.com/v0/b/marketingdigital-13e4b.appspot.com/o/imagenes%2Fcursos%2FCurso3.jpg?alt=media" alt="img curso3" className="img-curso3" />
                  <div className="icono-acceso-inmediato">ACCEDE DE FORMA INMEDIATA - $14</div>
                  <h4 className="curso-name">hola mundo3</h4>
                  <div className="descr-cur">
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ut autem, pariatur dolorum eius dolorem cupiditate sunt numquam molestiae, optio voluptas? Corrupti minima possimus, mollitia, quibusdam aliquam earum fugiat similique suscipit, necessitatibus architecto autem facilis laborum nostrum commodi.
                     <br />
                     <br />
                     Neque, consectetur? Molestias reiciendis error alias eos facere voluptatem accusantium quas nulla!
                  </div>
                  <div className="pie-curso">7 Modulos</div>
               </div>
               <div className="cont-curso4">
                  <img src="https://firebasestorage.googleapis.com/v0/b/marketingdigital-13e4b.appspot.com/o/imagenes%2Fcursos%2Ficono-premium.png?alt=media" alt="icono-premium" className="icono-premium" />
                  <img src="https://firebasestorage.googleapis.com/v0/b/marketingdigital-13e4b.appspot.com/o/imagenes%2Fcursos%2FCurso1.jpg?alt=media" alt="img curso4" className="img-curso4" />
                  <div className="icono-acceso-inmediato">ACCEDE DE FORMA INMEDIATA - $8</div>
                  <h4 className="curso-name">hola mundo 4</h4>
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
