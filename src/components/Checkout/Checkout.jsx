import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { collection, getDocs, addDoc, documentId, writeBatch, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"
import { Link, Navigate } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'

// Define restricciones formularios en base a yup

const schema = Yup.object().shape({
    nombre: Yup.string()
                .min(1, "El nombre es demasiado corto")
                .max(20, "Máximo 20 caracteres")
                .required("Este campo es obligatorio"),
    direccion: Yup.string()
                .min(6, "La direccion es demasiado corta")
                .max(120, "Máximo 120 caracteres")
                .required("Este campo es obligatorio"),
    email: Yup.string()
                .required("Este campo es obligatorio")
                .email("El email es inválido"),
    reEmail: Yup.string()
                .required("Este campo es obligatorio")
                .email("El email no coincide")          
                .test('match', 'Los correos electrónicos no coinciden', function(value) {
                    return value === this.resolve(Yup.ref('email'));
                })    
})

const Checkout = () => {
    const { cart, totalCompra, vaciarCarrito } = useContext(CartContext)

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)

// Toma el submit para decirle que valores enviar a la base de datos

    const handleSubmit = async (values) => {
        setLoading(true)
        // validaciones de formulario de orden

        const orden = {
            cliente: values,
            items: cart.map(item => ({id: item.id, precio: item.precio, cantidad: item.cantidad, nombre: item.nombre, img: item.img})),
            total: totalCompra(),
            fyh: new Date()
        }

        // Escribe la orden en la base de datos de orden y actualiza los productos de ser necesario

        const batch = writeBatch(db)
        const ordersRef = collection(db, "orders")
        const productosRef = collection(db, "productos")
        const q = query(productosRef, where( documentId(), "in", cart.map(item => item.id) ))

        const productos = await getDocs(q)
        const outOfStock = []

        // verifica si hay stock del producto si no hay stock se quita del carro

        productos.docs.forEach((doc) => {
            const item = cart.find(prod => prod.id === doc.id )
            const stock = doc.data().stock
                
            if (stock >= item.cantidad) {
                batch.update(doc.ref, {
                    stock: stock - item.cantidad
                })
            } else {
                outOfStock.push(item)
            }
        })

        // Avisa al usuario en base al stock

        if (outOfStock.length === 0) {
            await batch.commit()
            const doc = await addDoc(ordersRef, orden)

            vaciarCarrito()
            setOrderId(doc.id)
        } else {
            alert("Hay items sin stock")
        }
        setLoading(false)
    }

// Si todo lo anterior se cumple tira un success con el orderId de la orden de compra

    if (orderId) {
        return (
            <div className="container my-5">
                <h2 className="text-4xl">Tu compra se registró exitosamente!</h2>
                <hr/>
                <p>Tu número de orden es: <strong>{orderId}</strong></p>

                <Link to="/">Volver</Link>
            </div>
        )
    }

// Si el carro esta vacio vuelve al inicio

    if (cart.length === 0 ) {
        return <Navigate to="/"/>
    }
// Contenido del Checkout

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr/>

            <Formik
                initialValues={{
                    nombre: '',
                    direccion: '',
                    email: '',
                    reEmail: ''
                }}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                {() => (
                    <Form>
                        <Field placeholder="Tu nombre" className="form-control my-2" type="text" name="nombre"/>
                        <ErrorMessage name="nombre" component="p"/>
                        <Field placeholder="Tu direccion" className="form-control my-2" type="text" name="direccion"/>
                        <ErrorMessage name="direccion" component="p"/>
                        <Field placeholder="Tu email" id="email1" className="form-control my-2" type="email" name="email"/>
                        <ErrorMessage name="email" component="p"/>
                        <Field placeholder="Verifica tu email" id="email2" className="form-control my-2" type="email" name="reEmail"/>
                        <ErrorMessage name="reEmail" component="p"/>
                        <button className="btn btn-success" disabled={loading}>Enviar</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Checkout