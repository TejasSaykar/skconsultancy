import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import { Routes, Route, useLocation } from "react-router-dom"
import Overview from './pages/Overview'
import Joborder from './pages/Joborder'
import FAQ from './pages/FAQ'
import Testimonials from './pages/Testimonials'
import Navbar from './components/Navbar'
import "./assets/style.css"
import "./assets/animate.css"
import "./assets/bootstrap.css"
import "./assets/color.css"
import "./assets/flaticon.css"
import "./assets/font-awesome-all.css"
import "./assets/jquery.fancybox.min.css"
import "./assets/nice-select.css"
import "./assets/owl.css"
import "./assets/responsive.css"
import "./assets/rtl.css"
import Footer from './components/Footer'


function App() {

  const pathname = useLocation().pathname;
  console.log(pathname)

  return (
    <>
      <div className={`mb-32`}>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/overview' element={ <Overview /> } />
        <Route path='/jobseekers' element={ <Joborder /> } />
        <Route path='/faq' element={ <FAQ /> } />
        <Route path='/testimonials' element={ <Testimonials /> } />
      </Routes>
      <Footer/>
    

    </>
  )
}

export default App
