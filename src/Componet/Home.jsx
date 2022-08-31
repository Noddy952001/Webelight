import {React , useEffect} from "react";
import axios from "axios"
import { useState } from "react";
import "../Style/Product.css"



export const Home_page = () => {

    const [Products , setProducts ] = useState()

    useEffect(() => {
        Data()
    },[])

    const Data = () => {
        axios.get("https://fakestoreapi.com/products").then(function(res){
              setProducts(res.data)
            console.log(res.data)
        })
    }

    return(
        <div>
            <h1>E-commerce Market</h1>
            {
                Products?.map((el , i) => {
                    return(
                        <div key={i}  className="Products_div">
                            <img  src={el.image} />
                            <p> Name :-  {el.title}</p>
                            
                            <h1>Price :- {el.price}</h1>
                            <button>Add card</button>
                        </div>
                    )
                })
            }


        </div>
    )
}