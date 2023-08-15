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

    useEffect(() => {
        setLoading(true)


    // Armo la referencia
        const prodRef = doc(db, "productos", itemId)
        const accesoriosRef = doc(db, "Accesorios", itemId)

    // Llamo referencias 

    Promise.all([getDoc(prodRef), getDoc(accesoriosRef)])
    .then(([prodDoc, accesoriosDoc])  => {
        if (prodDoc.exists()) {
            setItem({
                id: prodDoc.id,
                ...prodDoc.data()
            });
            setItemExists(true);
        } else if (accesoriosDoc.exists()) {
            setItem({
                id: accesoriosDoc.id,
                ...accesoriosDoc.data()
            });
            setItemExists(true);
        } else {
            setItem(null);
            setItemExists(false);
        }
    })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))

    }, [itemId])

    

    useEffect(() => {
        if (!itemExists) {
            navigate("/item/NoEncontrado"); // Redirección utilizando navigate
        }else{}
    }, [itemExists, navigate]);


    
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

