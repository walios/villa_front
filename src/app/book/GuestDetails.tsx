import React, { useState } from 'react';
import { COUNTRIES } from '@/data/COUNTRIES';
import Select, { ActionMeta, SingleValue } from 'react-select';

interface Country {
  value: string;
  label: string;
}

function GuestDetails(props:any) {
    const{onGuestDataChange}= props;
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

  const [selectedCountry, setSelectedCountry] = useState<SingleValue<Country>>(null);

  const options = COUNTRIES.map((country) => ({
    value: country.value,
    label: country.title,
  }));

const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = event.target;
    const isChecked = type === 'checkbox' ? (event.target as HTMLInputElement).checked : undefined;
    setGuestData((prevData) => ({
        ...prevData,
        [name]: isChecked !== undefined ? isChecked : value,
    }));
};
const handleRadioChange = (name: string, value: boolean) => {
    setGuestData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
const handleGuestTypeChange = (name: string, value: boolean) => {
    setGuestData((prevData) => ({
        ...prevData,
        is_couple: name === 'is_couple' ? value : false,
        is_group: name === 'is_group' ? value : false,
        is_family: name === 'is_family' ? value : false,
      }));
    };

const handleChange = (selectedOption: SingleValue<Country>, actionMeta: ActionMeta<Country>) => {
    if (selectedOption) {
        setSelectedCountry(selectedOption);
        setGuestData((prevData) => ({
            ...prevData,
            guest_country: selectedOption.label,
        }));
    }
};
onGuestDataChange(guestData);

  return (
    <>
      <article className="rounded-xl bg-white p-4 ring-1 ring-brown sm:p-4 lg:p-4">
        <div className="sm:gap-8">
          <h3 className="pb-2 text-2xl font-bold ">Your details</h3>
          <div className="rounded-xl bg-gray-200 px-4 ring-1 ring-brown-dark">
            <p className="py-2 text-sm text-gray-700 flex items-center">
              <img src="https://i.postimg.cc/wvP1vbYV/info.png" alt="Free Wifi" className="h-4 w-4 mr-2" />
              Almost done! Just fill the required info
            </p>
          </div>
          <div className="py-2 flex items-center">
            <div className="pr-12">
              <h3 className=" text-lg text-grey">First Name</h3>
              <p className="text-lg font-bold">Amine</p>
            </div>
            <div>
              <h3 className="text-lg text-grey">Last name</h3>
              <p className="text-lg font-bold">Frira</p>
            </div>
          </div>
          <h3 className="text-lg text-grey">Email</h3>
          <p className="text-lg font-bold">aminefrira@gmail.com</p>
          <p className="text-sm text-grey flex items-center">
            <img src="https://i.postimg.cc/wvP1vbYV/info.png" alt="Free Wifi" className="h-4 w-4 mr-2" />
            All confirmation emails will be sent to this address
          </p>
          <div>
            <p className="pt-4 text-lg font-bold">Country</p>
            <div>
              <Select value={selectedCountry} onChange={handleChange} options={options} placeholder="Search your country" isSearchable />
              {selectedCountry && (
                <p className="pt-1 text-sm text-grey">Selected country code: {selectedCountry.value}</p>
              )}
            </div>
          </div>
          <div className="pt-4">
            <label htmlFor="input-label-with-helper-text" className="text-lg font-bold">
              Please enter your phone number with your country code
            </label>
            <input
              type="tel"
              id="input-label-with-helper-text"
              className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-brown focus:ring-brown dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
              placeholder="Phone number"
              aria-describedby="hs-input-helper-text"
              name="guest_phone_number"
              onChange={handleInputChange}
            />
            <p className="text-sm text-gray-500 mt-2" id="hs-input-helper-text">
              So the property can reach you
            </p>
          </div>
          <h3 className="pt-4 pb-2 text-lg font-bold sm:text-lg">Adults and children number</h3>
          <div className="py-2 flex items-center">
            <div className="pr-12">
              <label htmlFor="hs-select-label" className="block text-sm font-medium mb-2 dark:text-white">
                Adults
              </label>
              <select
                id="hs-select-label"
                className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-brown focus:ring-brown dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                name="adult_numbers"
                onChange={handleInputChange}
              >
                <option value="" disabled selected>
                  Please select how many adults
                </option>
                {Array.from({ length: 12 }, (_, index) => (
                  <option key={index + 1} value={(index + 1).toString()}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="hs-select-label" className="block text-sm font-medium mb-2 dark:text-white">
                Children
              </label>
              <select
                id="hs-select-label"
                className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-brown focus:ring-brown dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
                name="children_numbers"
                onChange={handleInputChange}
              >
                <option value="" disabled selected>
                  Please select how many children
                </option>
                {Array.from({ length: 11 }, (_, index) => (
                  <option key={index + 1} value={(index + 1).toString()}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <h3 className="pt-4 pb-2 text-lg font-bold sm:text-lg">Are you traveling for work?</h3>
          <div className="flex gap-x-6">
            <div className="flex">
              <input
                type="radio"
                name="is_traveling_for_work"
                className="shrink-0 mt-0.5 border-gray-200 rounded-full text-brown-dark focus:ring-brown dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                id="hs-radio-group-1"
                value="true"
                onChange={() => handleRadioChange('is_traveling_for_work', true)}
                checked={guestData.is_traveling_for_work}
              />
              <label htmlFor="hs-radio-group-1" className="text-sm text-gray-500 ml-2 dark:text-gray-400">
                Yes
              </label>
            </div>

            <div className="flex">
              <input
                type="radio"
                name="is_traveling_for_work"
                className="shrink-0 mt-0.5 border-gray-200 rounded-full text-brown-dark focus:ring-brown dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                id="hs-radio-group-2"
                value="false"
                onChange={() => handleRadioChange('is_traveling_for_work', false)}
                checked={!guestData.is_traveling_for_work}
                />
              <label htmlFor="hs-radio-group-2" className="text-sm text-gray-500 ml-2 dark:text-gray-400">
                No
              </label>
            </div>
          </div>
          <h3 className="pt-5 pb-2 text-lg font-bold sm:text-lg">What type of traveler are you?</h3>
          <div className="flex">
            <div className="flex items-center mr-4">
              <input
                id="inline-radio"
                type="radio"
                value=""
                name="inline-radio-group"
                className="w-4 h-4 text-brown-dark bg-gray-100 border-gray-300 focus:ring-brown dark:focus:ring-brown-dark dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => handleGuestTypeChange('is_couple', true)}
                checked = {guestData.is_couple === true}
                />
              <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Couple
              </label>
            </div>

            <div className="flex items-center mr-4">
              <input
                id="inline-2-radio"
                type="radio"
                value=""
                name="inline-radio-group"
                className="w-4 h-4 text-brown-dark bg-gray-100 border-gray-300 focus:ring-brown dark:focus:ring-brown-dark dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => handleGuestTypeChange('is_group', true)}
                checked = {guestData.is_group === true}
              />
              <label htmlFor="inline-2-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Group
              </label>
            </div>

            <div className="flex items-center mr-4">
              <input
                id="inline-radio-group"
                type="radio"
                value=""
                name="inline-radio-group"
                className="w-4 h-4 text-brown-dark bg-gray-100 border-gray-300 focus:ring-brown dark:focus:ring-brown-dark dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => handleGuestTypeChange('is_family', true)}
                checked = {guestData.is_family === true}
              />
              <label htmlFor="inline-checked-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Family
              </label>
            </div>
          </div>
        </div>
      </article>
      <br />
    </>
  );
}

export default GuestDetails;