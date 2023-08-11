import OrderCard from '../OrderCard/OrderCard'


export const ListaOrdenes = ({orders}) => {

    return (
        <div className="container">
            <h2 className="text-blue-800 text-4xl">Ordenes de Compra</h2>
           <div className='row'>
            {
                orders.map((ord) => <OrderCard key={ord.id} item={ord}/>)
            }
                </div>
        </div>
    )
}
