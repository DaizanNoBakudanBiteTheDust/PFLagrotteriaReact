import { Link } from "react-router-dom"
import "./itemCard.css"

const ItemCard = ({item}) => {

    return (
        <div className='col-md-4'>
            <div>
                <img src={item.img} alt={item.nombre}/>
            </div>
            <h4>{item.nombre}</h4>
            <p>Precio: ${item.precio}</p>
            <Link to={`/item/${item.id}`} className='btn'>Ver más</Link>
        </div>
    )
}

export default ItemCard