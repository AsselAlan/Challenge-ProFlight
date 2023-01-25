import React, { useState } from 'react'
import img from '../../assets/FotologoProFlight.png'

import './carrusel.css'


const Carrusel = () => {
  
  let [contador, setContador] = useState(1)
    
  const moverDerecha = () => (contador <= 1) ? setContador(4) : setContador(contador = contador-1)
  
  const moverIzquierda = () => (contador >= 4) ? setContador(1) : setContador(contador= contador+1)
      
  
  return (
    <div className='carruselContainer'>
        <button onClick={moverDerecha}>⇦</button>
        <div id='logo' className={(contador === 1) ? "slected" : null}><img src={img} alt="" /></div>
        <div id='logo' className={(contador === 2) ? "slected" : null}><img src={img} alt="" /></div>
        <div id='logo' className={(contador === 3) ? "slected" : null}><img src={img} alt="" /></div>
        <div id='logo' className={(contador === 4) ? "slected" : null}><img src={img} alt="" /></div>
        <button onClick={moverIzquierda}>⇨</button>
    </div>
  )
}

export default Carrusel