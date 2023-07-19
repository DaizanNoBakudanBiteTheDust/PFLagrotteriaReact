import { Link } from "react-router-dom"
import "./itemCard.css"

const ItemCard = ({item}) => {

    return (
        <div className='col-md-4'>
            <h4>{item.nombre}</h4>
            <img src={item.img} alt={item.nombre}/>
            <p>Precio: ${item.precio}</p>
            <Link to={`/item/${item.id}`} className='btn'>Ver más</Link>
        </div>
    )
}

export default ItemCard