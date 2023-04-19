import React from "react";
import TopElectronicSwiper from "./TopElectronicSwiper";

function TopElectronic() {
    return (
        <>
            <div className="container-fluid mt-4">
                <div className="row">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <h3 className="productHeading fw-bolder">Top Electronics</h3>
                        </div>
                        <div className="d-flex fw-bolder">
                            <a href="#"> Explor More </a> &nbsp;
                            <span className="text-primary"> &#62; </span>
                        </div>
                    </div>
                </div>

                <div className="row">
                <TopElectronicSwiper />
                </div>
            </div>
        </>
    )
}
export default TopElectronic;