import axios from 'axios';
import { deleteCookie, getCookie } from 'cookies-next';
import { set } from 'date-fns';
import  { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';

interface User {
  email: string;
  first_name: string;
  last_name: string;
}
export default function Profile() {
  const router = useRouter();
  const [userData, setUserData] = useState<User>({ email: '', first_name: '', last_name: '' });
  const handleSignOut = async () => {
    deleteCookie('jwt');
    window.location.reload();
  };
  const token = getCookie('jwt');
  const callApi = async () => {
    try {
      const response = await axios.post('http://localhost:8000/users/api/user/', { jwt: token });
      setUserData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    callApi();
  }, []);
    return (
      <div className="hs-dropdown relative inline-flex" data-hs-dropdown-placement="bottom-right">
        <button id="hs-dropdown-with-header" type="button" className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium bg-white text-gray-700 align-middle hover:bg-dark-blue focus:outline-none focus:ring-2 focus:ring-dark-blue focus:ring-offset-2 focus:ring-offset-brown transition-all text-xs dark:bg-gray-800 dark:hover:bg-slate-800 dark:text-gray-400 dark:hover:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800">
          <img className="inline-block h-[2.375rem] w-[2.375rem] rounded-full ring-2 ring-dark-brown dark:ring-brown" src="https://i.postimg.cc/7P3KsQdL/user.png" alt="Image Description" />
        </button>

        <div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] z-10 bg-white-100 shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700" aria-labelledby="hs-dropdown-with-header">
          <div className="py-3 px-5 -m-2 bg-gray-100 rounded-t-lg dark:bg-gray-700">
            <p className="text-sm text-gray-500 dark:text-gray-400">Signed in as</p>
            <p className="text-sm font-medium text-gray-800 dark:text-gray-300">{userData.email}</p>
          </div>
          <div className="mt-2 py-2 first:pt-0 last:pb-0">
            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-dark-blue hover:bg-gray-100 focus:ring-2 focus:ring-brown-dark dark:text-dark-blue dark:hover:bg-gray-700 dark:hover:text-gray-300" href="/user-reservation">
              <img className="w-4 h-4" src="https://i.postimg.cc/hPcPjCHC/reservation.png" />
              My Reservations
            </a>
            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-dark-blue hover:bg-gray-100 focus:ring-2 focus:ring-brown-dark dark:text-dark-blue dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">
              <img className="w-4 h-4" src="https://i.postimg.cc/L6D4ZtSm/account.png" />
              Profile Settings
            </a>
            <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-dark-blue hover:bg-gray-100 focus:ring-2 focus:ring-brown-dark dark:text-dark-blue dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#" onClick={handleSignOut}>
              <img className="w-4 h-4" src="https://i.postimg.cc/sfpg3F0Q/exit.png" />
              Sign-out
            </a>
          </div>
        </div>
      </div>
      )
}