import {React , useEffect} from "react";
import axios from "axios"
import { useState } from "react";
import "../Style/Product.css"



export const Home_page = () => {

    const [Products , setProducts ] = useState()
    const [status , setStatus] = useState(true)
    const [sort , setsort] = useState("Increse")

    const [addcard , setaddcard] = useState([])


    useEffect(() => {
        Data()
    },[])

    const Data = () => {
        axios.get("https://fakestoreapi.com/products").then(function(res){
              setProducts(res.data)
            console.log(res.data)
        })
    }

    const Increasing_order = () => {
        var filterdata = [...Products]

        filterdata.sort(function(a,b){
            return a.price - b.price
        })
        setProducts(filterdata)
    }

    const Decrese_order = () => {
        var filterdata = [...Products]
        filterdata.sort(function(a,b){
            return  b.price -a.price 
        })
        setProducts(filterdata)
    }

    const category = () => {
        var filterdata = [...Products]

        var newdata = filterdata.filter(function(el){
            return  el.category == "jewelery"
        })
        setProducts(newdata)
    }

    var individual = JSON.parse(localStorage.getItem("IndividualProduct")) ||  []

    const  Addcard = (elem) => {
        // alert()

        individual.push(elem);
        localStorage.setItem('IndividualProduct', JSON.stringify(individual))
    }


    // const short  = () => {

    //     console.log(value)
    //     var filterdata = [...Products]
    //     if(value == "High"){
    //         filterdata.sort(function(a,b){
    //             return  b.price -a.price 
    //         })
    //         setProducts(filterdata)
    //     }
    //     else if(value == "Low"){
    //         filterdata.sort(function(a,b){
    //             return a.price - b.price
    //         })
    //         setProducts(filterdata)
    //     }
    // }

    return(
        <div>


            <button 
                onClick={category}>
                category
            </button>

      
            {/* <label>Short by Price</label>
            <select 
                id="Price"
                value={value}
                onChange={short}
            >
                <option value="High">High</option>
                <option value="Low">Low</option>
            </select> */}

            <button
                onClick={Increasing_order}>
                Increase by price
            </button>

            <button
                onClick={Decrese_order}>
                Decrease by price
            </button>

            {
                Products?.map((el , i) => {
                    return(
                        <div key={i}  className="Products_div">
                            <img  src={el.image} />

                            <div>
                                <p> Name :-  {el.title}</p>
                                <p>Category :- {el.category}</p>
                            </div>

                            <h1>Price :- {el.price}</h1>
                            <button 
                                onClick={ () => {
                                   Addcard(el) 
                                }}
                            >Add</button>
                        </div>
                    )
                })
            }


        </div>
    )
}