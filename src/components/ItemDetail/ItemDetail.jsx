const ItemDetail = ({item}) => {

    return (
        <div className="container">
            <div className="row">
            <h2>{item.nombre}</h2>
            <div className="col-md-6">
            <img src={item.img} alt={item.nombre}/>
            </div>
            <div className="col-md-6">
            <p>{item.descripcion}</p>
            <p>Precio: ${item.precio}</p>
            <button className="btn btn-success">Agregar</button>
            </div>
            </div>
        </div>
    )
}

export default ItemDetail