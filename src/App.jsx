import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import {  Navbar } from './components/header/navbar'
import {ItemListContainer} from './components/itemListContainer'
import pokemon from 'pokemontcgsdk'
pokemon.configure({apiKey: 'f2c0bdbf-4664-4433-b770-a2f3c0d19e44'})

function App() {

  return (
<div>
    <Navbar />
    <ItemListContainer />
</div>

  )
}

export default App
