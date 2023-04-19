import React, { useContext, useEffect, useState } from 'react'
import Items from './AllItem'
import contextData from './ItemContext'

const AddItemTable = () => {
  const { addItem, cartItems } = useContext(contextData);
  const {addedItem, setAddedItem} = useState([])

    return (
        <>
            <div className='container'>
                <div className="row">
                    <table className='table table-bordered w-100 '>
                        <thead>
                            <tr>
                                <th style={{ width: "30px" }}> S No. </th>
                                <th> Name </th>
                                <th> Quantity </th>
                                <th> Price </th>
                                <th> Total Price </th>
                            </tr>
                        </thead>
                        <tbody>
                        {/* {cartItems && cartItems.map((e, index) => {
                                return <tr>

                                    <td className='w-10'>{index + 1}</td>
                                    <td>{e.name}</td>
                                    <td className='d-flex justify-content-between'>
                                        {/* <div className='d-flex justify-content-space-between'> */}
                                        {/* <button className='btn btn-danger'>-</button> */}
                                        {/* {e.Quantity} */}
                                        {/* <button className='btn btn-success align-item-end'>+</button> */}
                                        {/* </div> */}
                                    {/* </td> */}
                                    {/* <td>{e.price}</td> */}
                                    {/* <td>{e.price * e.Quantity}</td> */}
                                {/* </tr> */}
                            {/* })} */}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td></td>
                                <td></td>
                                <td colSpan={2} > Total Amount </td>
                                <td> {789623} </td>
                            </tr>
                        </tfoot>
                    </table>

                </div>
            </div>
            {/* {addItem} */}
        </>
    )
}

export default AddItemTable