import React, { useState, useEffect, useRef } from 'react';
import '../styles/NavBar.css';
import { NavLink } from "react-router-dom";
import { useAuth } from "../AuthProvider";

const Navbar = () => {
  const auth = useAuth();

  const [menuVisible, setMenuVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setMenuVisible(false);
      }
    };

    if (menuVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuVisible]);

  return (
    <div className='container-nav'>
      <header className="header">
        <NavLink to="/" className='logo'>
          <img src="https://res.cloudinary.com/dunvg7cru/image/upload/v1725172120/imagenes/login/rtxexftuvw2koarf1h8d.png" alt="logo-mdpt" className='logo-mdpt' loading='lazy' />
        </NavLink>

        {/* Ícono del menú para pantallas pequeñas */}
        <div className="hamburger-menu" onClick={toggleMobileMenu}>
          &#9776;
        </div>

        <nav className={`navbar ${mobileMenuVisible ? 'active' : ''}`}>
          {!auth.user && (
            <>
              <a href="#">Servicios</a>
            </>
          )}
          <NavLink to="/Courses">Cursos</NavLink>

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
