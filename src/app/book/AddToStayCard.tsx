import React, { useState } from 'react'

function AddToStayCard(props:any) {
  const{onAddtoStayChange}= props;
  const [checkboxes, setCheckboxes] = useState({
    need_cook: false,
    need_driver: false,
  });

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.checked;
    const name = target.getAttribute('data-name') as string;

    setCheckboxes({
      ...checkboxes,
      [name]: value,
    });
  };
  onAddtoStayChange(checkboxes);
  return (
    <>
  <article className="rounded-xl bg-white p-4 ring-1 ring-brown sm:p-4 lg:p-4">
    <div className="sm:gap-8">
      <h3 className="pb-2 text-2xl font-bold">
        Add to your stay
      </h3>
      <div className="relative flex items-start">
        <div className="flex items-center h-5 mt-1">
          <input
            data-name="need_cook"
            id="hs-checkbox-delete"
            name="hs-checkbox-delete"
            type="checkbox"
            className="border-gray-200 rounded text-brown-dark focus:ring-brown dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-brown dark:checked:border-brown dark:focus:ring-offset-gray-800"
            aria-describedby="hs-checkbox-delete-description"
            checked={checkboxes.need_cook}
            onChange={handleCheckboxChange}
          />
        </div>
        <label htmlFor="hs-checkbox-delete" className="ml-3">
          <span className="block text-sm font-semibold text-gray-800 dark:text-gray-300">
            I'm intersted in retaining a private cook.
          </span>
          <span
            id="hs-checkbox-delete-description"
            className="block text-sm text-gray-600 dark:text-gray-500"
          >
            Contact us for price informations 
          </span>
        </label>
      </div>
      <div className="py-2 relative flex items-start">
        <div className="flex items-center h-5 mt-1">
          <input
            data-name="need_driver"
            id="hs-checkbox-delete"
            name="hs-checkbox-delete"
            type="checkbox"
            className="border-gray-200 rounded text-brown-dark focus:ring-brown dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-brown dark:checked:border-brown dark:focus:ring-offset-gray-800"
            aria-describedby="hs-checkbox-delete-description"
            checked={checkboxes.need_driver}
            onChange={handleCheckboxChange}
          />
        </div>
        <label htmlFor="hs-checkbox-delete" className="ml-3">
          <span className="block text-sm font-semibold text-gray-800 dark:text-gray-300">
            I'm intersted in getting a driver.
          </span>
          <span
            id="hs-checkbox-delete-description"
            className="block text-sm text-gray-600 dark:text-gray-500"
          >
            Contact us for price informations 
          </span>
        </label>
      </div>
    </div>
  </article>
  <br />
</>
  )
}

export default AddToStayCard