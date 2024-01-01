import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5"
import Menu from './Menu'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io"


const Navbar = () => {

  const [menOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen((prev) => !prev);
  }

  return (
    <div className='w-full h-40 fixed top-0 z-10'>
      <div className='flex flex-col justify-between items-center bg-[#55343c] text-white'>
        <div className='flex relative flex-col w-full justify-center md:bg-[#55343c] md:py-4'>
          <div className="top bg-[#55343c] h-16 flex items-center justify- md:items-start py-2 px-10 text-white">
            <Link to={"/"} className='flex items-center justify-center'><img src="/img/sklogo.png" alt="" className='md:absolute md:-top-4 md:left-4 relative flex top-5' width={80} height={50} /></Link>
            <div className='hidden md:flex text-white gap-4 ml-24 text-lg font-semibold mt-2'>
              <Link className='hover:text-red-500' style={ { textDecoration: "none" } } to={ "/" }>Home</Link>
              <Link className='hover:text-red-500' style={ { textDecoration: "none" } } to={ "/about" }>About</Link>
              <div className='relative flex items-center  justify-center cursor-pointer' onClick={handleMenu}>
                <h2 className='text-white hover:text-red-500'>Employee</h2>
                <div className='text-lg'>
                  <IoIosArrowDown />
                </div>
                {menOpen && <div className='absolute flex flex-col gap-4 w-52 py-3 left-1 top-20 px-6 z-10 bg-[#462b34]'>
                  <Link to={"/overview"} style={{textDecoration: "none"}} className='hover:text-red-500'>Overview</Link>
                  <Link to={"/jobseekers"} style={{textDecoration: "none"}} className='hover:text-red-500'>Place Job Order</Link>
                  <Link to={"/faq"} style={{textDecoration: "none"}} className='hover:text-red-500'>FAQ's</Link>
                  <Link to={"/testimonials"} style={{textDecoration: "none"}} className='hover:text-red-500'>Testimonials</Link>
                </div>}
              </div>
              <Link className='hover:text-red-500' style={ { textDecoration: "none" } } to={ "/jobseekers" }>Job Seekers</Link>
            </div>
          </div>
          <div className="bottom md:absolute md:text-white md:right-6 flex justify-between px-4 py-4 items-center">
            <div className='flex gap-5 items-center justify-center'>
              <div className='text-3xl cursor-pointer'><IoSearch /></div>
              <button className='py-3 bg-red-400 px-6 rounded-md hover:bg-white hover:text-red-500 hover:ring-1 hover:ring-red-500 font-semibold hover:transition-all'>APPOINTMENT</button>
            </div>
            <div className='md:hidden h-[]70vh]'>
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
