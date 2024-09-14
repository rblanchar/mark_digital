import React, { useState, useEffect, useRef } from 'react';
import '../styles/NavBar.css';
import { NavLink } from "react-router-dom";
import { useAuth } from "../AuthProvider";

const Navbar = () => {
  const auth = useAuth();
  const userType = auth.user ? auth.user.ID_TIPO : null;

  // Estado para controlar el despliegue del menú
  const [menuVisible, setMenuVisible] = useState(false);

  // Ref para identificar el menú desplegable
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // Efecto para detectar clics fuera del menú desplegable
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuVisible(false);
      }
    };

    // Añade el event listener cuando el menú está visible
    if (menuVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      // Limpia el event listener al desmontar el componente o cuando el menú se oculta
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuVisible]);

  return (
    <div className='container-nav'>
      <header className="header">
        <NavLink to="/" className='logo'>
          <img src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725172120/imagenes/login/rtxexftuvw2koarf1h8d.png" alt="logo-mdpt" className='logo-mdpt' loading='lazy' />
        </NavLink>
        <nav className='navbar'>
          {!auth.user && (
            <>
              <a href="#">Servicios</a>
            </>
          )}
          <NavLink to="/Courses">Cursos</NavLink>
          {/* {!auth.user && (
            <>
              <NavLink to="/About">About</NavLink>
            </>
          )} */}

          {auth.user ? (
            <div className="dropdown" ref={dropdownRef}>
              <a onClick={toggleMenu}>Mi cuenta</a>
              {menuVisible && (
                <div className="dropdown-menu">
                  <a href="#">Mis Datos</a>
                  <NavLink to="/dashboard">Mis Cursos</NavLink>
                  <a href="#" onClick={() => auth.logOut()}>Cerrar Sesion</a>
                </div>
              )}
            </div>
          ) : (
            <NavLink to="/Login">Ingresar</NavLink>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
