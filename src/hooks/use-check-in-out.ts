import { useState } from 'react';
import { format, addDays, addMonths, startOfMonth, eachDayOfInterval, isToday } from 'date-fns';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

interface ModalDataType {
    checkInBool: boolean,
    checkOutBool: boolean,
    personBool: boolean
};

interface SelectDateType {
    checkIn: string,
    checkOut: string,
    person: string,
    initialDisableDate: Date[],
    disableDate: Date[]
};

interface ReturnType {
    handleCheckIn: (date: Date) => void,
    handleCheckInBool: () => void,
    handleCheckOutBool: () => void,
    handleCheckOut: (date: Date) => void,
    handleCheckReset: () => void,
    handleCheckAvailability(selectedCheckInDate: string, selectedCheckOutDate : string ): void,
    toMonth: Date,
    fromMonth: Date,
    selectedDate: SelectDateType,
    handleCloseModal: () => void,
    handlePerson: (val:string) => void,
    ModalVal: ModalDataType
};

export default function useCheckInOut(): ReturnType {
    const router = useRouter();
    const [modalBool, setModalBool] = useState<ModalDataType>({
        checkInBool: false,
        checkOutBool: false,
        personBool: false
    });

    const todayDate = new Date();

    const fromMonth = new Date(todayDate.getFullYear(), todayDate.getMonth());

    const nextThreeDate = addDays(todayDate, 4);

    const toMonth = addMonths(todayDate, 1);

    // Get the start of the current month
    const startOfMonthDate = startOfMonth(new Date());

    // Get all the days of the current month up to today
    const daysOfMonth = eachDayOfInterval({ start: startOfMonthDate, end: new Date() });

    // Iterate over the array of dates and return array of prev days
    const initDisableDate = daysOfMonth.filter(date => !isToday(date));

    const [date, setDate] = useState<SelectDateType>({
        initialDisableDate: initDisableDate,
        disableDate: initDisableDate,
        checkIn: format(addDays(todayDate, 1), 'PP'),
        checkOut: format(nextThreeDate, 'PP'),
        person: '2'
    });

    const handleCloseModal = () => setModalBool({
        checkInBool: false,
        checkOutBool: false,
        personBool: false
    });

    const handleCheckIn = (day: Date) => {
        const startOfMonthDate = startOfMonth(new Date());
        const daysOfMonth = eachDayOfInterval({ start: startOfMonthDate, end: day });
        const disableDate = daysOfMonth.map(date => date);
        setDate({
            ...date,
            checkIn: format(day, 'PP'),
            disableDate
        });
        handleCloseModal();
    };

    const handleCheckReset = () => {
        setDate({
            disableDate: initDisableDate,
            initialDisableDate: initDisableDate,
            checkIn: format(addDays(todayDate, 1), 'PP'),
            checkOut: format(nextThreeDate, 'PP'),
            person: '2'
        })
    };

    const handleCheckOut = (day: Date) => {
        setDate({
            ...date,
            checkOut: format(day, 'PP'),
        });
        handleCloseModal();
    };

    const handlePerson = (val:string) => {
        setDate({
            ...date,
            person: val
        });
        handleCloseModal();
    };
    const handleCheckAvailability = async (selectedCheckInDate: string, selectedCheckOutDate: string) => {
        const checkindate = new Date(selectedCheckInDate);
        const checkoutdate = new Date(selectedCheckOutDate);
        const formatedCheckIn = checkindate.toLocaleDateString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" }).replace(/\//g, '-');
        const formatedCheckOut = checkoutdate.toLocaleDateString("en-US", { year: "numeric", month: "2-digit", day: "2-digit" }).replace(/\//g, '-');
        const partsCheckin = formatedCheckIn.split('-');
        const partsCheckout = formatedCheckOut.split('-');
        const CheckIn = `${partsCheckin[2]}-${partsCheckin[0]}-${partsCheckin[1]}`;
        const CheckOut = `${partsCheckout[2]}-${partsCheckout[0]}-${partsCheckout[1]}`;
        const apiUrl = `http://localhost:8080/reservation/check_villa_availability/`;
        const response = await axios.post(apiUrl, {
            check_in_date: CheckIn,
            check_out_date: CheckOut
        });
        if (response.data.message === 'Villa is available for the requested period you can proceed to booking') {
            const data = {
                check_in_date: CheckIn,
                check_out_date: CheckOut,
                guests: date.person
            };
            router.push(`/book?data=${JSON.stringify(data)}`);
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: response.data.message,
            });
        }
    };


    const handleCheckInBool = () => setModalBool({ ...modalBool, checkInBool: true, checkOutBool: false, personBool: false });

    const handleCheckOutBool = () => setModalBool({ ...modalBool, checkInBool: false, checkOutBool: true, personBool: false });

    return {
        handleCheckIn,
        handleCheckInBool,
        handleCheckOutBool,
        handleCheckOut,
        handleCheckReset,
        handleCheckAvailability,
        fromMonth,
        toMonth,
        selectedDate: date,
        handleCloseModal,
        ModalVal: modalBool,
        handlePerson
    };

};