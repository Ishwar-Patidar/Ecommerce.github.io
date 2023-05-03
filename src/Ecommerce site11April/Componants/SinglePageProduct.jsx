import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import proContext from "./EcommerseContext/ApIContext/ProductContext";
import './SinglePageProduct.css';

function SinglePageProduct() {

    const { productList, AddedCart, cartItems, item, setItem, RemovedCart, AddToWishList } = useContext(proContext); //get value from context

    const { id } = useParams();
    const thisProduct = productList.find((e) => e.id == id);

    //............Product Value Increment and Decrement for buy ..............


    const changeInputHandler = ((e) => {
        const value = e.target.value;
        setItem(value);
    })

   function addItemToCart(thisProduct){
        AddedCart(thisProduct, 1)
    }

    function addItemWishList(thisProduct) {
        AddToWishList(thisProduct)
    }

    //=================================================
    const date = new Date();
    date.setHours(23);
    date.setMinutes(59);
    date.setSeconds(59);

    const [hour, setHour] = useState(date.getHours());
    const [minute, setMinute] = useState(date.getMinutes());
    const [second, setSecond] = useState(date.getSeconds());



    useEffect(() => {
        setTimeout(() => {
            setSecond((second) => second - 1);
        }, [1000]);
    }, [second]);
    if (second == 0) {
        setSecond(59);
        setMinute(minute - 1);
    }
    if (minute == 0) {
        setMinute(59);
        setHour(hour - 1);
    }
    if (hour == 0) {
        clearTimeout(setTimeout);
    }



    //=================================================



    return (
        <>
            <div className="container-fluid mb-5">
                <div className="row my-3">
                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-md-3">

                                {/* ......for Indicator Image........ */}
                                <div className="carousel-indicators indicatorImg">
                                    <button className=" border rounded active" type="button" data-bs-target="#Indicators" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1">
                                        <img src={thisProduct.image} className="img-fluid" alt="Loading..." />
                                    </button>
                                    <button className=" border rounded" type="button" data-bs-target="#Indicators" data-bs-slide-to="1" aria-label="Slide 2">
                                        <img src={thisProduct.image} className="img-fluid" alt="Loading..." />
                                    </button>
                                    <button className=" border rounded" type="button" data-bs-target="#Indicators" data-bs-slide-to="2" aria-label="Slide 3">
                                        <img src={thisProduct.image} className="img-fluid" alt="Loading..." />
                                    </button>
                                </div>
                            </div>

                            {/* ......Image display in Slide...... */}
                            <div className="col-md-9 p-3">
                                <div id="Indicators" className="carousel slide" data-bs-ride="true">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src={thisProduct.image} className="d-block w-100" alt="Loading..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={thisProduct.image} className="d-block w-100" alt="Loading..." />
                                        </div>
                                        <div className="carousel-item">
                                            <img src={thisProduct.image} className="d-block w-100" alt="Loading..." />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ........Button for Add to item in cart and like......... */}
                            <div className="d-flex mt-3">
                                <button className="btn btn-outline-warning border-warning w-100 border rounded-pill mx-2 p-2" onClick={() => addItemWishList(thisProduct)}> Add to wish list </button>
                                <button className="btn btn-warning border-warning w-100 border rounded-pill text-white mx-2 p-2" onClick={() => addItemToCart(thisProduct)}> Add to card </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="d-flex align-items-center mb-2">

                            {/* ......star icon for Rating ....... */}
                            <span className="rating">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                </svg>
                            </span> &nbsp;

                            <span className="ratedPeople">{thisProduct.rating}</span>
                        </div>

                        <div>
                            <h4 className="fw-bolder"> {thisProduct.itemName} </h4>
                        </div>

                        <div className="mt-1">
                            <span className="bestSller border rounded-pill"> #1Best seller </span>
                            <NavLink href={"#"} className="text-primary ps-3 pe-3 pt-1 pb-1"> in Phoenix sell analytics 2021</NavLink>
                        </div>

                        <div>
                            <span className="SingalPagenewPrice me-3"> Rs{thisProduct.newPrice} </span>
                            <span className="SingalPageOldPrice me-3"> <del> Rs{thisProduct.oldPrice}</del> </span>
                            <span className="discount me-3"> {thisProduct.discount} Off </span><br />
                            <span className="stockAvailable text-success" > {thisProduct.available} </span>
                        </div>

                        <div>
                            <p> <strong> Do you want it on Saturday, July 29th? </strong>  Choose  <strong> Saturday Delivery  </strong>at checkout if you want your order delivered within 12 hours 43 minutes, <strong> <NavLink href="#" className="text-primary"> Details. </NavLink>   Gift wrapping is available.</strong></p>
                            <p className="text-danger"> <strong>Special offer ends in <span className="text-primary"> {(hour + ":" + minute + ":" + second)} </span> hours</strong></p>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <span className="my-2"> Size : </span> <br />
                                <select className="Sizebox border rounded " name="" id="">
                                    <option value="0">22</option>
                                    <option value="1">24</option>
                                    <option value="2">32</option>
                                </select>
                                <span>
                                    <NavLink href={"#"} className="text-primary ChartSize mx-2"> Size chart </NavLink>
                                </span>
                            </div>

                            <div className="col-md-6">
                                <span className="my-2"> Quantity: </span> <br />
                                <div className="d-flex my-3">
                                    <button className="btn btn-outline-secondary px-3" onClick={() => RemovedCart()}> - </button>
                                    <input className="form-control text-center w-25" type="text" placeholder="2" value={item} onChange={changeInputHandler} />
                                    <button className="btn btn-outline-secondary px-3" > + </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SinglePageProduct;