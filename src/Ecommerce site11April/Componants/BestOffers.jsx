import React from "react";
import BestOffersSwiper from "./BestOffersSwiper";

function BestProducts() {
    return (
        <>
            <div className="container-fluid mt-4 ">
                <div className="row">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <h3 className="productHeading fw-bolder">Best Offers</h3>
                        </div>
                        <div className="d-flex fw-bolder ">
                            <a className="text-primary" href="#">Explore More </a> &nbsp;
                            <span className="text-primary"> &#62; </span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <BestOffersSwiper />
                </div>
            </div>
        </>
    )
}
export default BestProducts;