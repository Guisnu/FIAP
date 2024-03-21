import { Link } from "react-router-dom";


export default function Menu(){
    
    return(
        <div>
            <ul>
                <li><Link to="/">home</Link></li>
                <li><Link to="/servicos">serviços</Link></li>
                <li><Link to="/produtos">produtos</Link></li>
            </ul>
        </div>
    )
} 
