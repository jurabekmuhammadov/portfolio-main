import { AvatarAnimation, ButtonAnimation, H1Animation, LocationAnimation, PAnimation, SocialsAnimation, TypingAnimation } from "../hero-animation"

const Hero = () => {
    return (
        <section id="about" className="mt-12 px-3">
            <div className="container max-w-screen-xl mx-auto">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col items-center">
                        <div>
                            <AvatarAnimation />
                        </div>
                        <TypingAnimation />
                        <div className="flex flex-col items-center gap-5 lg:gap-10">
                            <H1Animation />
                            <PAnimation />
                        </div>
                        <div className="flex items-center justify-around w-full my-10 sm:my-12 md:my-20">
                            <LocationAnimation />
                            <ButtonAnimation />
                        </div>
                        <SocialsAnimation />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero