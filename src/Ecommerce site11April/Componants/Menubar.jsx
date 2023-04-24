import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import './Menubar.css'
import CategoryModal from "./CategoryModal";

function Menubar() {

  const [caretRight, setCaretRight] = useState("caretRight");
  const [caretDown, setCaretDown] = useState("caretDown")

  function categoryModalcaret() {
   if(caretRight === "caretRight"){   
     setCaretRight("caretRight1")
    }else(  
      setCaretRight("caretRight")
   )
  
   if(caretDown === "caretDown1"){   
    setCaretDown("caretDown");
   }else(  
    setCaretDown("caretDown1")
  )
  }  
return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid mb-3 pt-0">
          <div className="dropdown align-items-center">
            <a href="#" className=" categoryMenu dropdown-toggle navbar-brand" role="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" onClick={categoryModalcaret}>
              <span >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list MenuIcon " viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg>
              </span>
              Category

              <span className={caretRight}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </span>
              <span className={caretDown}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className = "bi bi-caret-down-fill" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              </span>
            </a>
            <div className="dropdown-menu pt-0 mt-0" aria-labelledby="dropdownMenuButton1">
              <div className="dropdown-item" style={{ width: "1000px" }}>
                <div className="row">
                  <div className="col-md-12">
                    <CategoryModal />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-6">
              <li className="nav-item ms-2 me-2 " data-nav-item="data-nav-item">
                <Link className="nav-link font-size text-dark" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item ms-2 me-2 " data-nav-item="data-nav-item">
                <Link className="nav-link font-size text-dark" to="/store">Stores</Link>
              </li>
              <li className="nav-item ms-2 me-2 " data-nav-item="data-nav-item">
                <Link className="nav-link font-size text-dark" to="/products">Products</Link>
              </li>
              <li className="nav-item ms-2 me-2 " data-nav-item="data-nav-item" >
                <Link className="nav-link font-size text-dark" to="/Wishlist">Wishlist</Link>
              </li>
              <li className="nav-item ms-2 me-2 " data-nav-item="data-nav-item" >
                <Link className="nav-link font-size text-dark" to="/shiping">Shiping Info</Link>
              </li>
              <li className="nav-item ms-2 me-2 " data-nav-item="data-nav-item" >
                <Link className="nav-link font-size text-dark" to="/vendor">Be a vendor</Link>
              </li>
              <li className="nav-item ms-2 me-2 " data-nav-item="data-nav-item" >
                <Link className="nav-link font-size text-dark" to="/track">track order</Link>
              </li>
              <li className="nav-item ms-2 me-2 " data-nav-item="data-nav-item" >
                <Link className="nav-link font-size text-dark" to="/checkout">checkout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
}
export default Menubar;