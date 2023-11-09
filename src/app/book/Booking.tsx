`use client`;
import React, { useEffect, useState } from 'react'
import VillaInfoCards from './VillaInfoCards'
import BookingDetailsCard from './BookingDetailsCard'
import PriceSummaryCard from './PriceSummaryCard'
import GuestDetails from './GuestDetails'
import VillaServicesCard from './VillaServicesCard'
import AddToStayCard from './AddToStayCard'
import ArrivalTimeCard from './ArrivalTimeCard'
import HouseRulesCard from './HouseRulesCard'
import axios from 'axios'
import { getCookie } from 'cookies-next'
import DropIn from 'braintree-web-drop-in-react'
import Swal from 'sweetalert2'
import { useSearchParams } from 'next/navigation'

function Booking() {
  const searchParams = useSearchParams();
  const [bookingData, setBookingData] = useState<any>(null);
  const [price, setPrice] = useState<number | null>(null);
  useEffect(() => {
    const dataString = searchParams.get('data');
    if (dataString) {
      const data = JSON.parse(dataString);
      setBookingData(data); 
    }
    if (bookingData !== null) {
    const reservationData = {
      check_in_date: bookingData.check_in_date,
      check_out_date: bookingData.check_out_date,
    };

    axios.post('http://localhost:8080/reservation/get_reservation_price/', reservationData)
      .then(response => setPrice(response.data.total_price))
      .catch(error => console.error(error));
  }}, []);
  const [guestData, setGuestData] = useState({
    guest_country: '',
    guest_phone_number: '',
    adult_numbers: '',
    children_numbers: '',
    is_traveling_for_work: false,
    is_group: false,
    is_couple: false,
    is_family: false,
  });
  const [checkboxes, setCheckboxes] = useState({
    need_cook: false,
    need_driver: false,
  });
  const [arrivalTime, setArrivalTime] = useState({
    arrival_time: '',
  });
  const onAddtoStayChange = (newCheckboxes: any) => {
    setCheckboxes(newCheckboxes);
  };
  const handleGuestDataChange = (newGuestData: any) => {
    setGuestData(newGuestData);
  };
  const onArrivalTimeChange = (newArrivalTime: any) => {
    setArrivalTime(newArrivalTime);
  };
  const reservationFinalData = {
    ...guestData,
    ...checkboxes,
    arrivalTime,
    ...bookingData,
  };
  const jwt = getCookie('jwt');
  const [values, setValues] = useState({
    clientToken: null,
    success: '',
    error: '',
    instance:''
  });
  const { clientToken, success, error, instance } = values;
  const getToken=()=>{
    axios.post(`http://localhost:8082/payment/checkout_page/`,{jwt:getCookie('jwt')})
    .then(response => {
      if(response.data.err){
        setValues({...values, error: response.data.err})
      }
      else{
        setValues({...values, clientToken: response.data.clientToken})
      }
    })
  }
  
  useEffect(() => {
    getToken();
  }, []);
  const createReservation = async () => {
    let reservationFinalDataWithPayment = {
      ...reservationFinalData,
      jwt,
      is_paid: true
    };
    console.log(reservationFinalDataWithPayment);
  
    try {
      const response = await axios.post('http://localhost:8080/reservation/create_reservation/', reservationFinalDataWithPayment);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const onPurchase = () => {
        (instance as any).requestPaymentMethod().then((data: { nonce: string }) => {
          let nonce = data.nonce;
          let paymentData = {
            paymentMethodNonce: nonce,
            amount: price,
            jwt: jwt
          }
          fetch(`http://localhost:8082/payment/payment/`,{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "accept": "application/json"
            },
            body: JSON.stringify(paymentData)
          }).then(response => response.json()).then(response =>
           {
            if(response.err){
              const createReservation = async () => {
                try {
                  const response = await axios.post('http://localhost:8080/reservation/create_reservation/', {
                    reservationFinalData,
                    jwt,
                    is_paid: false
                  });
                  return response.data;
                } catch (error) {
                  console.error(error);
                }
              };
              createReservation();
              setValues({...values, error: response.err})
            }
            else{
              setValues({...values,error:"", success: response.success})
              if(response.message==="Perfect"){
                createReservation();
                Swal.fire({
                  position: 'bottom-end',
                  icon: 'success',
                  title: "Villa booked successfully",
                  showConfirmButton: false,
                  timer: 3000
                });
              }
            }
          }).catch(err =>{
            setValues({...values, error: err, success:""})
            const createReservation = async () => {
              try {
                const response = await axios.post('http://localhost:8080/reservation/create_reservation/', {
                  reservationFinalData,
                  jwt,
                  is_paid: false
                });
                return response.data;
              } catch (error) {
                console.error(error);
              }
            };
            createReservation();
          })
        })
  }


  
  return (
<div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <div className="flex flex-wrap gap-4 lg:flex-nowrap lg:gap-8">
        <div className="w-full lg:w-2/5">
            < VillaInfoCards />
            < BookingDetailsCard bookingData = {bookingData}/>
            < PriceSummaryCard bookingData = {bookingData}/>
            < HouseRulesCard />
        </div>

        <div className="w-full lg:w-3/5">
            < GuestDetails onGuestDataChange={handleGuestDataChange}/>
            < VillaServicesCard bookingData = {bookingData}/>
            < AddToStayCard  onAddtoStayChange={onAddtoStayChange}/>
            < ArrivalTimeCard onArrivalTimeChange={onArrivalTimeChange}/>
            <div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="px-5 py-2 border-2 text-inherit rounded-md text-center border-brown inline-block z-[1] relative duration-300 ease-linear before:duration-300 before:ease-linear before:absolute before:inset-y-0 before:left-1/2 before:right-1/2 before:opacity-0 before:content-[''] before:bg-brown before:z-[-1] active:scale-90 overflow-hidden hover:text-white-50 hover:before:left-0 hover:before:right-0 hover:before:opacity-100"
                  data-hs-overlay="#hs-basic-modal"
                  
                >
                  Proceed to payment
                </button>
              </div>
              <div
                id="hs-basic-modal"
                className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto"
              >
                <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                  <div className="flex flex-col bg-white-50 border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                      <h3 className="font-bold text-gray-800 dark:text-white">Reservation payment</h3>
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
                    <div className='payment'>
                      {clientToken &&(
                        <div>
                          <DropIn
                            options={{ authorization: clientToken }}
                            onInstance={(instance) => setValues({...values, instance:instance})}/>
                        </div>
                      )}
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
                        onClick={onPurchase}
                        data-hs-overlay="#hs-basic-modal"
                      >
                        Complete Payment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Booking