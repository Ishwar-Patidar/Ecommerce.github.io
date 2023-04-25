import React from "react";
import ProductDetail from "./ProductsDetail";
import Summary from "./Summary";

function Cart() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <ProductDetail />
                    </div>
                    <div className="col-lg-4">
                        <Summary />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Cart;