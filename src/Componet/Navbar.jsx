import React from "react";
import { Home_page } from "./Home";
import { Addcart } from "./AddCard";
import { Link } from "react-router-dom";



export const Navbar = () => {
    return(
        <div style={{display : "flex" , justifyContent:"space-around"}}>

            <Link to="/">Home</Link>
            <Link to="/addcart">Add card</Link>
            <Link to="/pusechase_history">Purchase History</Link>


           

        </div>
    )
}