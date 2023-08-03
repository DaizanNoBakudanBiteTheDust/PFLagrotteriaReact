import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { Carousel } from '../Carousel/Carousel'
import { useParams } from 'react-router-dom'
import "./itemListContainer.css"
import { collection, getDocs, query, where } from 'firebase/firestore'
import {db} from '../../firebase/config'

// Creo la Constante Item List container

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    

    useEffect(() => {
        setLoading(true)

//        Armar referencia
        const productosRef = collection(db, "productos")
        const q = categoryId ? 
            query(productosRef, where('category', '==', categoryId))
            :productosRef
//         Traer Referencia con get docs
        getDocs(q)
            .then((resp) => {
                const docs = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                })
                setProductos(docs)
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))

        }, [categoryId])

    return (

        //Llamo al Carousel y al item list container
        <div>
            <Carousel/>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList productos={productos}/>
            }
        </div>
    )
}

export default ItemListContainer