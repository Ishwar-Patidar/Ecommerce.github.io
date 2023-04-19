import { useContext, useState } from "react"
import myContext from "./FreeContext"

export default function Consumer () {
  const name = useContext(myContext);

  return(
   <div>
     My name is {name}
   </div>
  )
}