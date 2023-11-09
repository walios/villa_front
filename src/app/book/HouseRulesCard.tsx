import React from 'react'

function HouseRulesCard() {
  return (
<>
  <article className="rounded-xl bg-white p-4 ring-1 ring-brown sm:p-4 lg:p-4">
    <div className="sm:gap-8">
      <h3 className="text-2xl font-bold">
        Review House Rules
      </h3>
      <p className="pt-2 text-sm text-gray-700">
        We would like you to agree to the following house rules:
      </p>
      <ul className="pb-2 list-disc list-inside text-gray-700 text-sm dark:text-gray-200">
        <li>No parties/events.</li>
        <li>Pets are not allowed.</li>
        <li>Booking is only available for families unless approved.</li>
      </ul>
      <p className='text-sm font-bold text-gray-700'>
        By continuing to the next step, you agree to these house rules.
      </p>
    </div>
    
  </article>
  <br />
</>
  )
}

export default HouseRulesCard