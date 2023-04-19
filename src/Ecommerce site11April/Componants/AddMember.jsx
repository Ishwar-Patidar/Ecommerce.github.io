import React from "react";
import './AddMember.css'
function AddMember() {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-5 d-flex justify-content-center ">
                        <div className="image lh-6" style={{ height: "300px", width: "300px" }} >
                            <img className="img img-fluid" src="https://prium.github.io/phoenix/v1.11.0/assets/img/spot-illustrations/light_30.png" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-7 member ">
                        <h3 className="">
                            <span className="text-info"> Want to have the </span>
                            <span className="fw-bolder">ultimate customer experience? </span>
                        </h3>
                        <br />
                        <span className=" mb-4 LineHeight"> Become a <span className="text-warning"> member </span> today! </span><br />
                        <button className="btn btn-primary signUpBtn mt-4 "> Sign up &#62; </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddMember;