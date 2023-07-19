// import { MOCK_DATA } from "../data/MOCK_DATA"
import dataCartas from "../data/setCartas.json"

export const datosCartas = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataCartas)
        }, 1000)
    })
}
