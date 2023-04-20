import React from "react";
import AppSwiper from "./Swiper/Swiper";

function TopDealcard() {
    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <div className="">
                        <div className="d-flex justify-content-between">
                            <div className="d-flex">
                                <span className="p-1" style={{ color: "orange" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
                                        <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                                    </svg>
                                </span>
                                <h3 className="productHeading fw-bolder"> Top Deals Today </h3>
                                <span className="p-1" style={{ color: "orange" }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
                                        <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z" />
                                    </svg>
                                </span>
                            </div>
                            <div className="d-flex fw-bolder">
                                <a className="text-primary" href="#"> Explor More </a> &nbsp;
                                <span className="text-primary"> &#62; </span>
                            </div>
                        </div>
                        <AppSwiper />
                    </div>
                    {/* <div className="col-lg-3 d-flex justify-content-center">
                        <img className="Offer-Ads img img-fluid" src="/images/EcommerseImages/7.png" alt="Offer Big sale" />
                    </div> */}
                </div>
            </div>
        </>
    )
}
export default TopDealcard;