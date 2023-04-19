


import { Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BestElectronic } from './Data';
import './TopElectronicSwiper.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/virtual';
import { dataContext } from './EcommerseContext/EcContext';
import { useContext } from 'react';

export default function TopElectronicSwiper() {

    const { data, setData } = useContext(dataContext);

    if (data.length <= 0) {
        var result = BestElectronic
    } else {
        var result = BestElectronic.filter(e => e.newPrice == data);
    }


    return (
        <div className="container-fluid">
            <Swiper className='swiper' modules={[Virtual]} spaceBetween={10} slidesPerView={6} virtual>
                <div className="row">
                    {result.map((e, index) => (
                        <SwiperSlide key={e.id} virtualIndex={index}>

                            <a className="d-flex justify-content-center h-100" href="#" >
                                <div className="card-group">
                                    <div className="card " style={{ width: "12rem" }}>
                                        <div className='card-Top'>
                                            <img src={e.img} className="position-relative  productImg  img-fluid card-img-top" alt={e.img} />
                                            <button className="productCrdBtn  border border-primary rounded-circle">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-heart-fill filledIcon" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
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
                                            <h5 className="title card-title">{e.cartTitle}</h5>
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
                                            <p className="Description  card-text">{e.description}</p>

                                        </div>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </div>
    );
};