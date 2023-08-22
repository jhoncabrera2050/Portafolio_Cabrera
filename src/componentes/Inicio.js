import React from 'react'
import {Link} from 'react-router-dom'
export const Inicio = () => {
  return (
    <div className='home'>
      <h1>
        Hola, Soy <strong> Joseph Cabrera  </strong>  soy desarrollador web y back end en Perú, y ofrezco mis
        servicios de <strong> programación </strong> y <strong> desarrollo </strong>  en todo tipo de proyectos Tecnológicos.
        ágiles.
      </h1>
      <h2>Te ayudaré en proyectos de empresariales, requerimientos especificos de empresa o en crear tu sitio o aplicacion web.
        <Link to="/contacto">Contacta Conmigo</Link>
      </h2>
    </div>
  )
}
