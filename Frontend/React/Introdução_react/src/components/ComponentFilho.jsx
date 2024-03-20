/* eslint-disable react/prop-types */
export default function ComponenteFilho(props){

    return(
        <div>
            <h2>componente filho</h2>
            <p>Nome: {props.nome}</p>
            <button onClick={()=>props.alerta()}>alerta</button>
            {props.children}
        </div>
    )
}