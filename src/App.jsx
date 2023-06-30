import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import {  Navbar } from './components/header/navbar'
import {ItemListContainer} from './components/itemListContainer'

function App() {

  return (
<div>
    <Navbar />
    <ItemListContainer />
</div>

  )
}

export default App
