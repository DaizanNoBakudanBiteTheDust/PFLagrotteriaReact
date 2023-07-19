import { useEffect, useState } from 'react'
import { datosCartas } from '../../helpers/pedirData'
import ItemList from '../ItemList/ItemList'
import { Carousel } from '../Carousel/Carousel'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    console.log(categoryId)

    useEffect(() => {
        setLoading(true)

        datosCartas()
            .then(r => {
                if (categoryId) {
                    setProductos( r.filter(prod => prod.category === categoryId) )
                } else {
                    setProductos(r)
                }
            })
            .catch(e => console.log(e))
            .finally(() => {
                setLoading(false)
            })
        }, [categoryId])

    return (
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