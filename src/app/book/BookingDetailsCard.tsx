import React from 'react'
interface BookingData {
  check_in_date: string;
  check_out_date: string;
  guests: number;
}

interface Props {
  bookingData: BookingData;
}
function BookingDetailsCard(props: Props) {
  const { bookingData } = props;
  if (!bookingData) {
    console.log("🚀 ~ file: BookingDetailsCard.tsx:18 ~ bookingData", bookingData)
    return null;
  }
  const checkInDate = new Date(bookingData.check_in_date);
  const formattedCheckIn = checkInDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  const checkOutDate = new Date(bookingData.check_out_date);
  const formattedCheckOut = checkOutDate.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return (
<>
  <article className="rounded-xl bg-white p-4 ring-1 ring-brown sm:p-4 lg:p-4">
    <div className="sm:gap-8">
      <h3 className="text-2xl font-bold ">
        Your booking details
      </h3>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
            <div>
            <p className="pt-3 text-sm text-gray-700">
            Check-in
            </p>
            <p className='text-lg font-bold sm:text-lg'>
            {formattedCheckIn}
            </p>
            <p className='text-sm text-gray-700'>
            3:00 PM – 10:00 PM
            </p>
            </div>
            <div>
            <p className="pt-3 text-sm text-gray-700">
            Check-out
            </p>
            <p className='text-base font-bold sm:text-lg'>
            {formattedCheckOut}
            </p>
            <p className='text-sm text-gray-700'>
            8:00 AM – 11:00 AM
            </p>
            </div>
        </div>
        <p className='pt-3 text-sm text-gray-700'>
         Total length of stay:
        </p>
        <p className='pb-3 text-base font-bold sm:text-lg'>
            {daysDiff} nights
        </p>
        <hr className=" border-gray-200 " />
        <p className='pt-3 text-sm text-gray-700'>
            You selected
        </p>
        <p className='pt-3 pb-3 text-base font-bold sm:text-lg'>
            1 Villa for {bookingData.guests} adults
        </p>
    </div>
  </article>
  <br />
</>
  )
}

export default BookingDetailsCard