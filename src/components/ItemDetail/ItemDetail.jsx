import './ItemDetail.css'
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = ({item}) => {
    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }

        agregarAlCarrito(newItem)
    }

    return (
        <div className="container">
            <div className="row">
            <h2>{item.nombre}</h2>
            <div className="col-md-6">
            <img src={item.img} alt={item.nombre}/>
            </div>
            <div className="col-md-6">
            <p>{item.description}</p>
            <p><span>Precio: ${item.precio}</span></p>
            <button className="btn">Agregar</button>
            </div>
            </div>
        </div>
    )
}

export default ItemDetail