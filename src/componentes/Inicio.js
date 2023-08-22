import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export const Inicio = () => {
  const [showAlternateHeader, setShowAlternateHeader] = useState(false);
  const toggleHeader = () => {
    setShowAlternateHeader(!showAlternateHeader);
  }
  return (
    <div className='home'>
      {showAlternateHeader ? (
        <h1 className='animated-header' onClick={toggleHeader}>
          Soy un  <strong> backend developer </strong> con más de 1
          año de experiencia. Mi enfoque es desarrollar software altamente escalable con metodologías
          ágiles.
        </h1>
      ) : (
        <h1 className='animated-header' onClick={toggleHeader}>
          Hola, Soy <strong> Joseph Cabrera  </strong>  soy desarrollador web y back end en Perú, y ofrezco mis
          servicios de <strong> programación </strong> y <strong> desarrollo </strong>  en todo tipo de proyectos Tecnológicos.
          ágiles.
        </h1>
      )}
      <h2>Te ayudaré en proyectos de empresariales, requerimientos específicos de empresa o en crear tu sitio o aplicación web.
        <Link to="/contacto"> Contacta Conmigo </Link>
      </h2>

      <section className='last-works' >
        <h4>Mis proyectos Profesionales</h4>
      </section>
    </div>
  );
};
