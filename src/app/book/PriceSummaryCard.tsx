import axios from 'axios';
import React, { useEffect, useState } from 'react'
interface BookingData {
  check_in_date: string;
  check_out_date: string;
  guests: number;
}

interface Props {
  bookingData: BookingData;
}
function PriceSummaryCard(props: Props) {
  
  const { bookingData } = props;
  if (!bookingData) {
    console.log("🚀 ~ file: BookingDetailsCard.tsx:18 ~ bookingData", bookingData)
    return null;
  }
  const [price, setPrice] = useState<number | null>(null);
  useEffect(() => {
    const reservationData = {
      check_in_date: bookingData.check_in_date,
      check_out_date: bookingData.check_out_date,
    };

    axios.post('http://localhost:8080/reservation/get_reservation_price/', reservationData)
      .then(response => setPrice(response.data.total_price))
      .catch(error => console.error(error));
  }, [bookingData]);


  return (
<>
  <article className="rounded-xl bg-white ring-1 ring-brown">
    <div className="sm:gap-1">
      <h3 className="p-4 text-2xl font-bold">
        Your price summary
      </h3>
      <div className='p-4  bg-brown-dark flex justify-between'>
        <h1 className="text-2xl font-bold ">
            Price
        </h1>
        <h1 className="text-2xl font-bold ">
             {price} MAD 
        </h1>
      </div>
      <h3 className="px-4 pt-4 text-lg font-bold sm:text-lg">
        Price informations
      </h3>
        <div className='p-4 flex justify-between'>
            <p className="text-sm text-gray-700 flex items-center">
                <img
                    src="https://i.postimg.cc/3R5Nkhhw/taxes.png"
                    alt="taxes"
                    className="h-4 w-4 mx-2"
                />
                The price excludes city taxes to be payed on site.
            </p>
        </div>
        <div className='pb-4 px-4 flex justify-between'>
            <p className="text-sm text-gray-700 flex items-center">
                <img
                    src="https://i.postimg.cc/g06rcJf5/dollar-to-euro-exchange.png"
                    alt="Currency exchange"
                    className="h-4 w-4 mx-2"
                />
                Keep in mind that your card issuer may charge you a foreign transaction fee.
            </p>
        </div>
    </div>
  </article>
  <br />
</>
  )
}

export default PriceSummaryCard