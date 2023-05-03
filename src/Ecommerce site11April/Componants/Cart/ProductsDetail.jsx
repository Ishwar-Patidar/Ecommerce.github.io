import React, { useContext, useState } from "react";
import './ProductDetail.css';
import proContext from "../EcommerseContext/ApIContext/ProductContext";
import { NavLink } from "react-router-dom";

function ProductDetail() {

    const { cartItems, setCartItems, AddedCart } = useContext( proContext );
    function incrementItem(item) {
        AddedCart(item, item.quantity)
        cartItems.map((product) => {
            if (product.quantity < 1) {
                product.quantity = 0
            }
            if (product.id === item.id) {
                product.quantity += 1
            }
            else {
                setCartItems([...cartItems])
            }
        })
    }

    function decrementItem(item) {
        cartItems.map((product) => {
            if ( product.id === item.id ) {
                product.quantity -= 1
            }
            if ( product.quantity < 1 ) {
                product.quantity = 1
            }
            else {
                setCartItems([...cartItems])
            }
        })
    }

    function inputChangeHandler(product, elem) {
        const value = elem.target.value;
        let num = (value)
        if (isNumber ( num )) {
            return;
        }
        if (value < 1) {
            product.quantity = 1
            AddedCart(product, product.quantity)
            return;
        } else {
            product.quantity = value
            AddedCart(product, product.quantity)
        }
    }

    function isNumber(value) {
        if ( typeof ( value ) === Number ) {
            return value;
        } else {
        }}

    function removeAddedItem(e, item, index) {
        cartItems.splice(index, 1)
        setCartItems([...cartItems])
    }

    let totalAmount = 0;
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <h3> Cart </h3>
                </div>
                <div className="row">
                    <table className="table table-bordered  text-center text-align-center tableFont">
                        <thead>
                            <tr>
                                <th colSpan={2} className='products'> Products </th>
                                <th className='Color' >  Color </th>
                                <th className='Size' > Size </th>
                                <th className='Price' > Price </th>
                                <th className='tdWidth' > Quantity </th>
                                <th className='tdWidth' > Total </th>
                                <th className='deletebtn' ></th>
                            </tr>
                        </thead>
                        <tbody>

                            {cartItems && cartItems.map((item, index) => {
                                let Total = item.newPrice * item.quantity
                                totalAmount = Total + totalAmount;
                                return (<tr key={item.id} className=" align-middle"  >

                                    <td> <img className="img img-fluid rounded" src={item.image} alt="...Loading" height="80px" width="80px" /> </td>
                                    <td> <NavLink href={"#"} className="text-primary"> {item.cartTitle}  </NavLink></td>
                                    <td> red </td>
                                    <td> xl </td>
                                    <td> Rs{item.newPrice}</td>
                                    <td className="d-flex justify-content-center text-center pt-3">
                                        <button className="btn btn-danger pe-2" onClick={() => decrementItem(item)}> - </button>
                                        <input type="number" className=" qtyInput px-2 text-center" name={index} value={item.quantity} onChange={(e) => inputChangeHandler(item, e)} />
                                        <button className=" btn btn-success ps-2" onClick={() => incrementItem(item)} > + </button>
                                    </td>
                                    <td>Rs{Total.toFixed(2)}</td>
                                    <td>
                                        <button className="btn text-danger" onClick={(e) => removeAddedItem(e, item, index)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                                <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                                )
                            })}

                        </tbody>
                        <tfoot>
                            <tr>

                                <td colSpan={2}>Total Item : {cartItems.length} </td>
                                <td colSpan={4}>TotalAmount</td>
                                <td> Rs{totalAmount.toFixed(2)} </td>
                                <td></td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    )
}
export default ProductDetail;