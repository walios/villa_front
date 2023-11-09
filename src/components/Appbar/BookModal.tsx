'use client';

import React, { useState } from 'react'
import { Datepicker } from 'flowbite-react';

function BookModal() {
    const [checkInDate, setCheckInDate] = useState<Date | null>(null);
    const [checkOutDate, setCheckOutDate] = useState<Date | null>(null);
  
    const handleCheckInDateChange = (date: Date | null) => {
      setCheckInDate(date);
    };
  
    const handleCheckOutDateChange = (date: Date | null) => {
      setCheckOutDate(date);
    };
    const today = new Date();
    const oneYearFromNow = new Date();
    oneYearFromNow.setFullYear(today.getFullYear() + 1);
  return (
    <div
    id="hs-basic-modal"
    className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
    >
    <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
      <div className="flex flex-col bg-white-50 border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
          <h3 className="font-bold text-gray-800 dark:text-white">Your booking details</h3>
          <button
            type="button"
            className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
            data-hs-overlay="#hs-basic-modal"
            
          >
            <span className="sr-only">Close</span>
            <svg
              className="w-3.5 h-3.5"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
        <div className="p-4 overflow-y-auto">
        <div className="sm:gap-8">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                    <div>
                    <p className="pt-3 text-sm text-gray-700">
                    Check-in
                    </p>
                    < Datepicker 
                        
                        maxDate={oneYearFromNow}
                        minDate={today}
                    />
                    <p className='text-sm text-gray-700'>
                    3:00 PM – 10:00 PM
                    </p>
                    </div>
                    <div>
                    <p className="pt-3 text-sm text-gray-700">
                    Check-out
                    </p>
                    < Datepicker 
                        maxDate={oneYearFromNow}
                        minDate={today}
                    />
                    <p className='text-sm text-gray-700'>
                    8:00 AM – 11:00 AM
                    </p>
                    </div>
                </div>
                <p className='pt-3 text-sm text-gray-700'>
                Total length of stay:
                </p>
                <p className='pb-3 text-base font-bold sm:text-lg'>
                    9 nights
                </p>
                <hr className=" border-gray-200 " />
                <p className='pt-3 text-sm text-gray-700'>
                    You selected
                </p>
                <p className='pt-3 pb-3 text-base font-bold sm:text-lg'>
                    1 Villa for 2 adults and 2 children
                </p>
            </div>
        </div>
        <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
          <button
            type="button"
            className="px-5 py-2 border-2 text-inherit rounded-md text-center border-brown inline-block z-[1] relative duration-300 ease-linear before:duration-300 before:ease-linear before:absolute before:inset-y-0 before:left-1/2 before:right-1/2 before:opacity-0 before:content-[''] before:bg-brown before:z-[-1] active:scale-90 overflow-hidden hover:text-white-50 hover:before:left-0 hover:before:right-0 hover:before:opacity-100"
            data-hs-overlay="#hs-basic-modal"
            
          >
            Go back
          </button>
          <button
            className="px-5 py-2 border-2 text-inherit rounded-md text-center border-brown inline-block z-[1] relative duration-300 ease-linear before:duration-300 before:ease-linear before:absolute before:inset-y-0 before:left-1/2 before:right-1/2 before:opacity-0 before:content-[''] before:bg-brown before:z-[-1] active:scale-90 overflow-hidden hover:text-white-50 hover:before:left-0 hover:before:right-0 hover:before:opacity-100"
            data-hs-overlay="#hs-basic-modal"
          >
            Complete Payment
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default BookModal