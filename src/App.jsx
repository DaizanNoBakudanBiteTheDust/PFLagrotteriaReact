import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import {  Navbar } from './components/header/navbar'
import {ItemListContainer} from './components/content/itemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  
  return (
    
<BrowserRouter>

    <Navbar />  
    <Routes>
        <Route path="/" element={<ItemListContainer/>} />
        <Route path="/category/id" element={<ItemListContainer/>} />
        <Route path="/item/:itemId" element={<ItemListContainer/>} />
    </Routes>
    <ItemListContainer />

</BrowserRouter> 

  ) 
}

export default App
