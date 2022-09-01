import React from "react";
import { useState } from "react";

export const Addcart = () => {

    

    const [count , setcount] = useState(1)
    var currentUser = JSON.parse(localStorage.getItem('IndividualProduct'))

    const Inc_Price = (el) => {

        console.log(el)

        if(el.id)
        setcount(count + 1)
    }

    return(
        <div>
            Addcart

            {
                currentUser?.map((el , i) => {
                    return(
                        <div key={i}  className="Products_div">
                            <img  src={el.image} />

                            <div>
                                <p> Name :-  {el.title}</p>
                                <p>Category :- {el.category}</p>
                            </div>

                            <div>
                                <button>-</button> {count} 
                                
                                <button 
                                    onClick={ () => {
                                        Inc_Price(el) 
                                    }}
                                >+</button>
                            </div>
                            <h1>Price :- {el.price}</h1>
                           
                        </div>
                    )
                })
            }
        </div>
    )
}