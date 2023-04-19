import React from "react";

const CateItem = [
    { id: "1", title: "Collectibles & Art", item1: "Collectibles", Item2: "Antiques", item3: "Sports memorabilia", Item4: "Art", },
    { id: "2", title: "Home&Gardan", item1: "Collectibles", Item2: "Antiques", item3: "Sports memorabilia", Item4: "Art", },
    { id: "3", title: "Electronics", item1: "Collectibles", Item2: "Antiques", item3: "Sports memorabilia", Item4: "Art", },
    { id: "4", title: "AutoParts & Acceseries", item1: "Collectibles", Item2: "Antiques", item3: "Sports memorabilia", Item4: "Art", },
    { id: "5", title: "Toys and Hobbies", item1: "Collectibles", Item2: "Antiques", item3: "Sports memorabilia", Item4: "Art", },
    { id: "6", title: "Fashion", item1: "Collectibles", Item2: "Antiques", item3: "Sports memorabilia", Item4: "Art", },
    { id: "7", title: "Musical Instrument & Gear", item1: "Collectibles", Item2: "Antiques", item3: "Sports memorabilia", Item4: "Art", },
    { id: "8", title: "Other Categories", item1: "Collectibles", Item2: "Antiques", item3: "Sports memorabilia", Item4: "Art", },
    { id: "9", title: "Sporting Goods", item1: "Collectibles", Item2: "Antiques", item3: "Sports memorabilia", Item4: "Art", },
]

function CategoryModal() {

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    {
                        CateItem.map((event) => {
                            return <div className = " col-md-4 mt-2 " key = { event.id } >
                                <div className = "  card border-0 " style = {{ width: "18rem" }}>
                                    <div className = " card-body d-flex flex-column " >
                                        <ul className = " list-unstyled ">
                                            <li> <h5 className="card-title">{event.title}</h5></li>
                                            <li> <a href="#" className=" text-dark  card-link text-decoration-none hover-bg-100 px-1 py-1 " >{event.Item2}</a></li>
                                            <li> <a href="#" className=" text-dark  card-link text-decoration-none hover-bg-100 px-1 py-1 " >{event.item1}</a></li>
                                            <li> <a href="#" className=" text-dark  card-link text-decoration-none hover-bg-100 px-1 py-1 " >{event.item3}</a></li>
                                            <li> <a href="#" className=" text-dark  card-link text-decoration-none hover-bg-100 px-1 py-1 " >{event.Item4}</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default CategoryModal;