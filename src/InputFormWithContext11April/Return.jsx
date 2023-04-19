

import React from "react";
import Form from "./Form";
import FormData from "./FormData";

function Return() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Form />
                    </div>
                    <div className="col-lg-6">
                        <FormData />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Return;