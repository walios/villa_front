'use client';
import Navbar from '@/components/Appbar/Navbar';
import React, { useEffect, useState } from 'react';
import ReservationTable from './ReservationTable';
import Footer from '../(home)/(shared)/Footer';
import { deleteCookie, getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import jwt from 'jsonwebtoken';
interface Reservation {
  reservation_id: number;
  check_in_date: string;
  check_out_date: string;
  adult_numbers: number;
  children_numbers: number;
  is_family: boolean;
  is_paid: boolean;
  need_cook: boolean;
  need_driver: boolean;
  guest_country: string;
  guest_phone_number: string;
  user_id: number;
  total_paid: number;
  booking_date: string;
}

export default function Page() {
  const [reservationData, setReservationData] = useState<Reservation[]>([]);

  useEffect(() => {
    axios.post('http://localhost:8080/reservation/get_user_reservations/',{jwt:getCookie('jwt')})
      .then(response => {
        setReservationData(response.data.reservations);
      })
      .catch(error => {
        router.push('/');
      });
  }, []);
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
          <ReservationTable reservationData={reservationData}/>
        </div>
        <Footer />
      </div>
    </>
  );
}
