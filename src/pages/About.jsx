import React from 'react'
import { GrRestroomWomen } from "react-icons/gr"
import { RxPerson } from "react-icons/rx"

const About = () => {
    return (
        <>
            <section className="page-title" style={ { backgroundImage: "url(/img/images/background/page-title.jpg)" } }>
                <div className="pattern-layer" style={ { backgroundImage: "url(/img/job2.jpg)" } }></div>
                <div className="auto-container">
                    <div className="content-box">
                        <div className="title-box centred">
                            <h1 className='text-black'>About Company</h1>
                            <p>Reliable & Cost Efficient Recruitment Agency Based On Los Angeles</p>
                        </div>
                        <ul className="bread-crumb clearfix">
                            {/* <li><a href="index.html">Home</a></li>
                            <li>About</li>
                            <li>About Company</li> */}
                        </ul>
                    </div>
                </div>
            </section>

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
                                                <li className="tab-btn active-btn" data-tab="#tab-1">
                                                    <h5 className='flex gap-3'><RxPerson  className='text-xl'/>For Employers</h5>
                                                </li>
                                                <li className="tab-btn" data-tab="#tab-2">

                                                    <h5 className='flex gap-3'> <GrRestroomWomen className='text-xl'/> For Employees</h5>
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
                                                    <div className="link"><a href="index.html" className='py-2 px-4 ring-1 ring-red-500 rounded-sm'>Your Required Talent</a></div>
                                                </div>
                                            </div>
                                            <div className="tab" id="tab-2">
                                                <div className="inner-box">
                                                    <h5>Find the Employers</h5>
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
                                                    <div className="link"><a href="index.html"><i className="flaticon-right-arrow"></i>Your Required Talent</a></div>
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

            <section className="process-style-two alternet-2">
                <div className="auto-container">
                    <div className="inner-container">
                        <div className="pattern-layer" style={ { backgroundImage: "url(/img/images/shape/pattern-36.png)" } }></div>
                        <div className="sec-title light centred">
                            <span className="top-title">How We Work</span>
                            <h2>Our Plan & Working Style</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <div className="inner-box">
                                        <span>Step</span>
                                        <h2>01...</h2>
                                        <figure className="icon-box"><img src="/img/images/icons/icon-51.png" alt="" /></figure>
                                        <h3><a href="index-3.html">Application Screening & Scheduling</a></h3>
                                        <p>Indignation and dislike men who are so beguiled and demoralized.</p>
                                        <div className="link"><a href="index-3.html" className='py-2 px-4 ring-1 ring-white rounded-sm'>More Details</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <div className="inner-box">
                                        <span>Step</span>
                                        <h2>02...</h2>
                                        <figure className="icon-box"><img src="/img/images/icons/icon-52.png" alt="" /></figure>
                                        <h3><a href="index-3.html">Employee On-Boarding Checklist</a></h3>
                                        <p>Desire that they cannot foresee the pain and trouble that are bound.</p>
                                        <div className="link"><a href="index-3.html" className='py-2 px-4 ring-1 ring-white rounded-sm'>More Details</a></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 single-column">
                                <div className="single-item">
                                    <div className="inner-box">
                                        <span>Step</span>
                                        <h2>03...</h2>
                                        <figure className="icon-box"><img src="/img/images/icons/icon-53.png" alt="" /></figure>
                                        <h3><a href="index-3.html">Take Care of Employee’s Benefits</a></h3>
                                        <p>Frequently occur that pleasures have to be repudiated and annoyances.</p>
                                        <div className="link"><a href="index-3.html" className='py-2 px-4 ring-1 ring-white rounded-sm'>More Details</a></div>
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

export default About
