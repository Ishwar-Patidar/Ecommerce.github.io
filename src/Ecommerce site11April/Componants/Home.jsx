import React from "react";
import AddMember from "./AddMember";
import BestProducts from "./BestOffers";
import CustmizeGearIcon from "./CustmizeGearIcon";
import TopDealcard from "./TopDealCard";
import TopElectronic from "./TopElectronic";


function Home(){

    return(
        <> 
     
       {/* <IconMenu/> */}
       {/* <HomePageBanner/> */}
       <TopDealcard/>
       <TopElectronic/>
       <BestProducts/>
       <AddMember/>
       {/* <CustmizeGearIcon/> */}
        </>
    )
}
export default Home;