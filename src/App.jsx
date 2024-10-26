import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import employeesList from '../utils/users'
import { Cabecera, Footer }  from '../utils/cabecera'
//import lodearriba from './top'
import './App.css'
import Calculator from '../utils/calculator'


function App() {
  
    return (
      <>
        <div className='header'>
          <img src={reactLogo} alt="" />
        <Cabecera/> 
        </div>
          <Calculator />
        <div className='envoltura'>
        {employeesList.map((employee, index) => (
          <div className='card' key={index}>
              <p>Nombre: {employee.name} {employee.lastName}</p>
              <p>Edad: {employee.age}</p>
              <p>Hobbies: {employee.hobbies.join(', ')}</p>
      </div>
      ))}
        
        </div>     
      <Footer/> 
    </>
    );
  }
  
export default App
