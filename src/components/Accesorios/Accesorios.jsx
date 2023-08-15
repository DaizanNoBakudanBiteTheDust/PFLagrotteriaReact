import { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/config'

const Accesorios = () => {
    const [accesorios, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    console.log(categoryId)

    useEffect(() => {
        setLoading(true)

     //        Armar referencia
     const productosRef = collection(db, "Accesorios")
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
        <div>

           
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList productos={accesorios}/>
            }
        </div>
    )
}

export default Accesorios