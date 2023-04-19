import React, { useContext } from 'react'
import { useState } from 'react';
import Items from './AllItem';
import contextData from './ItemContext';

const Item = () => {
    const  {addItem, setAddItem, addProduct}  = useContext(contextData);
    const [cartItems, setCartItems] = useState([]);
    const [product, setProduct] = useState(Items);

    const addToCart = (e, index) => {
        addProduct(e)
    }
    
    return (
        <>
            <div className="container-fluid">
                <div className="row  ">
                    <div className="col-md-12 ">
                        <div className="row d-flex justify-content-center">
                            {
                                product && product.map((e, index) => {
                                    return <div key={index} className="col-md-6 mt-3 pt-2 pb-2  d-flex justify-content-center">
                                        <div className="card" style={{ width: "40rem" }}>
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="card-body">
                                                        <h2 className="card-title">{e.name}</h2>
                                                        {/* <p className="card-text"> Quantity : {e.Quantity}</p> */}
                                                        <p className="card-text"> Price : {e.price}</p>
                                                        <p className="card-text"> Desciption : {e.Description} </p>
                                                        <button className='btn btn-info' onClick={() => addToCart(e,index)}> Add </button>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <img src={e.Image} className=" img img-fluid card-img-bottom" alt={e.name} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item;