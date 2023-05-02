import React from "react";
import { NavLink } from "react-router-dom";
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
                            <NavLink className="text-primary" href={"#"}> Explor More </NavLink> &nbsp;
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