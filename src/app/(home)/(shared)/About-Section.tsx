'use client';
import Profile from '@/components/Appbar/Profile';
import PrimaryButton from '@/components/Button/Primary-Button';
import axios from 'axios';
import React, { useState } from 'react';

export default function AboutSection() {
    const url = 'http://localhost:8080/reservation/all_reservations/';
  
    const meow = async () => {
        try {
            const response = await axios.get(url);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <section className={ `flex-v-center flex-col sm:flex-row container my-10` }>
            <div className={ `sm:basis-3/2 md:basis-1/2` }>
                <img className={ `w-full sm:w-5/6 md:w-4/5 lg:w-[70%] rounded-md mx-auto` } src="https://i.postimg.cc/3NJKHQ7m/koutoubia-gardens-marrakesh-morocco.jpg" alt="" />
            </div>
            <div className={ `mr-auto md:mx-auto` }>

                <h4 className={ `text-2xl my-5 uppercase font-medium` }>Experience <span className={ `border-b-2 inline-block border-brown h-1 w-24` }></span></h4>

                <h1 className={ `text-4xl my-5 leading-[45px] font-semibold` }>The Life Of
                    <br />
                    Marrakesh City!
                </h1>

                <p className={ `text-gray-500` }>Discover the enchanting allure of Marrakesh,
                    <br />
                    where vibrant culture and timeless beauty collide. 
                    <br />
                    Immerse yourself in the busting medina, where labyrinthine
                    <br />
                    streets lead to busting souks filled with intricate
                    <br />
                    handicrafts and aromatic spices.
                </p>

                <div className={ `my-5` }>
                    <PrimaryButton children={ `Read More` } onClick={() => meow()}/>
                </div>
            </div>
        </section>
    );
};