import React from 'react'
import '../styles/NavBar.css'
import { NavLink } from "react-router-dom";
import { useAuth } from "../AuthProvider";

const Navbar = () => {
  const auth = useAuth();
  const userType = auth.user ? auth.user.ID_TIPO : null;

  return (
    <div className='container-nav'>
      <header className="header">
        <NavLink to="/" className='logo'>
        <img src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725173242/imagenes/nqtrdnabynrogmjzeoo5.png" alt="logo-mdpt" className='logo-mdpt' loading='lazy'/>
          <div>
            <div className='logo-l'></div>  
          </div>
          <div>
          <div className='logo-b'>Marketing</div>
            <div className='logo-b'>Digital</div>
            <div className='logo-b'>Para Todos</div>
          </div>
        </NavLink>
        <nav className='navbar'>
          <a href="#">Servicios</a>
          <NavLink to="/Courses">Cursos</NavLink>
          <NavLink to="/About">About</NavLink>
          {auth.user ? (
                  <a href="#" onClick={() => auth.logOut()}>Salir</a>
                ) : (
                  <NavLink to="/Login">Login</NavLink>
                )}
        </nav>
      </header>
    </div>
  )
}

export default Navbar
