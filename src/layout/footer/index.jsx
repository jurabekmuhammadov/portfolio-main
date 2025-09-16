import { BiCopyright } from "react-icons/bi"
import { BsSend, BsTelephone } from "react-icons/bs"
import { GrLocation } from "react-icons/gr"

const Footer = () => {
  return (
    <footer id="contact" className="bg-black mt-16 sm:mt-20 lg:mt-28 px-2 py-14 sm:py-16">
      <div className="container max-w-screen-xl mx-auto">
        <div className="flex flex-col gap-5">
          <div className="flex gap-10 flex-col justify-center items-center lg:flex-row lg:justify-between pb-8 border-b-2 border-gray-500 border-opacity-30">
            <div data-aos="fade-right" className="flex items-center lg:items-start flex-col gap-8 w-full lg:w-auto">
              <h1 className="text-white text-center lg:text-left text-3xl sm:text-4xl flex flex-col gap-1 lg:gap-2">Have an idea? <span className="underline">Let&apos;s talk about it</span></h1>
              <div className="flex flex-col-reverse lg:flex-row items-center gap-5">
                <img src="/telegram-qr.jpg" alt="my telegram qrcode" className="w-40 hidden lg:block rounded-lg" />
                <div className="flex flex-row items-center lg:items-start lg:flex-col gap-4 lg:gap-2">
                  <a target="" href="tel:+998990990754" className="flex items-center gap-1 font-medium text-gray-400 hover:text-white text-xs sm:text-sm md:text-base lg:text-lg">
                    <BsTelephone size={20} />
                    <span>
                      +998990990754
                    </span>
                  </a>
                  <a target="_blank" href="https://www.google.com/maps/place/tashkent+uzbekistan/data=!4m2!3m1!1s0x38ae8b0cc379e9c3:0xa5a9323b4aa5cb98?sa=X&ved=1t:155783&ictx=111" className="flex items-center gap-1 font-medium text-gray-400 hover:text-white text-xs sm:text-sm md:text-base lg:text-lg">
                    <GrLocation size={20} />
                    <span>
                      Tashkent, Uzbekistan
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div data-aos="fade-left" className="w-4/5 lg:w-2/5">
              <form className="flex flex-col gap-2 items-end text-xs sm:text-sm md:text-base">
                <input type="text" placeholder="Name" className="bg-gray-400 bg-opacity-25 px-3 py-2 text-white outline-none focus:outline-white rounded-xl w-full lg:w-7/12" />
                <input type="email" placeholder="Email" className="bg-gray-400 bg-opacity-25 px-3 py-2 text-white outline-none focus:outline-white rounded-xl w-full lg:w-10/12" />
                <textarea name="message" id="message" cols="30" rows="5" placeholder="Message" className="resize-none bg-gray-400 bg-opacity-25 px-3 py-2 text-white outline-none focus:outline-white rounded-xl w-full"></textarea>
                <button className="w-full flex items-center justify-center gap-2 border border-white text-xs sm:text-sm md:text-base px-3 py-2 rounded-xl bg-inherit text-white transition hover:bg-white hover:text-black">
                  Send Message
                  <BsSend className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row items-center justify-between">
            <p className="sm:text-gray-400 text-sm underline sm:no-underline text-white">Made by Jurabek Mukhammadov</p>
            <p className="text-gray-400 text-sm flex items-center gap-1"><BiCopyright /> Copyright 2025. All rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer