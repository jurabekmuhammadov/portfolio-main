import { useEffect } from "react"
import Experiences from "./components/experiences"
import Hero from "./components/hero"
import Services from "./components/services"
import TechSkills from "./components/tech-skills"
import Works from "./components/works"
import Footer from "./layout/footer"
import Header from "./layout/header"
import Aos from "aos"

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-in-out-quad',
      once: true,
    });
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <TechSkills />
      <Experiences />
      <Works />
      <Footer />
    </>
  )
}

export default App