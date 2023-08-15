import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import './CartView.css'



const CartView = () => {
    const { cart, totalCompra, vaciarCarrito, removerDelCarrito } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className="container">
                <h2 className="text-center">Tu carrito está vacío :(</h2>
                <hr/>
                <Link to="/" className="btn btn-success">Ir a comprar</Link>
            </div>
        )
    }

    return (
        <div className="container">
            <h2 className="text-center">Tu compra</h2>
            <hr/>

            {
                cart.map((item) => (
                    <div key={item.id} className="productoCarrito"> 
                        <h3>{item.nombre}</h3>
                        <img src={item.img} alt={item.nombre}/>
                        <p>Precio: ${item.precio * item.cantidad}</p>
                        <p>Cantidad: {item.cantidad}</p>
                        <button onClick={() => removerDelCarrito(item.id)} className="btn btn-danger">Eliminar del carrito</button>
                        <hr/>
                    </div>
                ))
            }

            <div className="totalCompra">
                <h4 className="t">Total: ${totalCompra()}</h4>
                <button onClick={vaciarCarrito} className="btn btn-danger">Vaciar carrito</button>
                <Link className="btn btn-success mx-2" to="/checkout">Terminar mi compra</Link>
            </div>            
        </div>
    )
}

export default CartView