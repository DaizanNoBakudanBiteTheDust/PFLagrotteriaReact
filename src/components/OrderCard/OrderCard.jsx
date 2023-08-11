import { useState, useEffect } from "react"
import { Link } from "react-router-dom"


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
            <h4>Orden {item.id}</h4>
            <p className="right">Fecha: {formattedFecha}</p>
            <Link to={`/item/${item.id}`} className='btn'>Ver más</Link>
        </div>
    )
}

export default OrderCard 