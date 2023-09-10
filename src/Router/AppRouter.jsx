import Navbar from "../components/Navbar"
import {Routes , Route} from "react-router-dom"
import Home from "../pages/Home"
import Projects from "../pages/Projects"
import About from "../pages/About"
import Contact from "../pages/Contact"
const AppRouter = () => {
  return (
    <>
    <Navbar />
    <Routes>
<Route path="/" element={<Home />} />
<Route path="/projects" element={<Projects />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />

    </Routes>
    
    
    </>
  )
}

export default AppRouter