
import React from 'react'

function Footer() {
  return (
    <footer className="bg-brown mt-auto">
      <div className="max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div className="col-span-full lg:col-span-1">
            <a className="flex-none text-xl font-semibold text-white" href="#" aria-label="Brand">
            <div className={ `w-[150px]` }>
               <img className={ `w-full` } src="https://i.postimg.cc/y8B1BmKK/meow2.png" alt="Brand-Logo" /> 
              </div>
            </a>
          </div>
          {/* End Col */}
          <div className="col-span-1">
            <h4 className="font-semibold text-gray-900">Villa</h4>
            <div className="mt-3 grid space-y-3">
              <p>
                <a className="inline-flex gap-x-2 text-dark-blue hover:text-brown-dark" href="#">
                  Book
                </a>
              </p>
              <p>
                <a className="inline-flex gap-x-2 text-dark-blue hover:text-brown-dark" href="#">
                  Gallery
                </a>
              </p>
              <p>
                <a className="inline-flex gap-x-2 text-dark-blue hover:text-brown-dark" href="#">
                  Services
                </a>
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className="col-span-1">
            <h4 className="font-semibold text-gray-900">Contact-Us</h4>
            <div className="mt-3 grid space-y-3">
              <p>
                <a className="inline-flex gap-x-2 text-dark-blue hover:text-brown-dark" href="#">
                <img src="https://i.postimg.cc/8CkX6RyC/phone-call.png" alt="Email Icon" className="w-5 h-5" />
                  +212697992092
                </a>
              </p>
              <p>
                <a className="inline-flex gap-x-2 text-dark-blue hover:text-brown-dark" href="https://maps.app.goo.gl/gusTVvy2LXckskeK9">
                <img src="https://i.postimg.cc/DzCjdSDP/location.png" alt="Email Icon" className="w-5 h-5" />
                  Chouiter, Marrakesh, Morocco
                </a>
              </p>
              <p>
                <a className="inline-flex gap-x-2 text-dark-blue hover:text-brown-dark" href="mailto:villachouitercenter@gmail.com">
                <img src="https://i.postimg.cc/nhGwrRG5/mail.png" alt="Email Icon" className="w-5 h-5" />
                  villachouitercenter@gmail.com
                </a>
              </p>
            </div>
          </div>
          {/* End Col */}
          <div className="col-span-2">
            <h4 className="font-semibold text-gray-900">Stay up to date</h4>
            <form>
              <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:gap-3 bg-brown rounded-md p-2">
                <div className="w-full">
                  <label htmlFor="hero-input" className="sr-only">
                    Search
                  </label>
                  <input
                    type="text"
                    id="hero-input"
                    name="hero-input"
                    className="py-3 px-4 block w-full border-transparent shadow-sm rounded-md focus:z-10 focus:border-brown-dark focus:ring-brown-dark"
                    placeholder="Enter your email"
                  />
                </div>
                <a
                  className="w-full sm:w-auto whitespace-nowrap inline-flex justify-center items-center gap-x-3 text-center bg-brown-dark/70 hover:bg-brown-dark border border-transparent text-dark-blue font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4"
                  href="#"
                >
                  Subscribe 
                </a>
              </div>
            </form>
          </div>
          {/* End Col */}
        </div>
        {/* End Grid */}
        <div className="mt-5 sm:mt-12 grid gap-y-2 sm:gap-y-0 sm:flex sm:justify-between sm:items-center">
          <div className="flex justify-between items-center">
            <p className="text-sm text-dark-blue">© 2023 Powered By Maroc Web Solutions.</p>
          </div>
          {/* End Col */}
          {/* Social Brands */}
          <div>
            <a
              className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-brown-dark hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-brown-dark focus:ring-offset-2 focus:ring-offset-brown-dark transition"
              href="https://www.airbnb.com/rooms/659909247089351068"
              target="_blank"
            >
            <img
              className="w-4 h-4"
              src="https://i.postimg.cc/kGtR06fC/airbnb-2.png"
              alt="icon"
            />
            </a>
            <a
              className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-brown-dark hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-brown-dark focus:ring-offset-2 focus:ring-offset-brown-dark transition"
              href="https://www.booking.com/hotel/ma/villa-chouiter-center-marrakech.html"
              target="_blank"
            >
              <img
                className="w-4 h-4"
                src="https://i.postimg.cc/C15q468z/booking.png"
                alt="icon"
              />
            </a>
            <a
              className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-brown-dark hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-brown-dark focus:ring-offset-2 focus:ring-offset-brown-dark transition"
              href="https://www.tripadvisor.com/VacationRentalReview-g293734-d26309324-Villa_Chouiter_Center-Marrakech_Marrakech_Safi.html"
              target="_blank"
            >
              <img
                className="w-4 h-4"
                src="https://i.postimg.cc/HjD8dYhy/social.png"
                alt="icon"
              />
            </a>
            <a
              className="inline-flex justify-center items-center gap-x-3.5 w-10 h-10 text-center text-brown-dark hover:bg-white/[.1] rounded-md focus:outline-none focus:ring-2 focus:ring-brown-dark focus:ring-offset-2 focus:ring-offset-brown-dark transition"
              href="https://wa.me/+212697992092"
              target="_blank"
            >
              <img
                className="w-4 h-4"
                src="https://i.postimg.cc/NMnrC78b/whatsapp-4.png"
                alt="icon"
              />
            </a>
          </div>
          {/* End Social Brands */}
        </div>
      </div>
    </footer>
  )
}

export default Footer