"use client";
import PrimaryButton from '@/components/Button/Primary-Button';
import React from 'react'
import { useState } from "react";
import 'react-icons/rx'

const servicesData = [
  {
    title: "Entire Villa",
    description:
      "Enjoy complete privacy and space with exclusive access to the entire villa during your stay.",
    imageSrc: "https://i.postimg.cc/W3QDdBT3/villa.png",
  },
  {
    title: "Private Pool",
    description:
      "Relax in your own secluded paradise with a private pool, perfect for a refreshing dip.",
    imageSrc: "https://i.postimg.cc/htr72Zby/swimming-pool-2.png",
  },
  {
    title: "Air Conditioning",
    description:
      "Stay cool and comfortable with modern air conditioning throughout the villa.",
    imageSrc: "https://i.postimg.cc/zvgJ43mD/air-conditioner-1.png",
  },
  {
    title: "2 Living Rooms",
    description:
      "Plenty of room to lounge and entertain with two spacious living areas.",
    imageSrc: "https://i.postimg.cc/DwFXd3s4/interior-design-1.png",
  },
  {
    title: "6 Bathrooms",
    description:
      "Convenience and comfort abound with six well-appointed bathrooms for you and your guests.",
    imageSrc: "https://i.postimg.cc/VNZ08ShX/underarm-1.png",
  },
  {
    title: "6 Bedrooms",
    description:
      "Rest peacefully in one of the six cozy bedrooms, each designed for a tranquil night's sleep.",
    imageSrc: "https://i.postimg.cc/w3Y6zHHX/bedroom-1.png",
  },
  {
    title: "Free Wifi",
    description:
      "Stay connected and share your memorable moments with complimentary high-speed Wi-Fi.",
    imageSrc: "https://i.postimg.cc/05MD9fPj/free-wifi-1.png",
  },
  {
    title: "Garden",
    description:
      "Surround yourself with lush greenery in the villa's beautiful garden oasis.",
    imageSrc: "https://i.postimg.cc/3wx0VjtK/park-2.png",
  },
  {
    title: "Free Parking",
    description:
      "Hassle-free travel with complimentary on-site parking available for your convenience.",
    imageSrc: "https://i.postimg.cc/dtGCyV7K/parking-area.png",
  },
];
function Services() {
  const [services, setServices] = useState(servicesData);
  
  return (
    <section className="bg-white text-gray-900">
    <div id='Services' className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      <div className="mx-auto max-w-lg text-center">
        <h2 className="text-3xl font-bold sm:text-4xl mt-8 mb-4">Our Services</h2>

        <p className="text-gray-500 sm:text-xl dark:text-gray-400 mb-8">
        Designed with your comfort in mind, our villa offers an array of premium services for your perfect getaway.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <a
          key={index}
          href={`/services/${service.title.toLowerCase().replace(" ", "-")}`}
          className="block rounded-xl border border-gray-300 p-8 shadow-xl transition hover:border-brown/10 hover:shadow-brown"
        >
          <img
            src={service.imageSrc}
            alt={service.title}
            className="h-10 w-10"
          />

          <h2 className="mt-4 text-xl font-bold text-gray-900">
            {service.title}
          </h2>

          <p className="mt-1 text-sm text-gray-700">{service.description}</p>
        </a>
      ))}
    </div>

      <div className="mt-12 text-center">
        <PrimaryButton padding={ `px-2 py-1 md:px-5 md:py-2` } onClick={() => document.getElementById('book')?.scrollIntoView({ behavior: 'smooth' })}  children={ 'Book now !' } />
      </div>
    </div>
  </section>
  );
}

export default Services