import React from 'react'
import AddItemTable from './AddItemTable';
import Item from './Item'
import './Index.css'
const ItemList = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 CartPage">
                        <Item />
                    </div>
                    <div className="col-md-4">
                        < AddItemTable />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemList;