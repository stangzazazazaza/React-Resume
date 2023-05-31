import React from 'react'
import { Swiper, SwiperSlide }from "swiper/react";
import './Slider.css'

import "swiper/css";
import "swiper/css/scrollbar";


import { Scrollbar } from "swiper";


function Slilder({data}) {
  return (
    <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        {data.map((dataPortfolio)=>(
            <SwiperSlide key={dataPortfolio.title}>
                <img src={dataPortfolio.pic} alt="" />
            </SwiperSlide>
        ))}
      </Swiper>
  )
}

export default Slilder