import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from '../ItemDetail/ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import {db} from '../../firebase/config'


export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    console.log(itemId)
    console.log(item)

    useEffect(() => {
        setLoading(true)


    // Armo la referencia
        const prodRef = doc(db, "productos", itemId)
    // Llamo referencia
    getDoc(prodRef)
            .then((doc) => {
               setItem({
                id: doc.id,
                ...doc.data()
               })
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))

    }, [])

    return (
        <div className="container">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemDetail item={item}/>
            }
        </div>
    )
}
