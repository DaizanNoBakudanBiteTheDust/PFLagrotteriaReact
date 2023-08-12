import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import ItemDetail from '../ItemDetail/ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import {db} from '../../firebase/config'


export const ItemDetailContainer = () => {
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const [itemExists, setItemExists] = useState(true) 

    const navigate = useNavigate();

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
                if (doc.exists()) {
                    setItem({
                        id: doc.id,
                        ...doc.data()
                    })
                } else {
                    setItem(null);
                    setItemExists(false);
                }
    })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))

    }, [])

    useEffect(() => {
        if (!itemExists) {
            navigate("/item/NoEncontrado"); // Redirección utilizando navigate
        }else{}
    }, [itemExists, navigate]);


    if(!itemExists){
            console.log(itemExists)
    }else{
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
}
