import { useState } from "react"
import { FaCode, FaShopify } from "react-icons/fa6"
import { GrOptimize } from "react-icons/gr"
import { LuMonitorSmartphone } from "react-icons/lu"
import { MdOutlineContentCopy, MdOutlineDesignServices } from "react-icons/md"

const Services = () => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        const text = "jorabekmuhammadov7@gmail.com";
        navigator.clipboard.writeText(text);
        setCopied(true);
    };
    return (
        <section id="services" className="mt-16 sm:mt-20 lg:mt-28 px-3">
            <div className="container max-w-screen-xl mx-auto">

                <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-20">

                    <div className="w-full text-center">
                        <h1 data-aos="zoom-out-down" className="font-medium text-2xl sm:text-3xl">My Services</h1>
                    </div>

                    <div className="flex flex-col lg:flex-row lg:justify-between gap-10 md:gap-14 lg:gap-8 2xl:gap-14">

                        <div data-aos="fade-right" className="flex flex-col gap-5 md:gap-5 w-full lg:w-1/2">

                            <div className="flex items-center gap-3 md:gap-5 lg:gap-3">

                                <div className="flex items-center justify-center h-auto w-auto p-2.5 sm:p-3 rounded-full bg-black">
                                    <LuMonitorSmartphone color="white" className="w-5 h-5 sm:h-7 sm:w-7" />
                                </div>

                                <div className="flex flex-col gap-1 sm:gap-2">
                                    <h1 className="font-medium text-lg sm:text-xl">Responsive Web Design</h1>
                                    <ul className="flex flex-col gap-1 w-full xl:w-[600px] text-xs sm:text-base">
                                        <li className="text-gray-600">
                                            Ensuring your website looks and works flawlessly on all devices, including smartphones and tablets, while creating visually appealing, custom designs that reflect your brand identity.
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>

                            <div className="flex items-center gap-3 md:gap-5 lg:gap-3">

                                <div className="flex items-center justify-center h-auto w-auto p-2.5 sm:p-3 rounded-full bg-black">
                                    <FaCode color="white" className="w-5 h-5 sm:h-7 sm:w-7" />
                                </div>

                                <div className="flex flex-col gap-1 sm:gap-2">
                                    <h1 className="font-medium text-lg sm:text-xl">Web Development</h1>
                                    <ul className="flex flex-col gap-1 w-full xl:w-[600px] text-xs sm:text-base">
                                        <li className="text-gray-600">
                                            Building clean, efficient, and maintainable code with the latest web technologies while using popular frameworks like React.js and Next.js to create dynamic, interactive user interfaces.
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>

                            <div className="flex items-center gap-3 md:gap-5 lg:gap-3">

                                <div className="flex items-center justify-center h-auto w-auto p-2.5 sm:p-3 rounded-full bg-black">
                                    <GrOptimize color="white" className="w-5 h-5 sm:h-7 sm:w-7" />
                                </div>

                                <div className="flex flex-col gap-1 sm:gap-2">
                                    <h1 className="font-medium text-lg sm:text-xl">Performance Optimization</h1>
                                    <ul className="flex flex-col gap-1 w-full xl:w-[600px] text-xs sm:text-base">
                                        <li className="text-gray-600">
                                            Improving site performance for faster load times and a smoother user experience while implementing SEO-friendly practices to boost search engine visibility.
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>

                            <div className="flex items-center gap-3 md:gap-5 lg:gap-3">

                                <div className="flex items-center justify-center h-auto w-auto p-2.5 sm:p-3 rounded-full bg-black">
                                    <MdOutlineDesignServices color="white" className="w-5 h-5 sm:h-7 sm:w-7" />
                                </div>

                                <div className="flex flex-col gap-1 sm:gap-2">
                                    <h1 className="font-medium text-lg sm:text-xl">UI/UX Design</h1>
                                    <ul className="flex flex-col gap-1 w-full xl:w-[600px] text-xs sm:text-base">
                                        <li className="text-gray-600">
                                            Creating intuitive, visually appealing interfaces that enhance user interaction while using user research and testing to guide design decisions and improve usability.
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>

                            <div className="flex items-center gap-3 md:gap-5 lg:gap-3">

                                <div className="flex items-center justify-center h-auto w-auto p-2.5 sm:p-3 rounded-full bg-black">
                                    <FaShopify color="white" className="w-5 h-5 sm:h-7 sm:w-7" />
                                </div>

                                <div className="flex flex-col gap-1 sm:gap-2">
                                    <h1 className="font-medium text-lg sm:text-xl">E-commerce Development</h1>
                                    <ul className="flex flex-col gap-1 w-full xl:w-[600px] text-xs sm:text-base">
                                        <li className="text-gray-600">
                                            Integrating secure, reliable payment gateways for smooth transactions while setting up and customizing e-commerce platforms like Shopify, WooCommerce, or custom solutions.
                                        </li>
                                    </ul>
                                </div>
                                
                            </div>
                            
                        </div>

                        <div data-aos="fade-left" className="flex flex-col gap-10 w-full lg:w-1/2">
                            <h3 className="text-gray-600 text-center text-sm sm:text-base lg:text-left">
                                Pursuing a career as a Frontend Developer, I prioritize client collaboration by fostering open communication, maintain flexibility with time zone differences to accommodate clients, and bring a keen eye for exquisite design to my development work.
                            </h3>
                            <div className="flex gap-10 justify-center lg:justify-start">
                                <div className="flex flex-col items-center gap-1 sm:gap-2">
                                    <span className="text-black text-3xl sm:text-4xl font-semibold">8+</span>
                                    <span className="text-gray-600 text-sm sm:text-base md:text-lg text-center">Month experience</span>
                                </div>
                                <div className="flex flex-col items-center gap-1 sm:gap-2">
                                    <span className="text-black text-3xl sm:text-4xl font-semibold">20+</span>
                                    <span className="text-gray-600 text-sm sm:text-base md:text-lg text-center">Successfully completed projects</span>
                                </div>
                            </div>
                            <div className="w-full h-60 min-[400px]-h-72 sm:h-80 md:h-96 lg:h-full bg-black flex flex-col items-start justify-end gap-7 md:gap-10 p-7 md:p-10 rounded-3xl bg-[url('/b1.svg')] bg-no-repeat bg-cover bg-left">
                                <h1 className="text-white font-semibold text-xl sm:text-2xl">Do you want to start a project together?</h1>
                                <button className="flex items-center gap-1 text-white p-1.5 sm:p-2 text-xs sm:text-sm rounded-lg transition border border-white hover:bg-white hover:text-black"
                                    title={copied ? "Email is Copied!" : "Copy my email address"}
                                    onClick={handleCopy}
                                >
                                    <MdOutlineContentCopy />
                                    <span>Copy my email address</span>
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Services