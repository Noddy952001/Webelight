import React from "react";
import { useState } from "react";

export const Addcart = () => {

    const [currentUser , setcurrentUser] = useState(JSON.parse(localStorage.getItem('IndividualProduct')));


    
    

    const Inc_Quantity = (el) => {
        let data =currentUser;
        for(var i=0; i<data.length; i++){
            if(data[i].id === el.id){
                data[i].count += 1; 
            }
        }

        setcurrentUser((prevState)=>{
            localStorage.setItem('IndividualProduct', JSON.stringify(data))
            return [...data];
        })
    }

    const Dec_Quantity = (el) => {

        let data =currentUser;
        for(var i=0; i<data.length; i++){
            if(data[i].id === el.id){
                data[i].count -= 1; 
            }
        }

        setcurrentUser((prevState)=>{
            localStorage.setItem('IndividualProduct', JSON.stringify(data))
            return [...data];
        })
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
                                <button
                                    onClick={ () => {
                                        Dec_Quantity(el) 
                                    }}
                                >-</button> 
                                {el.count} 
                                
                                <button type="button" 
                                    onClick={ () => 
                                        Inc_Quantity(el) 
                                    }
                                >+</button>
                            </div>
                            <h1>Price :- {el.price}</h1>
                           
                        </div>
                    )
                })
            }

            <div>
                <h1>Subtotal </h1>
            </div>

        </div>
    )
}