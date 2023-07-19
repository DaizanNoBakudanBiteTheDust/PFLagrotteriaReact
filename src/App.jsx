import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import {  Navbar } from './components/header/navbar'
import ItemListContainer from "./components/ItemListContainer/itemListContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import {Error} from './components/Error/Error404'
import { Footer } from './components/Footer/footer'
import ProductosSellados from './components/ProductosSellados/ProductosSellados'


function App() {
  
  return (
    
<BrowserRouter>

    <Navbar />  
    <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/categoria/:categoryId" element={<ItemListContainer/>} />
        <Route path="/item/:itemId" element={ <ItemDetailContainer /> }/>
        <Route path="/ProductosSellados" element={ <ProductosSellados /> }/>
        <Route path="*" element={ <Error /> }/>
    </Routes>

    <Footer />

</BrowserRouter> 

  ) 
}

export default App
