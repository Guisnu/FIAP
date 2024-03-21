import { useState } from "react"
import Componente1 from "./components/componente1"

export default function App() {

  const [contState, setcont] = useState(0)
  var contVar = 0

  function aumentar(){
    setcont(contState + 1)
    ++contVar
  }

  return (
    <>
      <h1>Meu primeiro app</h1>
      <p>Valor do state: {contState}</p>
      <p>Valor da váriavel: {contVar}</p>
      <button onClick={aumentar}>Aumentar</button>
      <Componente1 contState={contState} aumentar={aumentar}></Componente1>
    </>
  )
}
