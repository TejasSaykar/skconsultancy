import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5"
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io"
import Menu from "../components/Menu"
import { PiUmbrellaLight } from "react-icons/pi"
import { RiFileListLine } from "react-icons/ri"
import { GiWorld } from "react-icons/gi"
import { GrRestroomWomen } from "react-icons/gr"
import { RxPerson } from "react-icons/rx"
import { BiRightArrowAlt } from "react-icons/bi"

const Home = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenu = () => {
        setMenuOpen((prev) => !prev)
    }

    console.log(menuOpen)

    return (
        <>
            {/* <div className='home bg-gradient-to-r flex flex-col from-orange-800 to-amber-950 text-white h-screen'>
                <div className="nav pt-8 px-12">
                    <div className='flex justify-between items-center'>
                        <div className='logo flex gap-1 relative items-center justify-center'>
                            <img src="/img/logo.png" alt="" /> */}
            {/* <div className='absolute left-12'>
                            <span className='text-xl font-bold'>Eazy</span><br />
                            <span className='text-xl font-bold'>Recruitz</span>
                        </div> */}
            {/* </div>
                        <div className='flex gap-8 items-center justify-center'>
                            <div className='text-2xl cursor-pointer'><IoSearch /></div>
                            <button className='py-4 px-10 ring-1 ring-red-400 rounded-sm font-semibold hover:bg-white hover:text-red-500'>APPOINTMENT</button>
                        </div>
                    </div>
                    <div className="hidden menu md:flex gap-14 w-1/2 m-auto relative top-14 text-xl">
                        <Link to={ "/" }>Home</Link>
                        <Link to={ "/about" }>About</Link>
                        <div className='emp relative'>
                            <div className='flex items-center cursor-pointer' onClick={ handleMenu }>
                                <h3>Employee</h3>
                                <IoIosArrowDown className='mt-2 ml-1 cursor-pointer' />
                            </div>
                            { menuOpen && <div className='absolute flex flex-col gap-4 w-72 bg-orange-800 py-2 px-6 top-16'>
                                <Link to={ "/overview" }>Overview</Link>
                                <hr />
                                <Link to={ "/joborder" }>Place Job Order</Link>
                                <hr />
                                <Link to={ "/faq" }>FAQ's</Link>
                                <hr />
                                <Link to={ "/testimonials" }>Testimonials</Link>
                                <hr />
                            </div> }
                        </div>
                        <Link to={ "/jobseekers" }>Job Seekers</Link>
                    </div>
                    <div className='md:hidden'>
                        <Menu />
                    </div>
                </div>
                <div className='md:mt-36 w-full md:w-1/2 m-auto pl-10 flex flex-col justify-center items-start gap-6'>
                    <h1 className='text-5xl md:text-7xl font-bold'>
                        RIGHT PLACE
                    </h1>
                    <h3 className='text-3xl md:text-4xl font-semibold'>Let Us Look For You</h3>
                    <p className='text-sm md:text-lg'>On the other hand we denounce with rightenous indignation and dislike men how are so beguiled.</p>
                    <button className='py-4 px-10 bg-white text-gray-600 text-sm font-medium rounded-md'>HIRE NOW</button>
                </div>
            </div>
            <div className='bg-pink-100 w-full p-2 flex flex-col md:flex md:flex-row gap-4 items-center justify-center'>
                <div className='flex-1'>
                    <img src="/img/hiring.avif" className='w-full' alt="" />
                </div>
                <div className='flex-1 px-5 py-8 flex flex-col gap-7'>
                    <span className='text-red-500 font-semibold'>ABOUT OUR AGENCY</span>
                    <h2 className='text-5xl font-semibold text-gray-700'>Reliable & Cost Efficiant Recruitment Agency</h2>
                    <h4 className='text-lg font-normal text-gray-600'>Long established fact that reader will be distracted the readable work of pages when looking at its layout. The point using lorem ipsum seds has a more-or-less normal distribution of letters.</h4>
                    <div className='flex gap-8'>
                        <div className='flex gap-3 items-center'>
                            <span className='text-6xl text-gray-700'><RiFileListLine /></span>
                            <h3 className='text-2xl font-semibold text-gray-800'>Understand Your Needs</h3>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <span className='text-6xl text-gray-700'><PiUmbrellaLight /></span>
                            <h3 className='text-2xl font-semibold text-gray-800'>Find The Pirfect Candidate</h3>
                        </div>
                    </div>
                    <button className='flex items-start py-4 px-8 bg-red-500 w-44 rounded-md text-white font-semibold hover:bg-red-600'>LEARN MORE</button>
                </div>
            </div> */}

            {/* <section className="banner-section style-three">
                <div className="banner-carousel owl-theme owl-carousel owl-dots-none">
                    <div className="slide-item">
                        <div className="image-layer" style={ { backgroundImage: "url(./img/images/banner/banner-7.jpg)" } }></div>
                        <div className="pattern-layer">
                            <div className="pattern-1" style={ { backgroundImage: "url(./img/images/shape/pattern-26.png)" } }></div>
                            <div className="pattern-2" style={ { backgroundImage: "url(./img/images/shape/pattern-27.png)" } }></div>
                            <div className="pattern-3" style={ { backgroundImage: "url(./img/images/shape/pattern-28.png)" } }></div>
                            <div className="pattern-4" style={ { backgroundImage: "url(./img/images/shape/pattern-29.png)" } }></div>
                            <div className="pattern-5" style={ { backgroundImage: "url(./img/images/shape/pattern-30.png)" } }></div>
                        </div>
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-10 col-md-12 col-sm-12 offset-lg-2 content-column">
                                    <div className="content-box">
                                        <h1>HR solution</h1>
                                        <h2>Inspired Partnerships</h2>
                                        <p>On the other hand, we denounce with righteous indignation and <br />dislike men who are so beguiled.</p>
                                        <div className="btn-box">
                                            <a href="index-2.html" className="btn-one">Hire Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="image-layer" style={ { backgroundImage: "url(/img/images/banner/banner-8.jpg)" } }></div>
                        <div className="pattern-layer">
                            <div className="pattern-1" style={ { backgroundImage: "url(/img/images/shape/pattern-26.png)" } }></div>
                            <div className="pattern-2" style={ { backgroundImage: "url(/img/images/shape/pattern-27.png)" } }></div>
                            <div className="pattern-3" style={ { backgroundImage: "url(/img/images/shape/pattern-28.png)" } }></div>
                            <div className="pattern-4" style={ { backgroundImage: "url(/img/images/shape/pattern-29.png)" } }></div>
                            <div className="pattern-5" style={ { backgroundImage: "url(/img/images/shape/pattern-30.png)" } }></div>
                        </div>
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-10 col-md-12 col-sm-12 offset-lg-2 content-column">
                                    <div className="content-box">
                                        <h1>Right place</h1>
                                        <h2>Let Us Look For You</h2>
                                        <p>On the other hand, we denounce with righteous indignation and <br />dislike men who are so beguiled.</p>
                                        <div className="btn-box">
                                            <a href="index-2.html" className="btn-one">Hire Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item">
                        <div className="image-layer" style={ { backgroundImage: "url(/img/images/banner/banner-9.jpg)" } }></div>
                        <div className="pattern-layer">
                            <div className="pattern-1" style={ { backgroundImage: "url(/img/images/shape/pattern-26.png)" } }></div>
                            <div className="pattern-2" style={ { backgroundImage: "url(/img/images/shape/pattern-27.png)" } }></div>
                            <div className="pattern-3" style={ { backgroundImage: "url(/img/images/shape/pattern-28.png)" } }></div>
                            <div className="pattern-4" style={ { backgroundImage: "url(/img/images/shape/pattern-29.png)" } }></div>
                            <div className="pattern-5" style={ { backgroundImage: "url(/img/images/shape/pattern-30.png)" } }></div>
                        </div>
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-lg-10 col-md-12 col-sm-12 offset-lg-2 content-column">
                                    <div className="content-box">
                                        <h1>your Guide</h1>
                                        <h2>Placing People First</h2>
                                        <p>On the other hand, we denounce with righteous indignation and <br />dislike men who are so beguiled.</p>
                                        <div className="btn-box">
                                            <a href="index-2.html" className="btn-one">Hire Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="social-box">
                    <ul className="social-links">
                        <li>Follow :</li>
                        <li><a href="index-3.html">Fb</a></li>
                        <li><a href="index-3.html">Tw</a></li>
                        <li><a href="index-3.html">In</a></li>
                    </ul>
                </div>
                <div className="mail-box"><a href="mailto:info@example.com">info@example.com</a></div>
            </section> */}

            {/* <div className="loader-wrap">
                <div className="preloader"><div className="preloader-close">Preloader Close</div></div>
                <div className="layer layer-one"><span className="overlay"></span></div>
                <div className="layer layer-two"><span className="overlay"></span></div>
                <div className="layer layer-three"><span className="overlay"></span></div>
            </div> */}


            {/* <!-- search-popup --> */ }
            <div id="search-popup" className="search-popup">
                <div className="close-search"><i className="flaticon-close"></i></div>
                <div className="popup-inner">
                    <div className="overlay-layer"></div>
                    <div className="search-form">
                        <form method="post" action="https://st.ourhtmldemo.com/new/Eazyrecruitz/index.html">
                            <div className="form-group">
                                <fieldset>
                                    <input type="search" className="form-control" name="search-input" value="" placeholder="Search Here" required />
                                    <input type="submit" value="Search Now!" className="theme-btn style-four" />
                                </fieldset>
                            </div>
                        </form>
                        <h3>Recent Search Keywords</h3>
                        <ul className="recent-searches">
                            <li><a href="index.html">Finance</a></li>
                            <li><a href="index.html">Idea</a></li>
                            <li><a href="index.html">Service</a></li>
                            <li><a href="index.html">Growth</a></li>
                            <li><a href="index.html">Plan</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- search-popup end --> */ }


            {/* <!-- main header --> */ }
            {/* <header className="main-header">
                
                <div className="header-lower">
                    <div className="outer-box clearfix">
                        <div className="menu-area pull-left clearfix">
                            <figure className="logo-box"><a href="index.html"><img src="./img/images/logo.png" alt="" /></a></figure>
                            <div className="mobile-nav-toggler">
                                <i className="icon-bar"></i>
                                <i className="icon-bar"></i>
                                <i className="icon-bar"></i>
                            </div>
                        </div>
                        <ul className="menu-right-content pull-right clearfix flex items-center">
                            <li>
                                <div className="search-btn">
                                    <button type="button" className="search-toggler"><IoSearch /></button>
                                </div>
                            </li>
                            <li>
                                <div className="language">
                                    <div className="bg-white py-3 px-3 flex flex-row items-center rounded-sm gap-2">
                                        <div>
                                            <GiWorld />
                                        </div>
                                        <span className="txt">EN</span>
                                        <div>
                                            <IoIosArrowDown />
                                        </div>
                                    </div>
                                    <div className="lang-dropdown">
                                        <ul>
                                            <li><a href="index.html">German</a></li>
                                            <li><a href="index.html">Italian</a></li>
                                            <li><a href="index.html">Chinese</a></li>
                                            <li><a href="index.html">Russian</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="index.html" className="theme-btn-one">Appointment</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="sticky-header">
                    <div className="outer-box clearfix">
                        <div className="menu-area pull-left">
                            <figure className="logo-box"><a href="index.html"><img src="/img/images/small-logo.png" alt="" /></a></figure>
                            <nav className="main-menu clearfix">
                            </nav>
                        </div>
                        <ul className="menu-right-content pull-right clearfix">
                            <li>
                                <div className="search-btn">
                                    <button type="button" className="search-toggler"><i className="flaticon-loupe-1"></i></button>
                                </div>
                            </li>
                            <li>
                                <div className="language">
                                    <div className="lang-btn">
                                        <i className="icon flaticon-planet-earth"></i>
                                        <span className="txt">EN</span>
                                        <span className="arrow fa fa-angle-down"></span>
                                    </div>
                                    <div className="lang-dropdown">
                                        <ul>
                                            <li><a href="index.html">German</a></li>
                                            <li><a href="index.html">Italian</a></li>
                                            <li><a href="index.html">Chinese</a></li>
                                            <li><a href="index.html">Russian</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="index.html" className="theme-btn-one">Appointment</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header> */}
            {/* <!-- main-header end --> */ }

            {/* <!-- Mobile Menu  --> */ }
            <div className="mobile-menu">
                <div className="menu-backdrop"></div>
                <div className="close-btn"><i className="fas fa-times"></i></div>
                <nav className="menu-box">
                    <div className="nav-logo"><a href="index.html"><img src="./img/images/logo-2.png" alt="" title="" /></a></div>
                    <div className="menu-outer">
                    </div>
                    <div className="contact-info">
                        <h4>Contact Info</h4>
                        <ul>
                            <li>Chicago 12, Melborne City, USA</li>
                            <li><a href="tel:+8801682648101">+88 01682648101</a></li>
                            <li><a href="mailto:info@example.com">info@example.com</a></li>
                        </ul>
                    </div>
                    <div className="social-links">
                        <ul className="clearfix">
                            <li><a href="index.html"><span className="fab fa-twitter"></span></a></li>
                            <li><a href="index.html"><span className="fab fa-facebook-square"></span></a></li>
                            <li><a href="index.html"><span className="fab fa-pinterest-p"></span></a></li>
                            <li><a href="index.html"><span className="fab fa-instagram"></span></a></li>
                            <li><a href="index.html"><span className="fab fa-youtube"></span></a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            {/* <!-- End Mobile Menu --> */ }


            {/* <!-- banner-section --> */ }
            {/* <section className="banner-section style-one h-full w-full">
                <div className="banner-carousel owl-theme owl-carousel owl-dots-none owl-nav-none">
                    <div className="slide-item style-one">
                        <div className="image-layer" style={ { backgroundImage: "url(./img/images/banner/banner-1.jpg)" } }></div>
                        <div className="pattern-layer">
                            <div className="pattern-1" style={ { backgroundImage: "url(./img/images/shape/pattern-1.png)" } }></div>
                            <div className="pattern-2" style={ { backgroundImage: "url(./img/images/shape/pattern-2.png)" } }></div>
                        </div>
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-xl-6 col-lg-12 col-md-12 content-column">
                                    <div className="content-box">
                                        <span>Engaged with Staffing</span>
                                        <h1>Partnering <br />You for Your <br />Human Resource Require.</h1>
                                        <p>By way of us you can achieve what you want.</p>
                                        <div className="btn-box">
                                            <a href="index.html" className="theme-btn-two">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item style-two">
                        <div className="image-layer" style={ { backgroundImage: "url(./img/images/banner/banner-2.jpg)" } }></div>
                        <div className="pattern-layer">
                            <div className="pattern-1" style={ { backgroundImage: "url(./img/images/shape/pattern-3.png)" } }></div>
                            <div className="pattern-2" style={ { backgroundImage: "url(./img/images/shape/pattern-4.png)" } }></div>
                        </div>
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-xl-6 col-lg-12 col-md-12 offset-xl-6 content-column">
                                    <div className="content-box">
                                        <span>Engaged with Staffing</span>
                                        <h1>Shining a Light on Your HR <br />and Employment Law Issues</h1>
                                        <p>By way of us you can achieve what you want.</p>
                                        <div className="btn-box">
                                            <a href="index.html" className="theme-btn-two">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slide-item style-one">
                        <div className="image-layer" style={ { backgroundImage: "url(/img/images/banner/banner-3.jpg)" } }></div>
                        <div className="pattern-layer">
                            <div className="pattern-1" style={ { backgroundImage: "url(/img/images/shape/pattern-1.png)" } }></div>
                            <div className="pattern-2" style={ { backgroundImage: "url(/img/images/shape/pattern-2.png)" } }></div>
                        </div>
                        <div className="auto-container">
                            <div className="row clearfix">
                                <div className="col-xl-7 col-lg-12 col-md-12 content-column">
                                    <div className="content-box">
                                        <span>Engaged with Staffing</span>
                                        <h1>Eazy Recruitz <br />Provide Employment Opportunities</h1>
                                        <p>By way of us you can achieve what you want.</p>
                                        <div className="btn-box">
                                            <a href="index.html" className="theme-btn-two">Learn More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <section className='hidden w-full h-20 md:flex items-center'>
                <div className='uppercase w-1/2 m-auto px-10 flex gap-8'>
                    <Link to={ "/" } className='hover:text-red-500 font-semibold' style={ { textDecoration: "none" } }>Home</Link>
                    <Link to={ "/about" } className='hover:text-red-500 font-semibold' style={ { textDecoration: "none" } }>About</Link>
                    <div className='emp relative'>
                        <div className='flex items-center cursor-pointer mt-1' onClick={ handleMenu }>
                            <h3 className='hover:text-red-500 font-semibold'>Employee</h3>
                            <IoIosArrowDown className='ml-1 cursor-pointer' />
                        </div>
                        { menuOpen && <div className='absolute flex flex-col gap-4 w-72 py-2 px-6 top-16 z-10 text-white' style={ { backgroundColor: "#462b34" } }>
                            <Link to={ "/overview" } style={ { textDecoration: "none" } } className='hover:text-red-700'>Overview</Link>
                            <hr />
                            <Link to={ "/joborder" } style={ { textDecoration: "none" } } className='hover:text-red-700'>Place Job Order</Link>
                            <hr />
                            <Link to={ "/faq" } style={ { textDecoration: "none" } } className='hover:text-red-700'>FAQ's</Link>
                            <hr />
                            <Link to={ "/testimonials" } style={ { textDecoration: "none" } } className='hover:text-red-700'>Testimonials</Link>
                            <hr />
                        </div> }
                    </div>
                    <Link to={"/jobseekers"} className='hover:text-red-500 font-semibold' style={ { textDecoration: "none" } }>job seekers</Link>
                </div>
            </section> */}

            {/* <!-- banner-section end --> */ }


            {/* <!-- clients-section --> */ }
            <section className="clients-section">
                <div className="outer-container">
                    <div className="clients-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
                        <figure className="clients-logo-box">
                            <a href="index.html"><img src="/img/images/clients/clients-logo-1.png" alt="" /></a>
                            <span className="logo-title"><a href="index.html">Visit Website</a></span>
                        </figure>
                        <figure className="clients-logo-box">
                            <a href="index.html"><img src="/img/images/clients/clients-logo-2.png" alt="" /></a>
                            <span className="logo-title"><a href="index.html">Visit Website</a></span>
                        </figure>
                        <figure className="clients-logo-box">
                            <a href="index.html"><img src="/img/images/clients/clients-logo-3.png" alt="" /></a>
                            <span className="logo-title"><a href="index.html">Visit Website</a></span>
                        </figure>
                        <figure className="clients-logo-box">
                            <a href="index.html"><img src="/img/images/clients/clients-logo-4.png" alt="" /></a>
                            <span className="logo-title"><a href="index.html">Visit Website</a></span>
                        </figure>
                        <figure className="clients-logo-box">
                            <a href="index.html"><img src="/img/images/clients/clients-logo-5.png" alt="" /></a>
                            <span className="logo-title"><a href="index.html">Visit Website</a></span>
                        </figure>
                        <figure className="clients-logo-box">
                            <a href="index.html"><img src="/img/images/clients/clients-logo-6.png" alt="" /></a>
                            <span className="logo-title"><a href="index.html">Visit Website</a></span>
                        </figure>
                    </div>
                </div>
            </section>
            {/* <!-- clients-section end --> */ }

            <section className="page-title" style={ { backgroundImage: "url(/img/images/background/page-title-2.jpg" } }>
                <div className="pattern-layer" style={ { backgroundImage: "url(/img/job1.jpg)" } }></div>
                <div className="auto-container">
                    <div className="content-box">
                        <div className="title-box centred">
                            <h1 className='text-black'>Job Seekers</h1>
                            <p className='text-black'>Your Staffing Needs are Unique and Always Evolving</p>
                        </div>
                        <ul className="bread-crumb clearfix">
                            {/* <li><a href="index.html">Home</a></li>
                            <li>Job Seekers</li>
                            <li>Overview</li> */}
                        </ul>
                    </div>
                </div>
            </section>

            {/* <!-- welcome-section --> */ }
            <section className="welcome-section">
                <div className="auto-container">
                    <div className="sec-title centred">
                        <span className="top-title">Welcome to Eazy Recruitz</span>
                        <h2>Modern Day Staffing Agency</h2>
                        <p>Long established fact that a reader will be distracted by the <br />readable content of a page.</p>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <figure className="image-box js-tilt"><img src="/img/images/resource/welcome-1.png" alt="" /></figure>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div id="content_block_1">
                                <div className="content-box">
                                    <div className="tabs-box">
                                        <div className="tab-btn-box">
                                            <ul className="tab-btns tab-buttons clearfix">
                                                <li className="tab-btn active-btn flex" data-tab="#tab-1">
                                                    <div className='flex items-center gap-3'>
                                                        <RxPerson />
                                                        <h5>For Employers</h5>
                                                    </div>
                                                    {/* <i className="arrow-icon flaticon-up-arrow-2"></i> */ }
                                                </li>
                                                <li className="tab-btn" data-tab="#tab-2">
                                                    <div className='flex items-center gap-3 w-full'>
                                                        <GrRestroomWomen className='text-xl' />
                                                        <h5>For Employees</h5>
                                                    </div>
                                                    {/* <i><BiRightArrowAlt/></i> */ }
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="tabs-content">
                                            <div className="tab active-tab" id="tab-1">
                                                <div className="inner-box">
                                                    <h5>Find the Employees</h5>
                                                    <h2>Hire Your Next Candidate On Eazy Recruitz</h2>
                                                    <p>To take a trivial example which of us ever undertakes laborious physical exercise except to obtain some advantage from it but who has any right to find fault with a man who chooses.</p>
                                                    <ul className="list clearfix">
                                                        <li>
                                                            <figure className="icon-box"><img src="/img/images/icons/icon-1.png" alt="" /></figure>
                                                            <h4>Understand Your Needs</h4>
                                                        </li>
                                                        <li>
                                                            <figure className="icon-box"><img src="/img/images/icons/icon-2.png" alt="" /></figure>
                                                            <h4>Find the Perfect Candidate</h4>
                                                        </li>
                                                    </ul>
                                                    <div className="link"><a href="index.html" className='py-2 px-4 bg-red-500 text-white rounded-sm'>Your Required Talent</a></div>
                                                </div>
                                            </div>
                                            <div className="tab" id="tab-2">
                                                <div className="inner-box">
                                                    <h5>Find Your Right Place</h5>
                                                    <h2>Explore Your Career Path With Eazy Recruitz</h2>
                                                    <p>Explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and we will give you a complete account of the system, and expound the actual teachings.</p>
                                                    <ul className="list clearfix">
                                                        <li>
                                                            <figure className="icon-box"><img src="/img/images/icons/icon-71.png" alt="" /></figure>
                                                            <h4>Executive Opportunities</h4>
                                                        </li>
                                                        <li>
                                                            <figure className="icon-box"><img src="/img/images/icons/icon-72.png" alt="" /></figure>
                                                            <h4>Non Excecutive Opportunities</h4>
                                                        </li>
                                                    </ul>
                                                    <div className="link"><a href="index.html" className='py-2 px-4 bg-red-500'>Your Required Talent</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section">
                <div className="pattern-layer" style={ { backgroundImage: "url(/img/images/shape/pattern-5.png)" } }></div>
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="row clearfix">
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div id="content_block_2">
                                    <div className="content-box centred">
                                        <figure className="image-box"><img src="/img/images/resource/about-1.jpg" alt="" /></figure>
                                        <div className="inner-box">
                                            <figure className="icon-box"><img src="/img/images/icons/icon-3.png" alt="" /></figure>
                                            <h3>Educational Resources <br />for Job Seekers</h3>
                                            <a href="index.html">Guides & E-books<i className="flaticon-direct-download"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                                <div id="content_block_3">
                                    <div className="content-box">
                                        <div className="sec-title">
                                            <span className="top-title">About Our Agency</span>
                                            <h2>Staffing Partners: Reliable & Cost Efficiant Recruitment Agency</h2>
                                        </div>
                                        <div className="text">
                                            <p>Long established fact that reader will be distracted the readable of pages when looking at its layout. The point using lorem ipsum has a more-or-less normal distribution of letters.</p>
                                        </div>
                                        <div className="link"><a href="index.html" className='py-2 px-4 bg-red-500 text-white rounded-sm'>More About Us</a></div>
                                        <div className="author-box">
                                            <div className="author-text">
                                                <h3>Pathway for both employer and employee.</h3>
                                            </div>
                                            <div className="author-info">
                                                <figure className="author-thumb"><img src="/img/images/resource/author-1.png" alt="" /></figure>
                                                <h4>Daniel Primera</h4>
                                                <span className="designation">Founder</span>
                                                <figure className="signature"><img src="/img/images/icons/signature-1.png" alt="" /></figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home
