import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import {  Navbar } from './components/header/navbar'
import ItemListContainer from "./components/itemListContainer/itemListContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'


function App() {
  
  return (
    
<BrowserRouter>

    <Navbar />  
    <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/categoria/id" element={<ItemListContainer/>} />
        <Route path="/item/:itemId" element={ <ItemDetailContainer /> }/>
    </Routes>

</BrowserRouter> 

  ) 
}

export default App
