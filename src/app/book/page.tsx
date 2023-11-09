'use client';
import Navbar from '@/components/Appbar/Navbar';
import React, { useEffect, useState } from 'react';
import Footer from '../(home)/(shared)/Footer';
import { getCookie,deleteCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Booking from './Booking';
import jwt from 'jsonwebtoken';
import Swal from 'sweetalert2';
function page() {

    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const token = getCookie('jwt');
    const handleSignOut = async () => {
      deleteCookie('jwt');
      window.location.reload();
    };
    useEffect(() => {
      if (!token) {
        router.push('/');
      } else {
        setLoading(false);
        try{
        var decoded = jwt.verify(token, 'PLEASE WORK');     
        } catch (err) {
          handleSignOut();
          router.push('/');
        }
      }
    }, [token, router]);
  
    if (loading) {
      return null; // Return a loading indicator or some message
    }
  return (
    <>
        <div className="bg-white-50 flex flex-col min-h-screen">
            <Navbar
            logoColor={''}
            className={`bg-white-200 shadow-md p-3`}
            position={`sticky`}
            color={`text-inherit`}
            />
        
            <div className='flex-grow'>
                <Booking />

            </div>
            <Footer />
        </div>
    </>
  )
}

export default page