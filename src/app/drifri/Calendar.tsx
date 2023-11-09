'use client'

import React, { use, useEffect, useState } from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import axios from 'axios'
import { get } from 'http'
import Datepicker from "react-tailwindcss-datepicker";
import PrimaryButton from '@/components/Button/Primary-Button'
import { getCookie } from 'cookies-next'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'
interface Reservation{
    reservation_id: number,
    user_id: number,
    check_in_date: string,
    check_out_date: string,
    total_paid: number,
    reservation_from: string,
}
interface NightlyPrice{
    id: number,
    date: string,
    price: number,
}
function Calendar() {
    const [reservationData, setReservationData] = useState<Reservation[]>([]);
    const [price_night, setPrice_night] = useState<NightlyPrice[]>([]);
    const router = useRouter();
    const [price, setPrice] = useState<number | undefined>(undefined);
    const token = getCookie('jwt');
    const [value, setValue] = useState({ 
        startDate: null,
        endDate: null 
        }); 
    useEffect(() => {
    Promise.all([getAllReservations(), getNightlyPrice()])
        .then(([reservations, nightlyPrices]) => {
        setReservationData(reservations);
        setPrice_night(nightlyPrices);
        })
        .catch((error) => {
        console.error(error);
        });
    }, []);

    const getAllReservations = async () => {
        try {
            await axios.post('http://localhost:8080/reservation/get_ical_events/', {
                ical_link: 'https://ical.booking.com/v1/export?t=312b2014-ee29-45e6-b0c2-5d8cc6eda93c',
              });
            await axios.post('http://localhost:8080/reservation/get_ical_events/', {
                ical_link: 'https://www.airbnb.com/calendar/ical/659909247089351068.ics?s=bb66e7332cdcf07355f8e486e3ede1f6',
              });
            const response = await axios.get('http://localhost:8080/reservation/all_reservations');
            setReservationData(response.data.reservations);
            return response.data.reservations;
        } catch (error) {
            console.error(error);
            return [];
        }
    }
    const getNightlyPrice = async () => {
        try {
            const response = await axios.get('http://localhost:8080/reservation/get_nightly_price');
            setPrice_night(response.data.nightly_price);
            return response.data.nightly_price;
        } catch (error) {
            console.error(error);
            return [];
        }
    }

  const events = reservationData.map(reservation => ({
    title: `Reservation ${reservation.reservation_id}`,
    start: reservation.check_in_date,
    end: reservation.check_out_date,
    extendedProps: {
      price: reservation.total_paid,
      reservation_from: reservation.reservation_from,
    }
  }));
  function getNightlyPriceForDate(date: Date, nightlyPrices: any[]) {
    const formattedDate = date.toISOString().split('T')[0];
    const nightlyPrice = nightlyPrices.find((price: { date: any }) => price.date === formattedDate);
    return nightlyPrice ? nightlyPrice.price : '';
  }
const handleValueChange = (newValue: any) => {
    setValue(newValue); 
    } 

  function setPricefunc() {
    const url = "http://localhost:8080/reservation/set_price/";
    const data = 
        {
            start_date: value.startDate,
            end_date: value.endDate,
            price: price,
            jwt: token,
        }
    axios
        .post(url, data)
        .then((response) => {
            router.push('/drifri');
            Swal.fire({
                position: 'bottom-end',
                icon: 'success',
                title: response.data.message,
                showConfirmButton: false,
                timer: 3000
              });

        })
        .catch((error) => {
            Swal.fire({
                position: 'bottom-end',
                icon: 'error',
                title: error.data.message,
                showConfirmButton: false,
                timer: 3000
              });
        });        
    }
    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                selectable={false}
                events={events}
                eventContent={(eventInfo) => (
                    <div>
                    <div>{eventInfo.event.title}</div>
                    <div>{`${eventInfo.event.extendedProps.price} MAD`}</div>
                    {eventInfo.event.extendedProps.reservation_from === 'CLOSED - Not available' && (
                        <div>Booking</div>
                    )}
                    {eventInfo.event.extendedProps.reservation_from === 'Airbnb (Not available)' && (
                        <div>Airbnb</div>
                    )}
                    </div>
                )}
                dayCellContent={(e) => {
                    const date = e.date;
                    const nightlyPrice = getNightlyPriceForDate(date, price_night);
                    return (
                        <>
                        <div className="flex flex-col">
                        <div className="self-end">{date.getDate()}</div>
                        <div className="">{nightlyPrice && <div>{`${nightlyPrice} MAD`}</div>}</div>
                        </div>
                    </>
                    );
                }}
            />

            <article className="rounded-xl mt-5 bg-white p-4 ring-1 ring-brown sm:p-4 lg:p-4">
                <div className="sm:gap-8">
                <h3 className="text-2xl font-bold">
                    Set nightly price
                </h3>
                <div className='py-2 flex items-center'>
                    <p className="text-sm text-gray-700 flex items-center">
                    <img
                        src="https://i.postimg.cc/7PMTPnZr/checked.png"
                        alt="Free Wifi"
                        className="h-4 w-4 mr-2"
                    />
                    Please fill the dates you want to set the price per night
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                    <div>
                        <label htmlFor="hs-select-label" className="block text-lg font-bold mb-2 dark:text-white">
                            Select the start date to end date
                        </label>
                        <Datepicker 
                            primaryColor={"amber"} 
                            value={value} 
                            onChange={handleValueChange} 
                            showShortcuts={true} 
                            /> 
                    </div>
                   <div>
                        <label htmlFor="hs-select-label" className="block text-lg font-bold mb-2 dark:text-white">
                            Enter the price/night
                        </label>
                        <input
                            type="number"
                            className="py-3 px-5 block w-full border-gray-200 rounded-full text-sm focus:border-brown focus:ring-brown dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                            placeholder="Enter price"
                            value={price ?? ""}
                            onChange={(event) => setPrice(Number(event.target.value))}
                        />
                   </div>
                   <button
                    type="button"
                    className="px-5 py-2 border-2 text-inherit rounded-md text-center border-brown inline-block z-[1] relative duration-300 ease-linear before:duration-300 before:ease-linear before:absolute before:inset-y-0 before:left-1/2 before:right-1/2 before:opacity-0 before:content-[''] before:bg-brown before:z-[-1] active:scale-90 overflow-hidden hover:text-white-50 hover:before:left-0 hover:before:right-0 hover:before:opacity-100"
                    onClick={setPricefunc}
                    disabled={!value.startDate || !value.endDate || !price}
                    >
                    Set Price
                    </button>

                </div>
                </div>
                
            </article>
            <br />
        </>
    )
}

export default Calendar