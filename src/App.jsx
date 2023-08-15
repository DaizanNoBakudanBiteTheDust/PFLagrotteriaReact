import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { Navbar } from './components/Header/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {Error} from './components/Error/Error404'
import { Footer } from './components/Footer/Footer'
import ProductosSellados from './components/ProductosSellados/ProductosSellados'
import { PaginaEnConstruccion } from './components/PaginaEnConstruccion/PaginaEnConstruccion'
import { CartProvider } from './context/CartContext'
import Checkout from './components/Checkout/Checkout'
import CartView from './components/CartView/CartView'
import OrdenCompra from './components/OrdenDeCompra/OrdenDeCompra'
import {OrderDetailContainer} from './components/OrderDetailContainer/OrderDetailContainer'
import { ProductoNoEncontrado } from './components/ProductoNoEncontrado/ProductoNoEncontrado'
import Accesorios from './components/Accesorios/Accesorios'


function App() {
  
  return (
    // Se crea CartContext y el arbol de rutas de la app
    <CartProvider>

<BrowserRouter> 

    <Navbar />  
    <Routes>
        <Route path="/" element={<ItemListContainer/> } />
        <Route path="/categoria/:categoryId" element={<ItemListContainer/> } />
        <Route path="/item/:itemId" element={ <ItemDetailContainer /> }/>
        <Route path="/ProductosSellados" element={ <ProductosSellados /> }/>
        <Route path="/Accesorios" element={ <Accesorios /> }/>
        <Route path="/Eventos" element={ <PaginaEnConstruccion img="https://web.big-bang.cl/wp-content/uploads/2019/04/qwe-min.png"/> }/>
        <Route path="/OrdenCompra/" element={ < OrdenCompra /> }/>
        <Route path="/Orden/:itemId" element={ < OrderDetailContainer /> }/>
        <Route path="/cart" element={ <CartView />}/>
        <Route path="/checkout" element={ <Checkout />}/>
        <Route path="/item/NoEncontrado" element={ <ProductoNoEncontrado /> }/>
        <Route path="*" element={ <Error /> }/>
    </Routes>

    <Footer />

</BrowserRouter> 
</CartProvider>

  ) 
}

export default App
