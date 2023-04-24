


import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { BestElectronic } from './Data';
import './TopElectronicSwiper.css'
import 'swiper/css';
import 'swiper/css/virtual';
// import { dataContext } from './EcommerseContext/EcContext';
import { useContext } from 'react';
import proContext from './EcommerseContext/ApIContext/ProductContext';
import { Link } from 'react-router-dom';

export default function TopElectronicSwiper() {

    const { productList, setSingalProduct, data } = useContext(proContext);

    if (data.length <= 0) {
        var result = productList
    } else {
        var result = productList.filter(e => e.newPrice == data);
    }

    // .................for send object................
    // const clickHandler = (e, index)=>{
    //     return setSingalProduct([e]);
    // }

    // ...............for send id only................
    const clickHandler = (id, index) => {
        return setSingalProduct(id);
    }

    return (
        <div className="container-fluid">
            <Swiper className='swiper' modules={[Virtual]} spaceBetween={10} slidesPerView={6} virtual>
                <div className="row">
                    {result.map((e, index) => (
                        <SwiperSlide key={e.id} virtualIndex={index}>
                            {/* <Link className="d-flex justify-content-center h-100" to="/SingalPageProduct" onClick={()=>clickHandler(e,index)}> */}
                            <Link className="d-flex justify-content-center h-100" to="/SingalPageProduct" onClick={() => clickHandler(e.id, index)}>
                                <div className="card-group">
                                    <div className="card " style={{ width: "12rem" }}>
                                        <div className='card-Top'>
                                            <img src={e.image} className="position-relative  productImg  img-fluid card-img-top" alt={e.img} />
                                            <button className="productCrdBtn  border border-primary rounded-circle">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-heart-fill filledIcon" viewBox="0 0 16 16">
                                                    <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                                </svg>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-heart unFilledIcon d-none-hover" viewBox="0 0 16 16">
                                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                                </svg>
                                            </button>

                                            {(e.verified) && <span class="badge text-bg-success verifiedBadge text-center align-item-center" >
                                                {e.verified}
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                                                    <path d=" M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                                </svg>
                                            </span>}
                                        </div>

                                        <div className="card-body">
                                            <h5 className="title card-title">{e.itemName}</h5>
                                            <span className="rating">

                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>

                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star-fill" viewBox="0 0 16 16">
                                                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                                                </svg>

                                            </span>
                                            <span className="Allrating"> {e.rating} </span>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <span className=" oldPrice card-text text-decoration-line-through">${e.oldPrice}</span>
                                                <span className=" newPrice  card-text lh-sm">${e.newPrice}</span>
                                            </div>
                                            <p className='verifiedItemDescription'>{e.dealTime} </p>
                                            <p className="Description  card-text">{(e.description).slice(0, 76)}</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </div>
    );
};