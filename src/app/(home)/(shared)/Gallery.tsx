
'use client';
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import gallerySlideData from '@/data/gallery-slide';

function Gallery() {
  // Define an array of picture links

  return (
    <div id='Gallery'className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold sm:text-4xl mt-8 mb-4">Our Gallery</h2>
        <p className="text-gray-500 sm:text-xl dark:text-gray-400 mb-8">Get a glimpse of the beauty that awaits you. Browse through our villa gallery and envision your perfect escape.</p>
      </div>
      <div className="parent-element text-center">
        <div className="w-full mx-auto border border-gray-400 rounded-2xl overflow-hidden shadow-lg"> 
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
      {
        gallerySlideData.map((slide,idx) => (
          <SwiperSlide key={idx}>
            <div
              style={
                {
                  backgroundImage: `linear-gradient(#00000090 100%, transparent),url('${slide.img}')`
                }
              }
              className={ `
                w-full
                h-screen
                bg-no-repeat
                bg-cover
                bg-center`
                }>
            </div>
          </SwiperSlide>
        ))
      }
        </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
