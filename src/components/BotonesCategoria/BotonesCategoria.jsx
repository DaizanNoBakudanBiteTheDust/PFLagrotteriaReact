import { Link } from "react-router-dom"
import "./BotonesCategoria.css"


export const BotonesCategoria = () => {

    return (
        <div className="container">
                 <ul className="botonesFiltro">
                            <li className="boton1">
                                <Link className="nav-link active" aria-current="page" to="/">Todos</Link>
                            </li>
                            <li className="boton2">
                                <Link className="nav-link" to="/categoria/pokemon-151">Colleccion 151</Link>
                            </li>
                            <li className="boton3">
                                <Link className="nav-link" to="/categoria/Obsidian-Flames">Obsidian Flames</Link>
                            </li>
                        </ul>
                        </div>
    )
}
