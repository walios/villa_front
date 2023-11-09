'use client'
import axios from 'axios';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
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
    reservation_from: string;
  }
function ReservationList() {
    const [reservationData, setReservationData] = useState<Reservation[]>([]);
    const router = useRouter();
    useEffect(() => {
      axios.get('http://localhost:8080/reservation/all_reservations',)
        .then(response => {
          setReservationData(response.data.reservations);
        })
        .catch(error => {
          router.push('/');
        });
    }, []);
  return (
    <>
     <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    {/* Card */}
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="bg-white-50 border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-slate-900 dark:border-gray-700">
            {/* Header */}
            <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-gray-700">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Reservations
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Create Reservations, or click on any reservation to download the invoice PDF.
                </p>
              </div>

            </div>
            {/* End Header */}

            {/* Table */}
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-slate-900">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left">
                    <div className="flex items-center gap-x-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        Reservation number
                      </span>
                      <div className="hs-tooltip">
                        <div className="hs-tooltip-toggle">
                          <svg
                            className="w-3.5 h-3.5 text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                            />
                            <path
                              d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
                            />
                          </svg>
                          <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white-50 rounded-md shadow-sm dark:bg-slate-700" role="tooltip">
                            Invoice number related popup
                          </span>
                        </div>
                      </div>
                    </div>
                  </th>

                  <th scope="col" className="px-6 py-3 text-left">
                    <div className="flex items-center gap-x-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        Total Payout
                      </span>
                    </div>
                  </th>

                  <th scope="col" className="px-6 py-3 text-left">
                    <div className="flex items-center gap-x-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        Status
                      </span>
                    </div>
                  </th>

                  <th scope="col" className="px-6 py-3 text-left">
                    <div className="flex items-center gap-x-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        Check-in
                      </span>
                    </div>
                  </th>

                  <th scope="col" className="px-6 py-3 text-left">
                    <div className="flex items-center gap-x-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        Check-out
                      </span>
                    </div>
                  </th>

                  <th scope="col" className="px-6 py-3 text-left">
                    <div className="flex items-center gap-x-2">
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                        Reservation from
                      </span>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                
              {reservationData.map(reservation => (
                  <tr
                    key={reservation.reservation_id}
                    className="bg-white-50 hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800"
                  >
                    <td className="h-px w-px whitespace-nowrap">
                        <div className="px-6 py-2">
                          <span className="font-mono text-sm text-brown-dark dark:text-blue-500">
                            #{reservation.reservation_id}
                          </span>
                        </div>
                    </td>
                    <td className="h-px w-px whitespace-nowrap">
                        <div className="px-6 py-2">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {reservation.total_paid}
                          </span>
                        </div>

                    </td>
                    <td className="h-px w-px whitespace-nowrap">

                        <div className="px-6 py-2">
                            {reservation.is_paid === true ? (
                                <>
                                <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                <svg
                                    className="w-2.5 h-2.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8A8 8 0 1 1 8 1a8 8 0 0 1 0 14zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                </svg>
                                Paid
                                </span>
                                </>
                            ) : (
                                <>
                                <span className="inline-flex items-center gap-1.5 py-0.5 px-2 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-green-200">
                                <svg
                                    className="w-2.5 h-2.5"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
                                </svg>
                                Declined
                                </span>
                                </>
                            )}

                    </div>
                    </td>
                    <td className="h-px w-px whitespace-nowrap">
                        <div className="px-6 py-2">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {reservation.check_in_date}
                          </span>
                        </div>
                    </td>
                    <td className="h-px w-px whitespace-nowrap">
                        <div className="px-6 py-2">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {reservation.check_out_date}
                          </span>
                        </div>
                    </td>
                    <td className="h-px w-px whitespace-nowrap">
                        <div className="px-6 py-2">
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                          {reservation.reservation_from === 'CLOSED - Not available' ? 'Booking' : reservation.reservation_from === 'Airbnb (Not available)' ? 'Airbnb' : 'Main website'}
                          </span>
                        </div>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table> 
            {/* Footer */}
            <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-gray-700">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-gray-800 dark:text-gray-200">{reservationData.length}</span> results
                </p>
              </div>
            </div>
            {/* End Footer */}
          </div>
        </div>
      </div>
    </div>
    {/* End Card */}
  </div>
    </>
  )
}

export default ReservationList