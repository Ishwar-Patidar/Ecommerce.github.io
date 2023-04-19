import React from "react";
import { Routes, Route } from "react-router-dom";
import Product from "./Componants/Product";
import Wishlist from "./Componants/Wishlist";
import ShipingInformation from "./Componants/ShipingInformation";
import Vendor from "./Componants/Vendor";
import TrackOrderPage from "./Componants/TrackOrderPage";
import CheckOutPage from "./Componants/CheackOutPage";
import Home from "./Componants/Home";
import Store from "./Componants/Store";
import Menubar from "./Componants/Menubar";
import Navbar from "./Componants/Navbar";
import Footer from "./Componants/Footer";


function Index() {
    return (
        <div className="">

                <Navbar />
                <Menubar />
                <Routes>

                    <Route index element={<Home />} />
                    <Route path="store" element={<Store />} />
                    <Route path="products" element={<Product />} />
                    <Route path="Wishlist" element={<Wishlist />} />
                    <Route path="shiping" element={<ShipingInformation />} />
                    <Route path="vendor" element={<Vendor />} />
                    <Route path="track" element={<TrackOrderPage />} />
                    <Route path="checkout" element={<CheckOutPage />} />
                    <Route path="*" element={<Home />} />

                </Routes>
                <Footer />

        </div>
    )
}
export default Index;