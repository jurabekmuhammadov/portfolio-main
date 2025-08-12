import { useState } from 'react'
import { techSkills } from '../../../data'
import { PiSealCheckLight } from 'react-icons/pi'

const TechSkills = () => {
    const [showMore, setShowMore] = useState(false);
    return (
        <section id='tech-skills' className='mt-16 sm:mt-20 lg:mt-28 px-3'>
            <div className="container max-w-screen-xl mx-auto ">
                <div className='flex flex-col items-center gap-10 sm:gap-14 md:gap-20'>
                    <div className="w-full text-center">
                        <h1 data-aos="zoom-out-down" className="font-medium text-2xl sm:text-3xl">My Tech Skills</h1>
                    </div>
                    <div data-aos="fade-up" className='flex flex-col items-center gap-6 sm:gap-8 md:gap-10 w-full'>
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full xl:flex xl:flex-wrap gap-3 sm:gap-5 xl:justify-center'>

                            {showMore ?
                                techSkills.map((item, i) => (
                                    <div key={i} className='w-full xl:w-1/6 flex items-center gap-3 border rounded-xl p-2 md:p-4 transition hover:bg-black hover:bg-opacity-10'>
                                        <div className='hidden min-[400px]:flex w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12'>
                                            <img src={item.img} alt={item.name} className='w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 xl:w-full xl:h-full object-cover rounded-md sm:rounded-lg' />
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <h3 className='text-sm md:text-base font-medium'>{item.name}</h3>
                                            <div className='flex items-center gap-1'>
                                                <PiSealCheckLight className='w-4 h-4' />
                                                <p className='text-xs sm:text-sm text-gray-500 font-medium'>{item.level}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                : (
                                    techSkills.slice(0, 10).map((item, i) => (
                                        <div key={i} className='w-full xl:w-1/6 flex items-center gap-3 border rounded-xl p-2 md:p-4 transition hover:bg-black hover:bg-opacity-10'>
                                            <div className=' min-[400px]:flex w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center'>
                                                <img src={item.img} alt={item.name} className='w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 xl:w-full xl:h-full object-cover rounded-md sm:rounded-lg' />
                                            </div>
                                            <div className='flex flex-col gap-1'>
                                                <h3 className='text-sm md:text-base font-medium'>{item.name}</h3>
                                                <div className='flex items-center gap-1'>
                                                    <PiSealCheckLight className='w-4 h-4' />
                                                    <p className='text-xs sm:text-sm text-gray-500 font-medium'>{item.level}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                )}
                        </div>
                        <button className='flex items-center gap-2 border border-black text-xs sm:text-sm lg:text-base px-3 py-1.5 lg:py-2 rounded-full bg-inherit text-black transition hover:bg-black hover:text-white' onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TechSkills