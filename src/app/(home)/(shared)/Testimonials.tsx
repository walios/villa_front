"use client";
import React, { useEffect, useState } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';
import axios from 'axios';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import './styles.css';
import { Rating } from 'flowbite-react';

interface Review {
  review: string;
  rating: number;
  review_from: string;
  user_name: string;
}
function Testimonials() {
  const [reviewData, setReviewData] = useState<Review[]>([]);
  useEffect(() => {
    axios.get('http://localhost:8080/reservation/get_reviews')
      .then(response => setReviewData(response.data))
      .catch(error => console.error(error));
  }, []);




  return (
  <>
    <div id='Gallery'className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="pb-4 max-w-7xl items-end justify-between sm:flex sm:pe-6 lg:pe-8">
        <h2 className="max-w-xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Read trusted reviews from our customers
        </h2>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {reviewData.map((review, index) => (
          <SwiperSlide key={index}>

            <article className="rounded-xl w-full min-h-full bg-white ring-1 ring-brown shadow-xl transition hover:border-brown/10 hover:shadow-brown">
                <div className="flex items-center bg-brown p-4 rounded-xl">
                  <p className="text-xl text-gray-700 font-bold flex-1 text-center">{review.user_name}</p>
                  <p className="text-bg text-brown-dark ">{review.review_from}</p>
                </div>
                <p className="p-4 text-gray-700 font-bold">{review.review}</p>
                <div className='flex items-center px-4 pb-4'>
                  <p className="text-xl text-gray-700 font-bold">{review.rating}</p>
                  <Rating>
                  {Array.from({ length: review.rating }, (_, i) => (
                    <Rating.Star key={i} />
                  ))}
                </Rating>
                </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
</>
  );
}

export default Testimonials;
