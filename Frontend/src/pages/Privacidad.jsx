import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import '../styles/Privacidad.css';

const Privacidad = () => {
    return (
        <div className="divPrivacy">
            <Navbar />
            <div className="containerPrivacy">
                <h2 className='TitlePrivacy'>Política de Privacidad</h2>
                <p>Última actualización: Septiembre de 2024</p>
                <p>
                    En Marketing Digital Para Todos, nos comprometemos a proteger la privacidad de nuestros usuarios. Esta política de privacidad explica cómo recopilamos, utilizamos y protegemos la información personal que nos proporcionas cuando accedes y utilizas nuestro sitio web www.marketingdigital.com.
                </p>
                <h3 className='titlePrivacy'>Recopilación de Información</h3>
                <p>
                    Cuando accedes a nuestra web o utilizas nuestros servicios, podemos recopilar la siguiente información:
                </p>
                <li><b>Información personal: </b>
                    nombre, dirección de correo electrónico, número de teléfono, dirección postal.
                </li>
                <li><b>Información de pago:</b> detalles de la tarjeta de crédito o débito u otros medios de pago cuando adquieres nuestros cursos.</li>
                <li><b>Información de uso:</b> datos sobre cómo interactúas con nuestro sitio web, como tu dirección IP, navegador, sistema operativo y páginas que visitas.</li>

                <h3 className='titlePrivacy'>Uso de la Información</h3>
                <p>
                    La información que recopilamos se utiliza para los siguientes fines:
                </p>
                <li><b>Proveer servicios: </b>utilizar tus datos para procesar tus compras, registrarte en cursos y enviarte confirmaciones.</li>
                <li><b>Mejorar nuestro sitio: </b>
                    entender cómo los usuarios interactúan con nuestro contenido para mejorar la experiencia y realizar ajustes.</li>
                <li><b>Marketing y comunicaciones: </b>
                    enviarte correos electrónicos informativos y promocionales sobre nuestros cursos y servicios, solo si has dado tu consentimiento.</li>
                <h3 className='titlePrivacy'>Compartición de Información</h3>
                <p>
                    No vendemos, alquilamos ni compartimos tu información personal con terceros, salvo en los siguientes casos:
                </p>
                <li><b>Proveedores de servicios: </b>trabajamos con terceros que nos ayudan a operar nuestra plataforma (como procesadores de pagos o servicios de hosting). Estas partes solo tienen acceso a la información necesaria para realizar su función y están obligadas a protegerla.</li>
                <li><b>Requisitos legales: </b>
                    podríamos divulgar tu información si es requerida por ley, o si creemos de buena fe que dicha acción es necesaria para cumplir con una obligación legal o proteger los derechos, propiedad o seguridad de nuestra empresa.</li>
                <h3 className='titlePrivacy'>Protección de la Información</h3>
                <p>Implementamos medidas de seguridad técnicas y organizativas para proteger tu información contra el acceso no autorizado, pérdida, uso indebido o divulgación. Sin embargo, debes tener en cuenta que ninguna transmisión de datos por Internet es completamente segura.
                </p>
                <h3 className="titlePrivacy">Cookies y Tecnologías de Rastreo</h3>
                <p>Nuestro sitio utiliza cookies para mejorar la experiencia de los usuarios. Las cookies son pequeños archivos que se almacenan en tu dispositivo y permiten personalizar el contenido, almacenar preferencias y analizar el tráfico del sitio.</p>
                <li><b>Cookies obligatorias: </b>necesarias para el funcionamiento del sitio.</li>
                <li><b>Cookies de rendimiento: </b>recopilan información sobre cómo los usuarios utilizan el sitio web.</li>
                <li><b>Cookies publicitarias: </b>muestran anuncios relevantes basados en tu historial de navegación.</li>
                <p>Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar la funcionalidad del sitio.</p>
                <h3 className="titlePrivacy">Tus Derechos</h3>
                <p>Tienes derecho a: </p>
                <li><b>Acceder a tus datos: </b>solicitar una copia de la información personal que hemos recopilado.</li>
                <li><b>Rectificar tus datos: </b>corregir cualquier información incorrecta o incompleta.</li>
                <li><b>Eliminar tus datos: </b>solicitar que borremos tus datos, salvo que exista una obligación legal para retenerlos.</li>
                <li><b>Oponerte al uso de tus datos: </b>en relación con el marketing o cualquier otro propósito legítimo.</li>
                <p>Para ejercer cualquiera de estos derechos, puedes ponerte en contacto con nosotros a través del correo info@marketingdigital.com.</p>
                <h3 className="titlePrivacy">Menores de Edad</h3>
                <p>Nuestro sitio web no está dirigido a menores de 18 años, y no recopilamos conscientemente información personal de ellos. Si eres padre, madre o tutor y crees que tu hijo ha proporcionado información personal en nuestro sitio, contáctanos para eliminarla.</p>
                <h3 className="titlePrivacy">Enlaces a Sitios Externos</h3>
                <p>Nuestro sitio puede contener enlaces a sitios web de terceros. No somos responsables de las prácticas de privacidad de dichos sitios, por lo que te recomendamos revisar sus políticas de privacidad antes de proporcionar cualquier dato personal.</p>
                <h3 className="titlePrivacy">Modificaciones de la Política</h3>
                <p>Podemos actualizar esta política de privacidad en cualquier momento. Las modificaciones se publicarán en esta página, por lo que te recomendamos revisarla periódicamente. La fecha de la última actualización siempre estará indicada al inicio del documento.</p>
            </div>
            <Footer />
        </div >
    );
};

export default Privacidad;
