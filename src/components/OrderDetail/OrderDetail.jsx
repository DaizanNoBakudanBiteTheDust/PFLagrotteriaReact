const OrderDetail = ({item}) => {  
    console.log(item.cliente)
    return (
        <div className="container">
            <div className="row">
            <h2>Orden {item.id}</h2>

            {
                item.items.map((producto) => (
                    <div key={producto.id}>
                        <h3>{producto.nombre}</h3>
                        <img src={producto.img} alt={producto.nombre}/>
                        <p>Precio: ${producto.precio * producto.cantidad}</p>
                        <p>Cantidad: {producto.cantidad}</p>
                        <hr/>
                        <p>Enviado a {item.cliente.direccion}</p>
                    </div>
                ))
            }
    
            
          
            </div>
        </div>
    )
}

export default OrderDetail