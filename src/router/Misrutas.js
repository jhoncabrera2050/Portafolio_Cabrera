import React from 'react'
import { Routes, Route, BrowserRouter, Navlink } from "react-router-dom"
import { Inicio } from "../componentes/Inicio"
import { Portafolio } from '../componentes/Portafolio'
import { Servicio } from '../componentes/Servicio'
import { Contacto } from '../componentes/Contacto'
import { Curriculum } from '../componentes/Curriculum'
import { Header } from '../componentes/layout/Header'
import { Footer } from '../componentes/layout/Footer'

export const Misrutas = () => {
  return (
    <BrowserRouter>
      {/* header y navegacion */}
      <Header></Header>
      {/* contenido central */}
      <section className='content'>
        <Routes>
          <Route path='/' element={<Inicio />} ></Route>
          <Route path='/inicio' element={<Inicio />}></Route>
          <Route path='/portafolio' element={<Portafolio />}></Route>
          <Route path='/servicio' element={<Servicio />}></Route>
          <Route path='/contacto' element={<Contacto />}></Route>
          <Route path='/curriculum' element={<Curriculum></Curriculum>}></Route>
        </Routes>
      </section>
      {/* footer */}
      <Footer></Footer>
    </BrowserRouter>
  )
}
