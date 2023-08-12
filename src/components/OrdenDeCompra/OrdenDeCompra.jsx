import { useEffect, useState } from 'react'
import { ListaOrdenes } from '../ListaOrdenes/ListaOrdenes'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import {db} from '../../firebase/config'
import { Link } from 'react-router-dom'

// Creo la Constante Ordenes de compra

const OrdenCompra = () => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    

    useEffect(() => {
        setLoading(true)

//        Armar referencia
        const ordersRef = collection(db, "orders")
        const q = categoryId ? 
            query(ordersRef, where('category', '==', categoryId))
            :ordersRef
//         Traer Referencia con get docs
        getDocs(q)
            .then((resp) => {
                const docs = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setOrders(docs)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))

        }, [categoryId])

        // le digo que si no tiene nada deje un texto

        if (orders.length === 0) {
            return (
                <div className="container my-5">
                    <h2>Realiza una compra para poder ver las ordenes de compra</h2>
                    <hr/>
                    <Link to="/" className="btn btn-success">Ir a comprar</Link>
                </div>
            )

            // Sino que llame las ordenes de compra
        }else{

    return (


        <div>            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ListaOrdenes orders={orders}/>
            }
        </div>
    )
}
}
export default OrdenCompra