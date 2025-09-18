import { useState } from "react"
import { BsDownload, BsSend } from "react-icons/bs"
import { CgClose } from "react-icons/cg"
import { MdOutlineMenuOpen } from "react-icons/md"
import { navItems, TELEGRAM } from "../../../data"
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const variant = {
    hidden: { opacity: 0, y: -70 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={variant}
      transition={{ duration: 1, ease: 'anticipate' }}
      style={{
        position: "sticky", top: "0", backgroundColor: "white", zIndex: "1000",
        borderBottom: "1px solid rgb(229 231 235)", padding: "16px 12px 16px 12px"
      }}
    >
      <header>
        <div className="container max-w-screen-xl mx-auto flex justify-between items-center gap-5">

          <div className="flex items-center gap-1.5 bg-green-400 bg-opacity-30 py-1 px-2.5 sm:py-1.5 sm:px-3 text-xs sm:text-sm rounded-full">
            <span className="w-1.5 h-1.5 bg-green-700 rounded-full" />
            <span className="text-green-700 font-medium">Available for work</span>
          </div>

          <nav className="hidden min-[930px]:block">
            <ul className="flex items-center gap-6">
              {navItems.map((item, i) => (
                <li key={i}><a className="text-gray-500 font-medium transition hover:text-black text-sm lg:text-base" href={item.href}>{item.name}</a></li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3 sm:gap-5">
            <div className="flex items-center gap-2 text-xs sm:text-sm">
              <a href={TELEGRAM} target="_blank" className="sm:font-medium hidden min-[400px]:flex items-center gap-2 px-3 py-1.5 lg:py-2 rounded-full bg-inherit text-black transition hover:bg-black hover:text-white">
                Hire me
                <BsSend className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="/cv-19.09.pdf" download className="sm:font-medium flex items-center gap-2 px-3 py-1.5 lg:py-2 rounded-full bg-black text-white transition hover:bg-black hover:bg-opacity-85">
                <span className="hidden lg:block">Download</span> <span>CV</span>
                <BsDownload className="w-4 h-4 sm:w-5 sm:h-5"/>
              </a>
            </div>
            {isOpen ? (
              <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-center lg:hidden">
                <CgClose className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            ) : (
              <button onClick={() => setIsOpen(!isOpen)} className="flex items-center justify-center min-[930px]:hidden">
                <MdOutlineMenuOpen className="w-7 h-7 sm:w-8 sm:h-8" />
              </button>
            )}
          </div>
        </div>
        <nav className={`border-t border-gray-200 py-2 sm:py-5 px-3 fixed top-[60px] sm:top-[65px] bg-white left-0 right-0 border-b w-screen bg-gray- z-10 min-[930px]:hidden transition ${isOpen ? "block" : "hidden"}`}>
          <div className="container max-w-screen-xl mx-auto">
            <ul className="flex flex-col justify-center gap-1 sm:gap-4">
              {navItems.map((item, i) => (
                <li key={i}><a className="text-gray-500 font-medium transition text-sm sm:text-base hover:text-black" href={item.href}>{item.name}</a></li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </motion.header>
  )
}

export default Header