import React from 'react'
interface BookingData {
  check_in_date: string;
  check_out_date: string;
  guests: number;
}

interface Props {
  bookingData: BookingData;
}
function VillaInfoCards() {

  return (
<>
  <article className="rounded-xl bg-white p-4 ring-1 ring-brown sm:p-4 lg:p-4">
    <div className="sm:gap-8">
      <h3 className="text-2xl font-bold">
        Villa Chouiter Center
      </h3>
      <p className="py-3 text-sm text-gray-700">
      Chouiter, Al ouidane, 41103 Marrakesh, Morocco
      </p>
      <p className="text-sm text-gray-700">
      5/5 reviews . 2 client reviews
      </p>
      <div className='flex items-center'>
      <p className="text-sm text-gray-700 flex items-center">
      <img
        src="https://i.postimg.cc/05MD9fPj/free-wifi-1.png"
        alt="Free Wifi"
        className="h-4 w-4 mr-2"
      />
       Free WiFi
      </p>
      <p className="text-sm text-gray-700 flex items-center">
      <img
        src="https://i.postimg.cc/htr72Zby/swimming-pool-2.png"
        alt="Free Wifi"
        className="h-4 w-4 mx-2"
      />
       Private Pool
      </p>
      <p className="text-sm text-gray-700 flex items-center">
      <img
        src="https://i.postimg.cc/zvgJ43mD/air-conditioner-1.png"
        alt="Free Wifi"
        className="h-4 w-4 mx-2"
      />
       Air Conditioning
      </p>
      </div>
    </div>
  </article>
  <br />
</>
  )
}

export default VillaInfoCards