import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";
import '../styles/Privacidad.css';

const Terminos = () => {
    return (
        <div className="divPrivacy">
            <Navbar />
            <div className="containerPrivacy">
                <h2 className='TitlePrivacy'>Términos y Condiciones de Uso</h2>
                <p>Última actualización: Septiembre de 2024</p>
                <p>
                    Estos términos y condiciones rigen el uso del sitio web de Marketing Digital Para Todos. Al acceder o utilizar nuestro sitio web y los servicios ofrecidos, aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo con alguna de las disposiciones, te pedimos que no utilices nuestro sitio.
                </p>
                <h3 className='titlePrivacy'>Aceptación de los Términos</h3>
                <p>
                    Al utilizar este sitio web, confirmas que has leído, comprendido y aceptado estar sujeto a estos términos. Nos reservamos el derecho de modificar estos términos en cualquier momento sin previo aviso. Te recomendamos que revises esta página periódicamente para estar al tanto de los cambios.
                </p>
                <h3 className='titlePrivacy'>Servicios Ofrecidos</h3>
                <p>
                    Marketing Digital Para Todos se dedica a la comercialización de cursos en línea relacionados con marketing digital, ventas, publicidad, redes sociales, liderazgo, inteligencia artificial, entre otros. Los servicios ofrecidos en nuestra plataforma están destinados a proporcionar formación y herramientas prácticas para mejorar las competencias profesionales de nuestros usuarios.
                </p>
                <h3 className='titlePrivacy'>Registro y Cuentas</h3>
                <p>
                    Para acceder a ciertos servicios de nuestro sitio, es posible que debas registrarte y crear una cuenta de usuario. Es tu responsabilidad proporcionar información veraz y actualizada. Mantén la confidencialidad de tu cuenta y contraseña, y notifícanos de inmediato si detectas algún uso no autorizado de tu cuenta.
                </p>
                <h3 className='titlePrivacy'>Pagos y Precios</h3>
                <p>Los precios de los cursos y servicios están claramente indicados en nuestra página web y pueden cambiar sin previo aviso. Los pagos se realizan a través de las plataformas autorizadas, y no se aceptarán devoluciones una vez que se haya otorgado acceso al contenido del curso, salvo en casos excepcionales que evaluaremos de manera individual.
                </p>
                <h3 className="titlePrivacy">Propiedad Intelectual</h3>
                <p>Todo el contenido de este sitio web, incluidos los cursos, textos, gráficos, logotipos, imágenes y videos, es propiedad de Marketing Digital Para Todos o de nuestros colaboradores y está protegido por las leyes de derechos de autor y propiedad intelectual. No está permitido copiar, reproducir, modificar ni distribuir el contenido sin nuestro consentimiento previo por escrito.</p>
                <h3 className="titlePrivacy">Uso del Contenido</h3>
                <p>El contenido de nuestros cursos y recursos está destinado únicamente para el uso personal del usuario registrado. No se permite compartir las credenciales de acceso o distribuir el contenido a terceros sin autorización previa. Cualquier uso indebido de la información o infracción de derechos podría dar lugar a la cancelación de la cuenta y posibles acciones legales. </p>
                <h3 className="titlePrivacy">Responsabilidades del Usuario</h3>
                <p>Al utilizar nuestro sitio web, te comprometes a no realizar actos que puedan dañar la reputación, la seguridad o el funcionamiento de nuestra plataforma. También aceptas no subir contenido ilegal, malicioso o que infrinja los derechos de terceros.</p>
                <h3 className="titlePrivacy">Limitación de Responsabilidad</h3>
                <p>Marketing Digital Para Todos no será responsable de ningún daño directo, indirecto o incidental derivado del uso de nuestro sitio web o servicios. No garantizamos que nuestro sitio esté libre de errores o que el acceso sea ininterrumpido. Los cursos y recursos están diseñados con fines educativos, y no garantizamos resultados específicos para los usuarios.</p>
                <h3 className="titlePrivacy">Enlaces Externos</h3>
                <p>Nuestro sitio puede contener enlaces a sitios web de terceros. No somos responsables del contenido ni de las políticas de privacidad de dichos sitios, y te recomendamos revisar los términos y condiciones de cualquier página externa antes de interactuar con ella.</p>
                <h3 className="titlePrivacy">Política de Privacidad</h3>
                <p>Nos comprometemos a proteger tu privacidad y a garantizar la seguridad de la información personal que nos proporcionas. Para obtener más información sobre cómo recopilamos, utilizamos y protegemos tus datos, por favor revisa nuestra <u> <NavLink to="/Privacy" style={{ color: "inherit" }}> Política de Privacidad.</NavLink></u></p>
                <h3 className="titlePrivacy">Cancelación de la Cuenta</h3>
                <p>Nos reservamos el derecho de cancelar o suspender tu cuenta en caso de infracción de estos términos o por cualquier actividad que consideremos inapropiada o dañina para nuestro sitio web o comunidad.</p>
                <h3 className="titlePrivacy">Ley Aplicable</h3>
                <p>Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes de Colombia. Cualquier disputa que surja en relación con el uso de nuestro sitio web será resuelta en los tribunales competentes de Valledupar, Cesar.</p>
                <h3 className="titlePrivacy">Contacto</h3>
                <p>Si tienes alguna pregunta sobre estos términos y condiciones, por favor contáctanos a través del correo electrónico: info@marketingdigital.com</p>
            </div>
            <Footer />
        </div >
    );
};

export default Terminos;
