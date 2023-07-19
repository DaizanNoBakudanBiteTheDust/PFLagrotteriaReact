import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import {  Navbar } from './components/header/navbar'
import ItemListContainer from "./components/ItemListContainer/itemListContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import { Footer } from './components/Footer/footer'


function App() {
  
  return (
    
<BrowserRouter>

    <Navbar />  
    <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/categoria/:categoryId" element={<ItemListContainer/>} />
        <Route path="/item/:itemId" element={ <ItemDetailContainer /> }/>
    </Routes>

    <Footer />

</BrowserRouter> 

  ) 
}

export default App
