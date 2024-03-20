import ComponenteFilho from "./components/ComponentFilho"

export default function App() {
  
  let nome = "Guilherme Nunes" 

  const alerta = ()=>{
    alert("Olá pessoal!!")
  }

  return (
    <>
      <h1>componente app</h1>
      <p>nome: {nome}</p>
      <ComponenteFilho nome={nome} alerta={alerta}>
        <ul>
          <li>Maça</li>
          <li>Pera</li>
          <li>Banana</li>
        </ul>
      </ComponenteFilho>
    </>
  )
}
