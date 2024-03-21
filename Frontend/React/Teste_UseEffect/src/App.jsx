import { useState } from "react"
import Componente1 from "./components/Componente1"

export default function App() {

  const [comp,setcomp] = useState(true)
  const mudar = ()=> {setcomp(!comp)}

  return (
    <>
      <h1>Componente App</h1>
      <button onClick={mudar}>Mudar</button>
      {
        comp ? <Componente1/> : ""
      }

    </>
  )
}
