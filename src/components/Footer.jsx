import React from 'react'
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { MdOutlineSubscriptions } from "react-icons/md"

const Footer = () => {
    return (
        <>
            <footer className="main-footer bg-color-1 mt-9">
                <div className="pattern-layer" style={ { backgroundImage: "url(assets/images/shape/pattern-11.png)" } }></div>
                <div className="auto-container">
                    <div className="footer-top">
                        <div className="widget-section">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                    <div className="footer-widget about-widget">
                                        <div className="widget-title">
                                            <h3>Office</h3>
                                        </div>
                                        <div className="text">
                                            <p>It is a long established fact that a reader will distracted by the readable ... <i className="fas fa-arrow-up"></i></p>
                                            <p>Shop No. 12 Second Floor KK Plaza,, Near Karma Residency, Nashik, Maharashtra 422009, India</p>
                                        </div>
                                        <ul className="social-links clearfix flex items-center">
                                            <li className=''><h5>Connected:</h5></li>
                                            <div className='text-xl'>
                                                <li><a href="index.html"><FaFacebookF /></a></li>
                                                <li><a href="index.html">
                                                    <FaInstagram /></a></li>
                                                <li><a href="index.html"><FaTwitter /></a></li>
                                                <li><a href="index.html"><FaYoutube /></a></li>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                    <div className="footer-widget links-widget">
                                        <div className="widget-title">
                                            <h3>Useful Links</h3>
                                        </div>
                                        <ul className="links-list clearfix">
                                            <li><a href="index.html">About Us</a></li>
                                            <li><a href="index.html">Testimonials</a></li>
                                            <li><a href="index.html">Employers</a></li>
                                            <li><a href="index.html">Job Seekers</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                                    <div className="footer-widget contact-widget">
                                        <div className="single-info-box">
                                            <div className="widget-title">
                                                <h3>For Employers</h3>
                                            </div>
                                            <ul className="info-box clearfix">
                                                <li><a href="tel:8004561234">(800) 456-1234</a></li>
                                                <li><a href="mailto:businesspartner@example.com">businesspartner@example.com</a></li>
                                            </ul>
                                        </div>
                                        <div className="single-info-box">
                                            <div className="widget-title">
                                                <h3>For Employees</h3>
                                            </div>
                                            <ul className="info-box clearfix">
                                                <li><a href="tel:8004560123">(800) 789-0123</a></li>
                                                <li><a href="mailto:careeroption@example.com">careeroption@example.com</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className='text-white' />

                    <div className="footer-bottom clearfix">
                        <div className="copyright pull-left"><p>&copy; 2024 <a href="index.html">S.K. FINANCIAL CONSULTANCY</a>, All Rights Reserved.</p></div>
                        <ul className="footer-nav pull-right clearfix">
                            <li><a href="index.html">Privacy Policy</a></li>
                            <li><a href="index.html">Terms & Conditions</a></li>
                            <li><a href="index.html">Site Map</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
