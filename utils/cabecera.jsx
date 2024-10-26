import React from 'react'

const Cabecera = () => {
   
   return (
    <>
    <h2>Cocretas Bonicas</h2>
    <img src="src/assets/cocretainc.jpg" className='logo' alt="logo cocreta" />
    </>
    
   )

} 

const Footer = () =>{

   return (
    <div>
    <p>Todos los derechos reservados</p>
    <p>Coquetas INC ©</p>
    <p>Dirección: Simancas (Madriz)</p>
    <p>Teléfono: 917335673 - 635444912</p>
    <p>Email: croquetasINC@hotmail.com</p>
    </div>
   )
}



export {Cabecera, Footer};