import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

function Banner() {
return (
    <div className="relative w-full">
        <Swiper spaceBetween={50} slidesPerView={1} loop={true} 
        speed={1000}
        autoplay={{delay:4000, disableOnInteraction:false}} 
        className="w-full xl:h-96 bg-dry lg:h-64 h-48" k
        >
        {/*  Movies.slice(0,6).map((movie, index)) =>(
                <SwiperSlide key={index} className="relative rounded overflow-hidden">

                </SwiperSlide>
            )*/}
        </Swiper>
        
    
    </div>
)
}

export default Banner
