import React from "react";
import { useForm } from "react-hook-form";
import './AddUser.css';

function AddUser() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <div className="container-fluid mt-2 mb-5 ">
                <div className="row d-flex text-center justify-content-center Profile mb-5">
                    <div className="signUpLogo">
                        <img className="img-fluid" src="/images/EcommerseImages/logo.png" alt="...Profile" />
                    </div>
                    <h5 > Sign Up </h5>
                    <span > Create your account  </span>
                </div>
                <div className="row d-flex justify-content-center">

                    <div className="col-md-5">
                        <form action="" className="signUpForm" onSubmit={handleSubmit(onSubmit)}>

                            <label htmlFor="" className="w-100 mb-3 px-1"> Name
                                <input className="form-control " type="text" placeholder="Name" {...register("firstName")} />
                            </label> <br />

                            <label htmlFor="" className="w-100 mb-3 px-1"> Email
                                <input className="form-control " type="email" placeholder="Email" {...register("email", { required: true })} />
                                {errors.email && <span className="text-danger"> This field is required </span>}
                            </label> <br />

                            <label htmlFor="" className="w-50 mb-3 px-1"> Password
                                <input className="form-control" type="password" placeholder="Password" {...register("password", { required: true })} />
                                {errors.password && <span className="text-danger"> This field is required </span>}
                            </label>

                            <label htmlFor="" className="w-50 mb-3 px-1"> Confirm Password
                                <input className="form-control" type="password" placeholder="Confirm Password" {...register("confirmPassword", { required: true })} />
                                {errors.confirmPassword && <span className="text-danger"> confirm Your Password </span>}
                            </label>

                            <span className="term_condition">
                                <input type="checkbox" className="checkbox" required/> I accept the <a className="text-primary" href="#">terms</a> and <a className="text-primary" href="#">privacy policy</a>
                            </span> <br />

                            <button className="btn btn-primary mt-4 w-100" type="submit"> Sign Up </button> <br />

                            <div className="text-center mt-3" ><a className="text-primary fs-6 fw-bolder " href="#"> Sign in to an existing account </a></div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default AddUser;