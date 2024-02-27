import "./MeusDados.css"
import logo from "./img/Logo-FIAP.png"

export default function MeusDados(){
    let nome="Guilherme Nunes"
    let idade="19"
    let profissao = "engenheiro de software"

    let formParagr = {
        color: "blue",
        fontSize: "25px",
        background: "yellow"
    }
    return(
        <>
        <h2>MEUS DADOS</h2>
        <img src={logo} alt="Logo FIAP" width='100px'/>
        <p style={{color:"red",textAlign:"center"}}>Nome: {nome}</p>
        <p style={formParagr}>Idade: {idade}</p>
        <p className="terceiro">Profissão: {profissao}</p>
        </>
    )
}