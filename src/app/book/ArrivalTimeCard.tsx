import PrimaryButton from '@/components/Button/Primary-Button'
import React, { useState } from 'react'

function ArrivalTimeCard(props: any) {
  const{onArrivalTimeChange}= props;
  const [arrivalTime, setArrivalTime] = useState<string>('');
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setArrivalTime(event.target.value);
  };
  onArrivalTimeChange(arrivalTime);
  return (
<>
  <article className="rounded-xl bg-white p-4 ring-1 ring-brown sm:p-4 lg:p-4">
    <div className="sm:gap-8">
      <h3 className="text-2xl font-bold">
        Your arrival time
      </h3>
      <div className='py-2 flex items-center'>
        <p className="text-sm text-gray-700 flex items-center">
        <img
            src="https://i.postimg.cc/7PMTPnZr/checked.png"
            alt="Free Wifi"
            className="h-4 w-4 mr-2"
        />
        You can check-in between 3:00 PM and 10:00 PM
        </p>
      </div>
      <div>
      <label htmlFor="hs-select-label" className="block text-lg font-bold mb-2 dark:text-white">
        Add your estimated arrival time
      </label>
      <select
        id="hs-select-label"
        className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
        value={arrivalTime}
        onChange={handleSelectChange}
      >
        <option selected>Open this select menu</option>
        <option>3:00 PM - 4:00 PM </option>
        <option>4:00 PM - 5:00 PM</option>
        <option>5:00 PM - 6:00 PM</option>
        <option>6:00 PM - 7:00 PM</option>
        <option>7:00 PM - 8:00 PM</option>
        <option>8:00 PM - 9:00 PM</option>
        <option>9:00 PM - 10:00 PM</option>
      </select>
      <p className="pt-1 text-sm text-gray-700">
        Time is for Marrakesh time zone
      </p>
    </div>
    </div>
    
</article>
<br />
</>

  )
}

export default ArrivalTimeCard