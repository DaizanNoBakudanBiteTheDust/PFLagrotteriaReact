import { useEffect, useState } from 'react'
import { ListaOrdenes } from '../ListaOrdenes/ListaOrdenes'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import {db} from '../../firebase/config'

// Creo la Constante Item List container

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

    return (

        //Llamo al Carousel y al item list container
        <div>            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ListaOrdenes orders={orders}/>
            }
        </div>
    )
}

export default OrdenCompra