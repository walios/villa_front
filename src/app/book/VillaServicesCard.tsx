import React, { useState } from 'react'
interface BookingData {
  check_in_date: string;
  check_out_date: string;
  guests: number;
}

interface Props {
  bookingData: BookingData;
}
function VillaServicesCard(props: Props) {
  const { bookingData } = props;
  const servicesData = [
      {
        title: "Entire Villa",
        imageSrc: "https://i.postimg.cc/W3QDdBT3/villa.png",
      },
      {
        title: "Private Pool",
        imageSrc: "https://i.postimg.cc/htr72Zby/swimming-pool-2.png",
      },
      {
        title: "Air Conditioning",
        imageSrc: "https://i.postimg.cc/zvgJ43mD/air-conditioner-1.png",
      },
      {
        title: "2 Living Rooms",
        imageSrc: "https://i.postimg.cc/DwFXd3s4/interior-design-1.png",
      },
      {
        title: "6 Bathrooms",
        imageSrc: "https://i.postimg.cc/VNZ08ShX/underarm-1.png",
      },
      {
        title: "6 Bedrooms",
        imageSrc: "https://i.postimg.cc/w3Y6zHHX/bedroom-1.png",
      },
      {
          title: "1000 m²",
          imageSrc: "https://i.postimg.cc/tgmsNN2c/surface.png",
      },
      {
          title: "Mountain view",
          imageSrc: "https://i.postimg.cc/52gY6Vvb/mountain.png",
      },
      {
          title: "Terrace",
          imageSrc: "https://i.postimg.cc/xTrbZgnD/terrace.png",
      },
      {
        title: "Free Wifi",
        imageSrc: "https://i.postimg.cc/05MD9fPj/free-wifi-1.png",
      },
      {
        title: "Garden View",
        imageSrc: "https://i.postimg.cc/3wx0VjtK/park-2.png",
      },
      {
        title: "Free Parking",
        imageSrc: "https://i.postimg.cc/dtGCyV7K/parking-area.png",
      },
    ];
  const [services, setServices] = useState(servicesData);

  return (
<>  
<article className="rounded-xl bg-white p-4 ring-1 ring-brown sm:p-4 lg:p-4">
    <div className="sm:gap-8">
      <h3 className="text-2xl font-bold">
        Villa
      </h3>
        <div className='py-1 flex items-center'>
            <img
            src="https://i.postimg.cc/dtLfSGcr/whatsapp-1.png"
            alt="Free Wifi"
            className="h-4 w-4 mr-2"
            />
            <p className="text-sm text-gray-700">
                Contact the host for cancelation informations
            </p>
        </div>
        <div className='py-1 flex items-center'>
            <img
            src="https://i.postimg.cc/mkpRQRf9/guests.png"
            alt="Free Wifi"
            className="h-4 w-4 mr-2"
            />
            <p className="text-sm pr-1 font-bold text-gray-700">
                Guests:
            </p>
            <p className="text-sm text-gray-700">
                8 adults, 4 children
            </p>
        </div>
        <div className='py-1 pb-1 flex items-center'>
            <img
            src="https://i.postimg.cc/2j0zpdb5/no-pets.png"
            alt="Free Wifi"
            className="h-4 w-4 mr-2"
            />
            <p className="text-sm font-bold text-gray-700">
                No pets allowed
            </p>
        </div>
        <div className='py-1 flex items-center flex-wrap'>
            {services.map((service, index) => (
            <div className="bg-green-50 border border-green-200 text-sm text-green-600 rounded-md p-1 mr-2 mb-2 flex items-center">
                <img
                src={service.imageSrc}
                alt="Free Wifi"
                className="h-4 w-4 mr-2"
                />
                {service.title}
            </div>
        ))}
        </div>
    </div>
</article>
<br />
</>

  )
}

export default VillaServicesCard