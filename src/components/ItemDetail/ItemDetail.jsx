import "./ItemDetail.css"

const ItemDetail = ({item}) => {

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