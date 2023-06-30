import logo from '../../assets/img/logoTienda.png'
import { Carrito } from './carrito'

export const Header = () => {

return (

            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img src={logo}></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Productos Sellados</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Accesorios</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Eventos</a>
                            </li>
                        </ul>
                    </div>
                </div>
               
                    <Carrito />
                
            </nav>
)

}