import './App.css'
import {Home_page} from  "./Componet/Home"
import { Navbar } from './Componet/Navbar'
import {  Routes, Route } from "react-router-dom";

import {Addcart} from "./Componet/AddCard"

function App() {

  return (
    <div className="App">
      <h1>E-commerce Market</h1>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home_page />}/>
        <Route path="/addcart" element={<Addcart />}/>
      </Routes>
      
    </div>
  )
}

export default App
