import { useEffect, useState } from "react"

export default function Componente1(){

    const [cont,setcont] = useState(0)
    const aumentar = ()=>{
        setcont(cont + 1)
    }

    const [cont2,setcont2] = useState(0)
    const aumentar2 = ()=>{
        setcont2(cont2 + 1)
    }
    
    useEffect(()=>{
        console.log("Toda vez eu sou chamado")
    })

    useEffect(()=>{
        console.log("Sou chamado quando o componente é criado")
    },[])

    useEffect(()=>{
        console.log("Sou chamao quando cont2 é usado")
    },[cont2])

    useEffect(()=>{
        return()=>{console.log("ops me excluíram!!!")}
    },[])


    return(
        <>
        <h2>Componente 1</h2>
        <p>Valor do cont: {cont}</p>
        <button onClick={aumentar}>Aumentar</button>
        <p>Valor de cont2: {cont2}</p>
        <button onClick={aumentar2}>Aumentar cont2</button>
        </>
    )
}
