import ItemCard from '../itemCard/itemCard'
import "./ItemList.css"
import { BotonesCategoria } from "../BotonesCategoria/BotonesCategoria"

const ItemList = ({productos}) => {

    return (
        <div className="container">
            <h2 className="text-blue-800 text-4xl">Set de Cartas</h2>
           
            <BotonesCategoria />

           <div className='row'>
            {
                productos.map((prod) => <ItemCard key={prod.id} item={prod}/>)
            }
           </div>
        </div>
    )
}

export default ItemList