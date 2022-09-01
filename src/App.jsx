import './App.css'
import {Home_page} from  "./Componet/Home"
import { Navbar } from './Componet/Navbar'
import {  Routes, Route } from "react-router-dom";
import { Purchase_History } from "./Componet/Purchase_History";


import {Addcart} from "./Componet/AddCard"

function App() {

  return (
    <div className="App">
      <h1>E-commerce Market</h1>

      <Navbar/>

      <Routes>
        <Route path="/" element={<Home_page />}/>
        <Route path="/addcart" element={<Addcart />}/>
        <Route path="/pusechase_history" element={<Purchase_History/>}/>
      </Routes>

    </div>
  )
}

export default App
