import React from "react";

export const Addcart = () => {

    var currentUser = JSON.parse(localStorage.getItem('IndividualProduct'))

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
                                <button>-</button> 1 <button>+</button>
                            </div>
                            <h1>Price :- {el.price}</h1>
                           
                        </div>
                    )
                })
            }
        </div>
    )
}