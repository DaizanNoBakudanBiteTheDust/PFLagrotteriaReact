import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import {  Navbar } from './components/header/navbar'
import {ItemListContainer} from './components/itemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import pokemon from 'pokemontcgsdk'
pokemon.configure({apiKey: 'f2c0bdbf-4664-4433-b770-a2f3c0d19e44'})

function App() {

  return (
<BrowserRouter>

    <Navbar />
    <ItemListContainer />

</BrowserRouter>

  )
}

export default App
