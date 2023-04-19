import React from "react";
const Index = () => {
    // function foo (i){
//   if(i < 0){
//     return;
//   }
//   console.log(i);
//   foo(i-1);
//   console.log(i);
// }
// foo(3);
//.............
function map(x){
    if(x>=10){
      return;
    }
    map(x+1);
    // console.log(x);
  }
  map(5)
  //............Nested Function Example1.............
  
  function mySquare(a, b){
    function square(x){
      return x * x; 
    }
    // return console.log( square(a) + square(b));
  }
  mySquare(2, 3);
  //..............Nested Function Examplel2............
  
  function outside(x){
    function inside(y){
  // return  console.log(x+y);
    }
    return inside;
  }
  // const fnInside = outside(5);
  // const result = fnInside(10);
  outside(10)(20);
  
  //.............Multiply-nested functions.................
  function A(x){
    function B(y){
      function C(z){
        return console.log(x+y+z);
      }
      C(5);
    }
    B(6);
  }
  A(9);
  
  //................Name conflicts...........
  function  outer(){
    const x = 10;
    function inner(x){
      return  console.log(x + 5);
    } 
    return inner;
  }
  outer(10)(2);
  
  //. ..................... Clousure..................
  const Pet = function (name){
    function PetName(){
      return console.log(name);
    }
    return PetName;
  }
  const npet = Pet("gita");
  npet();
  
  ///...............Function Default Parameters,.............
  function multiply(a, b){
    b = typeof(b)!== "undefined" ? b : 1;
    return  console.log( a*b );
  }
  multiply(5);
  
  // ................Function rest parameter................
  
  function Multiply(multiplier, ...arg){
    return arg.map((e)=>multiplier * e)
   } 
  const Arr = Multiply(2, 10, 20, 30);
  console.log(Arr);
  
  //.............Arrow functions..............
  const Al = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
  const Func = Al.map((e)=> e.length);
  console.log(Func);
  
  // Self invok function
  (function(){
    console.log("Hello Ishwar")
  })()
  
  
   return(
    <>
    <p>Hello</p>
    </>
   )
}
export default Index;