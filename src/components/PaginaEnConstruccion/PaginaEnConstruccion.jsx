
import './PaginaEnConstruccion.css'

export const PaginaEnConstruccion = ({img}) => {

    return (
        <div className="contenedorConstru">
            <img src={img}/>
        <h2>Pagina En Construccion</h2>
        <p>Lo sentimos esta pagina esta en Construccion una vez finalizada podras ver nuestro contenido</p>
        </div>
    )
}