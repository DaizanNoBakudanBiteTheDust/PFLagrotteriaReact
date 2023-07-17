import { useEffect, useState } from "react"
import {FetchData } from "../../../renderprops/FetchData"
import pokemon from 'pokemontcgsdk'

const Cartas = () => {


    const [id, setId] = useState(1)

    const handleSiguiente = () => setId(id + 1)
    const handleAnterior = () => id > 1 && setId(id - 1)


    return{
       
    }


}

export default Cartas
