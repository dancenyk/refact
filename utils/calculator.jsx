import { useState } from 'react'

const Calculator = () => {
    let [number1, setNumber1] = useState(0)
    let [number2, setNumber2] = useState(0)
    let [result, setResult] = useState(0)
  

    const add = () => {
      setResult(parseFloat(number1) + parseFloat(number2))
    }
  
    const subtract = () => {
      setResult(parseFloat(number1) - parseFloat(number2))
    }
  
    const multiply = () => {
      setResult(parseFloat(number1) * parseFloat(number2))
    }
  
    const divide = () => {
      setResult(parseFloat(number1) / parseFloat(number2))
    }
    return (
        <div  className="calculator-container">
        <h2>Calculadora</h2>
        <input
          type='number'
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
          placeholder='Primer numero'
        />
  
        <input
          type='number'
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
          placeholder='Segundo numero'
          />
          <button onClick={add}>Sumar</button>
          <button onClick={subtract}>Restar</button>
          <button onClick={multiply}>Multiplicar</button>
          <button onClick={divide}>Dividir</button>
          <h3>Resultado: {result}</h3>
      </div>
    )
  }

  export default Calculator