import { motion } from 'framer-motion';
import { FaArrowRightLong, FaGithub, FaLinkedin, FaTelegram, FaXTwitter } from 'react-icons/fa6';
import { GrLocation } from 'react-icons/gr';
import { Typing } from '../typing';
import { SiGmail } from 'react-icons/si';
import { EMAIL, GITHUB, LINKEDIN, TELEGRAM, X } from '../../../data/index'

export const H1Animation = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 1, ease: 'anticipate' }}
        >
            <h1 className="text-black font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center w-full sm:max-w-[900px]">Tech enthusiast with a passion for development. </h1>
        </motion.div>
    );
};

export const PAnimation = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 1.5, ease: 'anticipate' }}
        >
            <p className="text-center w-full sm:max-w-[1000px] text-gray-600 font-medium text-sm sm:text-base lg:text-lg">Over the years, I have honed my skills in frontend development and I take pride in delivering high-quality work that not only meets but exceeds client expectations. Let&apos;s collaborate and create something
                amazing Together!</p>
        </motion.div>
    );
};

export const LocationAnimation = () => {
    const textVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 1.5, ease: 'anticipate' }}
        >
            <div className="flex items-center gap-2 font-medium text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg">
                <GrLocation size={20} />
                <span>
                    Tashkent, Uzbekistan
                </span>
            </div>
        </motion.div>
    );
};

export const ButtonAnimation = () => {
    const textVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 1.5, ease: 'anticipate' }}
        >
            <button className="flex items-center gap-2 border border-black text-xs sm:text-sm lg:text-base px-3 py-1.5 lg:py-2 rounded-full bg-inherit text-black transition hover:bg-black hover:text-white">
                <a href={LINKEDIN} target="_blank">More about Me</a>
                <FaArrowRightLong />
            </button>
        </motion.div>
    );
};

export const AvatarAnimation = () => {
    const textVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 1, ease: 'anticipate' }}
        >
            <div className="rounded-full overflow-hidden w-44 h-44 sm:h-48 sm:w-48 lg:h-56 lg:w-56">
                 <img src="/avatar.jpg" alt="avatar" className="w-full h-full object-cover" />
            </div>

        </motion.div>
    );
};

export const TypingAnimation = () => {
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 1, ease: 'anticipate' }}
        >
            <div className="mt-3 mb-5 md:mt-5 md:mb-5 flex flex-col gap-0 items-center text-center text-base sm:text-xl text-gray-500 font-medium">
                <p>Hi there! I&apos;m</p>
                <Typing />
            </div>
        </motion.div>
    );
};

export const SocialsAnimation = () => {
    const variant1 = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };
    const variant2 = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };
    const variant3 = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };
    const variant4 = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };
    const variant5 = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="flex items-center gap-3 flex-wrap justify-center md:gap-4 font-medium text-gray-500 text-xs sm:text-base lg:text-xl">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variant1}
                transition={{ duration: 1.2, ease: 'backIn' }}
            >
                <a href={`mailto:${EMAIL}`} target="_blank" className="flex items-center gap-2 lg:gap-3 transition hover:text-black hover:underline">
                    <SiGmail size={25} className="h-6 w-6 sm:h-7 sm:w-7" />
                    Email
                </a>
            </motion.div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variant2}
                transition={{ duration: 1.3, ease: 'backIn' }}
            >
                <a href={TELEGRAM} target="_blank" className="flex items-center gap-2 lg:gap-3 transition hover:text-black hover:underline">
                    <FaTelegram size={25} className="h-6 w-6 sm:h-7 sm:w-7" />
                    Telegram
                </a>
            </motion.div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variant3}
                transition={{ duration: 1.4, ease: 'backIn' }}
            >
                <a href={GITHUB} target="_blank" className="flex items-center gap-2 lg:gap-3 transition hover:text-black hover:underline">
                    <FaGithub size={25} className="h-6 w-6 sm:h-7 sm:w-7" />
                    Github
                </a>
            </motion.div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variant4}
                transition={{ duration: 1.5, ease: 'backIn' }}
            >
                <a href={LINKEDIN} target="_blank" className="flex items-center gap-2 lg:gap-3 transition hover:text-black hover:underline">
                    <FaLinkedin size={25} className="h-6 w-6 sm:h-7 sm:w-7" />
                    Linkedin
                </a>
            </motion.div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={variant5}
                transition={{ duration: 1.6, ease: 'backIn' }}
            >
                <a href={X} target="_blank" className="flex items-center gap-2 lg:gap-3 transition hover:text-black hover:underline">
                    <FaXTwitter size={25} className="h-6 w-6 sm:h-7 sm:w-7" />
                    X
                </a>
            </motion.div>
        </div>
    );
};

