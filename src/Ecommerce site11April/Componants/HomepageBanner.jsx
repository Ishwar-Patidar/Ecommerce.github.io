import React from "react";
import './HomePage.css'
function HomePageBanner() {
    return (
        <>
            <div className="container-fluid">
                <div className="row mt-5">
                    
                     <div className=" col-lg-12 border-radius position-relative">
                        <img className="img Homepagebanner border-radius position-relative" src="./images/EcommerseImages/Banner1.png" alt="MobileImg.jpg" />                                  
                           
                    </div>
                </div>
                <div className="row mt-5">
                    <div className=" position-relative col-lg-6 mt-3 border-radius">
                        <img className="img  img-fluid w-100 border-radius" src="./images/EcommerseImages/BannerImg.avif" alt="MobileImg.jpg" />
                        <span className="position-absolute leftBanner-title ">Get 10% Off on gift items</span>
                        <button className="leftbannerbtn btn btn-primary border rounded-pill position-absolute">Buy now </button>
                    </div>
                    <div className=" position-relative col-lg-6  mt-3 border-radius">
                        <img className="img img-fluid w-100 border-radius" src="./images/EcommerseImages/MobileImg.jpg" alt="MobileImg.jpg" />
                        <span className="position-absolute Banner-title1 text-end">MI 11 Pro </span>
                        <span className="position-absolute Banner-title2 text-end"> Best in the market</span>
                        <button className=" BannerRightbutton btn btn-warning border rounded-pill position-absolute">Buy now </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePageBanner;