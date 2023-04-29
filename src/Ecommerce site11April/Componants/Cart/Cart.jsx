import React from "react";
import ProductDetail from "./ProductsDetail";
import Summary from "./Summary";

function Cart() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <ProductDetail />
                    </div>
                   
                </div>
            </div>
        </>
    )
}
export default Cart;