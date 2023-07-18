import logo from '../../assets/img/logoTienda.png'
import { Carrito } from './carrito'

export const Navbar = () => {

return (

            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo}></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Productos Sellados</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Accesorios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Eventos</a>
                            </li>
                        </ul>
                    </div>
                </div>
               
                    <Carrito />
                
            </nav>
)

}