import Navbar from "../components/NavBar";
import '../styles/Dashboard.css';
import { useAuth } from "../AuthProvider";
import React, { useEffect, useState } from 'react';

function Dashboard() {
    const [cursos, setCursos] = useState([]);
    const auth = useAuth();

    useEffect(() => {
        const fetchCursos = async () => {
            try {
                const response = await fetch('http://localhost:3000/api/cursos_usuarios/cursos', {
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
        <div>
             <Navbar />
            <h1>Mis Cursos</h1>
            <ul>
                {cursos.map(curso => (
                    <li key={curso.id_curso}>
                        <img src={curso.image} alt={curso.nombre} />
                        <h2>{curso.nombre}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
