import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import './OrderCard.css'


const OrderCard = ({item}) => {

    const [formattedFecha, setFormattedFecha] = useState("");

    useEffect(() => {

        if (item.fyh) {
            const date = new Date(item.fyh.seconds * 1000); 
            const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
            setFormattedFecha(formattedDate);
          }
    }, [item.fyh]);

    return (
        <div className='col-md-12'>
            <div className="contenedor">
            <h4>Orden {item.id}</h4>
            <p className="right">Fecha: {formattedFecha}</p>
            
            <Link to={`/Orden/${item.id}`} className='btnOrder'>Ver Orden de compra</Link>
            </div>
        </div>
    )
}

export default OrderCard 