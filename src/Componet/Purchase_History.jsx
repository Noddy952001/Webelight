import React from "react";
import { useState } from "react";

export const Purchase_History = () => {

    const [Payment_data , setPayment_data] = useState(JSON.parse(localStorage.getItem('Payment')));
    // const [data , setdata] = useState()

    
    console.log("Payment_data" , Payment_data)





    return(
        <div className="container">
            <h1>PURCHASE HISTORY</h1>

            {
                Payment_data.map((order) => {


                    return(
                                
                        <div className="row mb-5  border border-dark rounded" >
                            {
                                order.items.map((item) => {
                                    return(
                                        <>
                                            <div className="col-sm-3"><img style={{width:'100px'}} src={item.image} alt={item.title}></img></div>
                                            <div className="col-sm-3">{item.title}</div>
                                            <div className="col-sm-3">{item.count}</div>
                                            <div className="col-sm-3">{item.count*item.price}</div>
                                            
                                        </>
                                    )
                                })
                            }
                            <div style={{marginLeft:"400px"}}>
                                <h1>Total : {order.total}</h1>
                                <h5>Date : {order.date}</h5>
                            </div>
                        </div>
                    )
                })
            }
          

            

            
        </div>
    )
}




