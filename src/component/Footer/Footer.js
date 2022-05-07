import { faEnvelope, faHeart, faMapLocation, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className="gettouch-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="gt-text">
                            
                                <i><FontAwesomeIcon className='i' icon={faMapLocation}></FontAwesomeIcon></i>
                                <p>333 Middle Winchendon Rd, Rindge,<br /> NH 03461</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="gt-text">
                                
                                <i><FontAwesomeIcon className='i' icon={faMobileAlt}></FontAwesomeIcon></i>
                                <ul>
                                    <li>125-711-811</li>
                                    <li>125-668-886</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="gt-text email">
                            <i><FontAwesomeIcon className='i' icon={faEnvelope}></FontAwesomeIcon></i>
                                <p>Support.gymcenter@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="fs-about">
                                <div className="fa-logo">
                                    <a href="/"><img src="img/logo.png" alt="" /></a>
                                </div>
                                <p>Exercise and physical activity are great ways to feel better, boost your health and have fun. For most healthy adults, the U.S. Department of Health and Human Services recommends these exercise guidelines:</p>
                                
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="fs-widget">
                                <h4>Useful links</h4>
                                <ul>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/services">Services</Link></li>
                                    <li><Link to="/">Home</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-3 col-sm-6">
                            <div className="fs-widget">
                                <h4>Support</h4>
                                <ul>
                                    <li><Link to="/">Login</Link></li>
                                    <li><Link to="/">My account</Link></li>
                                    <li><Link to="/">Subscribe</Link></li>
                                    <li><Link to="/">Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="fs-widget">
                                <h4>Tips & Guides</h4>
                                <div className="fw-recent">
                                    <h6><Link to="/">Physical fitness may help prevent depression, anxiety</Link></h6>
                                    <ul>
                                        <li>3 min read</li>
                                        <li>20 Comment</li>
                                    </ul>
                                </div>
                                <div className="fw-recent">
                                    <h6><Link to="/">Fitness: The best exercise to lose belly fat and tone up...</Link></h6>
                                    <ul>
                                        <li>3 min read</li>
                                        <li>20 Comment</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="copyright-text">
                                <p>
                                    Copyright &copy; All rights reserved 2022 | This template is made with <i><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon> </i> by Rahat
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;