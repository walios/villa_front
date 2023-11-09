'use client'
import React, { useEffect, useState } from 'react'
import SidebarAdmin from './SidebarAdmin'
import Calendar from './Calendar';
import { useRouter } from 'next/navigation';
import { deleteCookie, getCookie } from 'cookies-next';
import jwt from 'jsonwebtoken';
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
        < SidebarAdmin />

        <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
            < Calendar />
        </div>
      </div>
    </>
  )
}

export default page