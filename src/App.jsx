import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import {  Header } from './components/header/header'
import {ItemListContainer} from './components/itemListContainer'

function App() {

  return (
<div>
    <Header />
    <ItemListContainer />
</div>

  )
}

export default App
