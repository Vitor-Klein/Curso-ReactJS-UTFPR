import { useState } from 'react'
function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

const Addition = () => {
  const sum = parseFloat(num1) + parseFloat(num2)
  setResult(sum)
}

  return (
    <>
      <div>
        <input 
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder='informe o primeiro numero'
        />
        +
        <input 
          type="number" 
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder='informe o segundo numero'
        />

        <button onClick={Addition}>Calcular</button>

        <h2>O resultado é: {result}</h2>
      </div>
        
    </>
  )
}

export default App
