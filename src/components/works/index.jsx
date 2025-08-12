import { useState } from "react";
import { works } from "../../../data";
import ProjectCard from "../cards/project-card";

const Works = () => {
    const [showMore, setShowMore] = useState(false)
    return (
        <section id="my-works" className="mt-16 sm:mt-20 lg:mt-28 px-3">
            <div className="container max-w-screen-xl mx-auto">
                <div className="flex flex-col gap-10 sm:gap-14 md:gap-20">
                    <div className="w-full text-center">
                        <h1 data-aos="zoom-out-down" className="font-medium text-2xl sm:text-3xl">My Works</h1>
                    </div>
                    <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 w-full">
                        <div className="grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-5 xl:gap-7">
                            {showMore ?
                                works.map((item) => (
                                    <ProjectCard
                                        key={item.id}
                                        id={item.id}
                                        img={item.img}
                                        name={item.name}
                                        category={item.category}
                                        description={item.description}
                                        github={item.github}
                                        live={item.live}
                                        tech_stacks={item.tech_stacks}
                                    />
                                ))
                                :
                                works.slice(0, 6).map((item) => (
                                    <ProjectCard
                                        key={item.id}
                                        id={item.id}
                                        img={item.img}
                                        name={item.name}
                                        category={item.category}
                                        description={item.description}
                                        github={item.github}
                                        live={item.live}
                                        tech_stacks={item.tech_stacks}
                                    />
                                ))
                            }
                        </div>
                        <button className='flex items-center gap-2 border border-black text-xs sm:text-sm lg:text-base px-3 py-1.5 lg:py-2 rounded-full bg-inherit text-black transition hover:bg-black hover:text-white' onClick={() => setShowMore(!showMore)}>{showMore ? "Show less" : "Show more"}</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Works;
