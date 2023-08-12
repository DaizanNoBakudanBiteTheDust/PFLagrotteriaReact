const OrderDetail = ({item}) => {  
    console.log(item.cliente)
    return (
        <div className="container">
            <div className="row">
            <div className="col-md-12">
            <h2>Orden {item.id}</h2>
            
            {
                item.items.map((producto) => (
                    <div className="ordenPrecisa" key={producto.id}>
                        <hr/>   
                        <h3>{producto.nombre}</h3>
                        <div className="datosOrden">
                        <img src={producto.img} alt={producto.nombre}/>
                        <p>Precio: ${producto.precio * producto.cantidad}</p>
                        <p>Cantidad: {producto.cantidad}</p>
                        </div>
                        <hr/>
                        <p>Enviado a {item.cliente.direccion}</p>
                    </div>
                ))
            }
            <h4 className="totalOrden">Total: {item.total}</h4>
    
            
          
            </div>
        </div>
        </div>
    )
}

export default OrderDetail