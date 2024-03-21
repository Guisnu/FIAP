import { useState } from "react"

export default function App() {

  const[cont, setCont] = useState(0)

  let cont2 = 0

  const aumentar = ()=>{
    ++cont2
    setCont(cont + 1)
  }

  return (
    <>
      <h1>Componente App</h1>
      <p>Valor cont: {cont}</p>
      <p>Valor cont2: {cont2}</p>
      <button onClick={()=> aumentar()}>aumentar</button>
    </>
  )
}

