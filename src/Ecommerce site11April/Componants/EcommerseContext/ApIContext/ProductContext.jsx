import React, { createContext, useState } from "react";
import dataList from "./ContextArray";

const proContext = createContext();

export function ProductContext(props) {

  const [productList, setProductList] = useState(dataList);
  const [singalProduct, setSingalProduct] = useState({});
  const [data, setData] = useState("");
  const [cartProduct, setCartProducts] = useState([]);
  const [cartProductMap, setCartproductMap] = useState(new Map());
  const [itemWishList, setItemWishList] = useState([]);
  const [wishListMap, setWishListMap] = useState(new Map());
  const [cartItems, setCartItems] = useState([]);
  const [item, setItem] = useState([]);

  let myProduct = {};
  let myValue = {};
  let myWishList = {};

  function AddedCart(Product, qty) {

    if (cartProductMap[Product.id]) {
      myProduct = cartProductMap[Product.id];
      myValue = myProduct.quantity += 1
    } else {
      myProduct = Product
      myProduct["quantity"] = qty
      cartItems.push(myProduct)
    }
    cartProductMap[Product.id] = myProduct;
     setCartItems([...cartItems])
  }


  function AddToWishList(Product) {
    if (wishListMap[Product.id]) {
      myWishList = wishListMap[Product.id];
    } else {
      myWishList = Product
      itemWishList.push(myWishList)
    }
    wishListMap[Product.id] = myWishList;
    setItemWishList([...itemWishList])
  }

  return (
    <proContext.Provider value={{ productList,
                                  setProductList,
                                  singalProduct,
                                  setSingalProduct,
                                  data,
                                  setData,
                                  cartProduct,
                                  setCartProducts,
                                  AddedCart,
                                  cartItems,
                                  setCartItems,
                                  item,
                                  setItem,
                                  AddToWishList}}>
      {props.children}
    </proContext.Provider>
  )
};

export default proContext;
