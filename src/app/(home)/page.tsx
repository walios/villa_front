'use client';
import Navbar from '@/components/Appbar/Navbar';
import React, { useEffect, useState } from 'react';
import HeroSection from './(shared)/Hero-Section';
import AboutSection from './(shared)/About-Section';
import CheckoutSection from './(shared)/Checkout-Section';
import Services from './(shared)/Services';
import Gallery from './(shared)/Gallery';
import Testimonials from './(shared)/Testimonials';
import Faq from './(shared)/Faq';
import Footer from './(shared)/Footer';
import BookModal from '@/components/Appbar/BookModal';
import { useRouter } from 'next/navigation';
import { deleteCookie, getCookie } from 'cookies-next';
import jwt from 'jsonwebtoken';

export default function page() {
    const router = useRouter();
    const token = getCookie('jwt');
    const handleSignOut = async () => {
      deleteCookie('jwt');
      router.push('/');
    };
    useEffect(() => {
      const verifyToken = async () => {
        if (!token) {
          router.push('/');
        } else {
          try {
            var decoded = jwt.verify(token, 'PLEASE WORK');
          } catch (err) {
            handleSignOut();
          }
        }
      };
      verifyToken();
    }, [token, router]);
    
  return (
    <>
      <Navbar logoColor={`invert`} className={`bg-transparent p-3`} color={`text-white-50`} position={`absolute`}/>
        <HeroSection />
        <CheckoutSection />
        <BookModal />
        <AboutSection />
        <Services />
        <Gallery />
        <Testimonials />
        <Faq />
        <Footer />

    </>
  );
};