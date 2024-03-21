/* eslint-disable react/prop-types */


export default function Componente1(props){

    return(
        <>
        <h2>Componente 1</h2>
        <p>Valor do contsState enviados por props: {props.contState}</p>
        <button onClick={props.aumentar}>aumentar</button>
        </>
    )
}