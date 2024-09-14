import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import '../styles/Privacidad.css';

const AvisoLegal = () => {
    return (
        <div className="divPrivacy">
            <Navbar />
            <div className="containerPrivacy">
                <h2 className='TitlePrivacy'>Aviso Legal</h2>
                <p>Última actualización: Septiembre de 2024</p>
                <p>
                    La información proporcionada en el sitio web Marketing Digital Para Todos (en adelante, "el sitio web") tiene como propósito ofrecer información general sobre marketing digital, ventas, publicidad, redes sociales, liderazgo,  inteligencia artificial, entre otros, así como promocionar productos y servicios relacionados. Al acceder y utilizar este sitio web, aceptas los términos establecidos en este descargo de responsabilidad.
                </p>
                <h3 className='titlePrivacy'>Información General</h3>
                <p>
                    El contenido del sitio web está diseñado únicamente para fines educativos y de información general. Marketing Digital Para Todos no garantiza que la información proporcionada sea precisa, completa o actualizada. Nos esforzamos por mantener la información actualizada, pero no asumimos responsabilidad por cualquier error u omisión.
                </p>
                <h3 className='titlePrivacy'>No Constituye Asesoría Profesional</h3>
                <p>
                    El contenido del sitio web no debe interpretarse como asesoramiento profesional, financiero, legal o técnico. Si bien brindamos información relacionada con marketing digital y otros temas, no se debe utilizar como sustituto de asesoría específica proporcionada por profesionales en dichas áreas. Cualquier acción que tomes en base a la información de este sitio es bajo tu propio riesgo.
                </p>
                <h3 className='titlePrivacy'>Resultados No Garantizados</h3>
                <p>
                    Los cursos y servicios ofrecidos por Marketing Digital Para Todos están diseñados para brindar herramientas útiles y conocimientos prácticos. Sin embargo, no garantizamos ningún resultado específico, como incrementos en ventas, tráfico web, liderazgo, o cualquier otro éxito comercial. Los resultados dependen de diversos factores, incluyendo la implementación por parte del usuario y las condiciones del mercado, sobre las que no tenemos control.
                </p>
                <h3 className='titlePrivacy'>Enlaces Externos</h3>
                <p>Nuestro sitio web puede contener enlaces o hipervínculos a sitios web de terceros. Estos enlaces se proporcionan para tu conveniencia y no implican nuestro respaldo a dichos sitios o su contenido. Marketing Digital Para Todos no asume responsabilidad alguna por la precisión, legalidad o contenido de los sitios web de terceros.
                </p>
                <h3 className="titlePrivacy">Exclusión de Responsabilidad por Daños</h3>
                <p>En la medida en que lo permita la ley, Marketing Digital Para Todos no será responsable por ningún daño directo, indirecto, incidental, especial o consecuente que surja del uso o de la incapacidad para utilizar este sitio web, sus servicios o productos, incluso si se ha informado de la posibilidad de tales daños.</p>
                <p>Esto incluye, pero no se limita a, la pérdida de ganancias, interrupciones comerciales, pérdida de programas o datos, o cualquier otro daño relacionado con el acceso o el uso de nuestro sitio web.</p>
                <h3 className="titlePrivacy">Uso del Contenido</h3>
                <p>El contenido de nuestros cursos y recursos está destinado únicamente para el uso personal del usuario registrado. No se permite compartir las credenciales de acceso o distribuir el contenido a terceros sin autorización previa. Cualquier uso indebido de la información o infracción de derechos podría dar lugar a la cancelación de la cuenta y posibles acciones legales. </p>
                <h3 className="titlePrivacy">Responsabilidad del Usuario</h3>
                <p>El uso de este sitio web y de los materiales disponibles en él es responsabilidad exclusiva del usuario. Marketing Digital Para Todos no será responsable por ningún daño o perjuicio que pueda surgir de la mala interpretación o el uso inadecuado de la información y materiales proporcionados en el sitio.</p>
                <h3 className="titlePrivacy">Modificaciones</h3>
                <p>Nos reservamos el derecho de modificar o eliminar cualquier contenido en este sitio web en cualquier momento sin previo aviso. El acceso y uso continuado de nuestro sitio después de cualquier cambio constituye tu aceptación de dichos cambios.</p>
                <h3 className="titlePrivacy">Compatibilidad y Errores Técnicos</h3>
                <p>Marketing Digital Para Todos no garantiza que el sitio web esté libre de errores o que funcionará de manera ininterrumpida. Asimismo, no somos responsables por la compatibilidad de este sitio web con tu dispositivo, software o navegador. Los problemas técnicos que puedan ocurrir están fuera de nuestro control, y no asumimos ninguna responsabilidad por ellos.</p>
                <h3 className="titlePrivacy">Propiedad Intelectual</h3>
                <p>Todo el contenido presente en este sitio, incluidas imágenes, textos, logotipos, videos, gráficos y diseños, está protegido por las leyes de propiedad intelectual. No está permitido copiar, modificar, distribuir ni utilizar de otra manera nuestro contenido sin nuestro consentimiento expreso por escrito.</p>
                <h3 className="titlePrivacy">Jurisdicción y Ley Aplicable</h3>
                <p>Este descargo de responsabilidad está regido por las leyes de Colombia, y cualquier disputa que surja en relación con el uso de este sitio web será sometida a los tribunales competentes de Valledupar, Cesar.</p>
                <h3 className="titlePrivacy">Contacto</h3>
                <p>Si tienes alguna pregunta sobre estos términos y condiciones, por favor contáctanos a través del correo electrónico: info@marketingdigital.com</p>
            </div>
            <Footer />
        </div >
    );
};

export default AvisoLegal;
