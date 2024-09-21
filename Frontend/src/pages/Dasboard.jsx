import Navbar from "../components/NavBar";
import '../styles/Dashboard.css';
import { useAuth } from "../AuthProvider";
import Footer from "../components/Footer"
import React, { useEffect, useState } from 'react';

function Dashboard() {
    const [cursos, setCursos] = useState([]);
    const auth = useAuth();

    useEffect(() => {
        const fetchCursos = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/cursos_usuarios/cursos`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": auth.token,
                    },
                });

                if (!response.ok) {
                    throw new Error('Error fetching cursos');
                }

                const data = await response.json();
                setCursos(data);
            } catch (error) {
                console.error('Error fetching cursos', error);
            }
        };

        fetchCursos();
    }, []);

    return (
        <div className="containerP-misCursos">
            <div className="container-misCursos">
                <Navbar />
                <div className='title-misCursos'>
                    <h3>¡Mis Cursos!</h3>
                </div>
                <div className="misCursos">
                    {cursos.map(curso => (
                        <div key={curso.id_curso} className="columnMisCursos">                          
                            <img src={curso.image} alt={curso.nombre} />
                            <div className="icono-disponible">DISPONIBLE</div>
                        </div>
                    ))}
                    
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Dashboard;
