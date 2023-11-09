import React from 'react'

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
interface ReservationTableProps {
  reservationData: Reservation;
}
function ReservationModal(props: ReservationTableProps) {
  const reservationData = props.reservationData;
  console.log("🚀 ~ file: ReservationModal.tsx:24 ~ ReservationModal ~ reservationData:", reservationData)
  const checkInDate = new Date(reservationData.check_in_date);
  const checkOutDate = new Date(reservationData.check_out_date);
  const nightsStayed = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24));
  const cityTaxes = 25 * nightsStayed * (reservationData.adult_numbers + reservationData.children_numbers);
  const totalPaid = reservationData.total_paid + cityTaxes;
  return (

<div id="hs-ai-invoice-modal" className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto">
      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
        <div className="relative flex flex-col bg-white-50 shadow-lg rounded-xl dark:bg-gray-800">
          <div className="relative overflow-hidden min-h-[8rem] bg-gray-900 text-center rounded-t-xl">
            {/* Close Button */}
            {/* End Close Button */}

            {/* SVG Background Element */}
            <figure className="absolute inset-x-0 bottom-0">
              <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1920 100.1">
                <path fill="currentColor" className="fill-white-50 dark:fill-gray-800" d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"></path>
              </svg>
            </figure>
            {/* End SVG Background Element */}
          </div>

          <div className="relative z-10 -mt-12">
            {/* Icon */}
            <span className="mx-auto flex justify-center items-center w-[62px] h-[62px] rounded-full border border-gray-200 bg-white-50 text-brown shadow-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z"/>
                <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z"/>
              </svg>
            </span>
            {/* End Icon */}
          </div>

          {/* Body */}
          <div className="p-4 sm:p-7 overflow-y-auto">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Reservation Invoice
              </h3>
              <p className="text-sm text-gray-500">
                Invoice {reservationData.reservation_id}
              </p>
            </div>

            {/* Grid */}
            <div className="mt-5 sm:mt-10 grid grid-cols-2 sm:grid-cols-3 gap-5">
              <div>
                <span className="block text-xs uppercase text-gray-500">Amount paid:</span>
                <span className="block text-sm font-medium text-gray-800 dark:text-gray-200">{reservationData.total_paid} MAD</span>
              </div>
              {/* End Col */}

              <div>
                <span className="block text-xs uppercase text-gray-500">Date paid:</span>
                <span className="block text-sm font-medium text-gray-800 dark:text-gray-200">{reservationData.booking_date}</span>
              </div>
              {/* End Col */}

              <div>
                <span className="block text-xs uppercase text-gray-500">Payment status:</span>
                <div className="flex items-center gap-x-2">
                {reservationData.is_paid === true ? (
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
              </div>
              {/* End Col */}
            </div>
            {/* End Grid */}

            <div className="mt-5 sm:mt-10">
              <h4 className="text-xs font-semibold uppercase text-gray-800 dark:text-gray-200">Summary</h4>

              <ul className="mt-3 flex flex-col">
                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-gray-700 dark:text-gray-200">
                  <div className="flex items-center justify-between w-full">
                    <span>Payment to Front</span>
                    <span>{reservationData.total_paid} MAD</span>
                  </div>
                </li>
                <li className="inline-flex items-cennexsible, gap-x-2 py-3 px-4 text-sm border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:border-gray-700 dark:text-gray-200">
                  <div className="flex items-center justify-between w-full">
                    <span>Tax fee (To be paid on site)</span>
                    <span>{cityTaxes} MAD</span>
                  </div>
                </li>
                <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-semibold bg-gray-50 border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-slate-800 dark:border-gray-700 dark:text-gray-200">
                  <div className="flex items-center justify-between w-full">
                    <span>Amount paid</span>
                    <span>{totalPaid} MAD</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Button */}
            <div className="mt-5 flex justify-end gap-x-2">
              <a className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white-50 text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-brown-dark transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                </svg>
                Invoice PDF
              </a>
              <a className="py-2 px-3 inlineFlex, justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-brown text-white-50 hover:bg-brown-dark focus:outline-none focus:ring-2 focus:ring-brown-dark focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" href="#">
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
                  <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                </svg>
                <span className="inline-block">Print</span>
              </a>
            </div>
            {/* End Buttons */}

            <div className="mt-5 sm:mt-10">
              <p className="text-sm text-gray-500">If you have any questions, please contact us at <a className="inline-flex items-center gap-x-1.5 text-brown-dark decoration-2 hover:underline font-medium" href="#">example@site.com</a> or <a className="inline-flex items-center gap-x-1.5 text-brown-dark decoration-2 hover:underline font-medium" href="#">(123) 456-7890</a></p>
            </div>
          </div>
          {/* End Body */}
        </div>
      </div>
    </div>

  )
}

export default ReservationModal