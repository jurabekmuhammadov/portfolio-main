import OppositeContentTimeline from "../timeline"

const Experiences = () => {
    return (
        <section id="experiences" className="mt-16 sm:mt-20 lg:mt-28 px-3">
            <div className="container max-w-screen-xl mx-auto">
                <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-20">
                    <div className="w-full text-center">
                        <h1 data-aos="zoom-out-down" className="font-medium text-2xl sm:text-3xl">My Experiences</h1>
                    </div>
                    <div className="flex items-center justify-center">
                        <OppositeContentTimeline />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experiences