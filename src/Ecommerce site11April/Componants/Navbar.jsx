import React, { useContext } from "react";
import { dataContext } from "./EcommerseContext/EcContext";
import './Navbar.css'

function Navbar() {


    const { data, setData } = useContext(dataContext);
    function searchHandler(event) {
        const value = event.target.value;
        setData(value);
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light  pb-0">
                <div className="container-fluid  ">
                    <div className="row  w-100 d-flex justify-content-between align-items-center">
                        <div className="col-md-2 col-sm-6 col-xs-6 order-lg-1">
                            <div className="d-flex">
                                <div style={{ width: "25px" }} className="m-2 align-center">
                                    <img className="img img-fluid me-2 " src=" ./images/EcommerseImages/logo.png " alt="Logo" />
                                </div>
                                <a className="navbar-brand fs-4 fw-bolder text-black-50" href="#"> phoenix </a>
                            </div>
                        </div>

                        <div className="col-md-2 col-sm-6 col-xs-6 d-inline-flex  order-lg-3 ">
                            <div className="collapse navbar-collapse d-inline-flex " id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0   flex-row">
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className=" bi bi-brightness-high text-dark SunIcon  p-1" viewBox="0 0 16 16">
                                                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                                            </svg>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link position-relative" href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className=" bi bi-cart text-dark" viewBox="0 0 16 16">
                                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                            </svg>
                                            <span className="position-absolute top-2 start-80 translate-middle badge rounded-pill bg-primary" style={{ fontSize: "11px" }}>
                                                8
                                                <span className="visually-hidden">unread messages</span>
                                            </span>
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link position-relative " href="#">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className=" bi bi-bell text-dark " viewBox="0 0 16 16">
                                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                            </svg>
                                            <span className=" position-absolute top-2 start-80 translate-middle p-2 bg-danger border border-light rounded-circle">
                                                <span className=" visually-hidden"> New alerts </span>
                                            </span>
                                        </a>
                                    </li>

                                    <li className="nav-item ">
                                        <a className="nav-link " href="#">
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className=" bi bi-person" viewBox="0 0 16 16">
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                            </svg> */}

                                            <span class="material-symbols-outlined text-dark">
                                                person
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 order-lg-2">
                            <div className="row justify-content-center">
                                <form>
                                    <input type="search" className="form-control border rounded-pill ps-4 pe-2 searchBar" id="search" placeholder="Search" value={data} onChange={searchHandler} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;
