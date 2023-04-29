import React, { useContext, useState } from "react";
import proContext from "../EcommerseContext/ApIContext/ProductContext";

function ProductDetail() {

    const { cartItems, setCartItems, AddedCart } = useContext(proContext);

    function incrementItem(item) {
        // AddedCart(item, item.quantity)
        cartItems.map((product) => {
            if (product.id === item.id) {
                product.quantity += 1
                console.log(typeof (product.quantity))
            }
            setCartItems([...cartItems])
        })
    }

    function decrementItem(item) {
        cartItems.map((product) => {
            if (product.id === item.id) {
                product.quantity -= 1
            }
            if (product.quantity < 0) {
                product.quantity = 1
            }
            else {
                setCartItems([...cartItems])
            }
        })
    }

    function inputChangeHandler(product, e) {
        let A = (Number(e.nativeEvent.data))
        console.log(typeof (A))
        if (isNumber(A)) {
            return;
        }
        if (e.nativeEvent.data < 0) {
            return;
        } else {
            product.quantity = Number(e.nativeEvent.data)
            AddedCart(product, product.quantity)
        }
    }

    function isNumber(value) {
        if (typeof (value) === Number) {
            return value;
        } else {
            console.log("string")
        }
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <h3> Cart </h3>
                </div>
                <div className="row">
                    <table className="table table-bordered  text-center text-align-center">
                        <thead>
                            <tr>
                                <th colSpan={2}> Products </th>
                                <th> Color </th>
                                <th> Size </th>
                                <th> Price </th>
                                <th> Quantity </th>
                                <th> Total </th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems && cartItems.map((item) => {
                                let Total = item.newPrice * item.quantity
                                return (<tr key={item.id} >

                                    <td> <img className="img img-fluid" src={item.image} alt="...Loading" height="50px" width="50px" /> </td>
                                    <td> <a href="#" className="text-primary"> {item.cartTitle}  </a></td>
                                    <td> red </td>
                                    <td> xl </td>
                                    <td> Rs{item.newPrice}</td>
                                    <td className="d-flex justify-content-between ">
                                        <button className="btn btn-danger" onClick={() => decrementItem(item)}>-</button>
                                        <input className="w-25" type="number" value={item.quantity} onChange={(e) => inputChangeHandler(item, e)} />
                                        <button className=" btn btn-success" onClick={() => incrementItem(item)} > + </button>
                                    </td>
                                    <td>Rs{Total}</td>
                                    <td><button className="btn text-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
                                    </svg></button></td>
                                </tr>
                                )
                            })}

                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={6}>Items SubTotal</td>
                                <td> Rs{ } </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    )
}
export default ProductDetail;