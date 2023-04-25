import React from "react";

function ProductDetail() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <h3> Cart </h3>
                </div>
                <div className="row">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th colSpan={ 2 }>Products</th>
                                <th>Color</th>
                                <th>Size</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td> Image </td>
                                <td> Link</td>
                                <td> red </td>
                                <td> xl </td>
                                <td> Rs20,000</td>
                                <td>2</td>
                                <td>Rs40,000</td>
                                <td>del</td>
                            </tr>
                            <tr>
                                <td> Image </td>
                                <td> Link</td>
                                <td> red </td>
                                <td> xl </td>
                                <td> Rs20,000</td>
                                <td>2</td>
                                <td>Rs40,000</td>
                                <td>del</td>
                            </tr>
                            <tr>
                                <td> Image </td>
                                <td> Link</td>
                                <td> red </td>
                                <td> xl </td>
                                <td> Rs20,000</td>
                                <td>2</td>
                                <td>Rs40,000</td>
                                <td>del</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={ 6 }>Items SubTotal</td>
                                <td>Rs60,000</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    )
}
export default ProductDetail;