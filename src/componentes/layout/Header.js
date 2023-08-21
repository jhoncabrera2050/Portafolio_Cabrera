import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
          <h3>Jhon Joseph Cabrera Ojanama</h3>
      </div>

      <nav>
        <ul>
          <li>
              <NavLink to="/inicio" className={({isActive}) => isActive ? "active" : ""}>Inicio</NavLink>
          </li>
          <li>
              <NavLink to="/portafolio"  className={({isActive}) => isActive ? "active" : ""} >Portafolio</NavLink>
          </li>
          <li>
              <NavLink to="/servicio"  className={({isActive}) => isActive ? "active" : ""} >Servicio</NavLink>
          </li>
          <li>
              <NavLink to="/curriculum" className={({isActive}) => isActive ? "active" : ""} >Curriculum</NavLink>
          </li>
          <li>
              <NavLink to="/contacto"  className={({isActive}) => isActive ? "active" : ""}>Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </header> 
  )
}
