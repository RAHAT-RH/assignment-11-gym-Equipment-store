import { faCaretRight, faDumbbell, faFilter, faHeartbeat, faSwimmingPool } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import bgimg1 from '../../../img/team/team-1.jpg'
import bgimg2 from '../../../img/team/team-2.jpg'
import bgimg3 from '../../../img/team/team-3.jpg'
import './About.css'

const About = () => {
    return (
        <div>
            <section className="breadcrumb-section set-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb-text">
                                <h2>About</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="choseus-section spad mb">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title my-5 text-center">
                                <span className='color'>Why chose us?</span>
                                <h2 className='text-white'>PUSH YOUR LIMITS FORWARD</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                            <span><FontAwesomeIcon style={{fontSize: "30px"}} icon={faFilter}></FontAwesomeIcon></span>
                                <h4>Modern equipment</h4>
                                <p className='text-color'>Exercise can help prevent excess weight gain or help maintain weight loss. When you engage in physical activity, you burn calories.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                            <span><FontAwesomeIcon style={{fontSize: "30px"}} icon={faHeartbeat}></FontAwesomeIcon></span>

                                <h4>Healthy nutrition plan</h4>
                                <p className='text-color'>Regular trips to the gym are great, but don't worry if you can't find a large chunk of time to exercise every day...</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                            <span><FontAwesomeIcon style={{fontSize: "30px"}} icon={faDumbbell}></FontAwesomeIcon></span>
                                <h4>Professional training plan</h4>
                                <p className='text-color'>No matter what your current weight is, being active boosts high-density lipoprotein (HDL) cholesterol, ....</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                            <span><FontAwesomeIcon style={{fontSize: "30px"}} icon={faSwimmingPool}></FontAwesomeIcon></span>
                                <h4>Unique to your needs</h4>
                                <p className='text-color'>Winded by grocery shopping or household chores? Regular physical activity can ....</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="aboutus-section">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 p-0">
                    <div className="about-video set-bg-two">
                        <Link to="https://www.youtube.com/watch?v=EzKkl64rRbM" className="play-btn video-popup"><i
                                > <FontAwesomeIcon icon={faCaretRight}></FontAwesomeIcon> </i></Link>
                    </div>
                </div>
                <div className="col-lg-6 p-0">
                    <div className="about-text">
                        <div className="section-title">
                            <span>About</span>
                            <h2>What I want to do in life</h2>
                        </div>
                        <div className="at-desc">
                            <p>My name is Rahat. One of my goals is to become a good quality web developer through hard work. I have had to give up a lot to get this far. I have come to this position in the midst of many difficulties and I hope I will stick with it in the future as well. I can never express my attitude. I will do everything I need to be a good web developer.</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="team-section spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="team-title">
                        <div className="section-title">
                            <span>my Team</span>
                            <h2>TRAIN WITH EXPERTS</h2>
                        </div>
                        <Link to="/" className="primary-btn btn-normal appoinment-btn">appointment</Link>
                    </div>
                </div>
            </div>
            <div className="row">
                
                    <div className="col-lg-4">
                        <div className="ts-item set-bg4" >
                            <img src={bgimg1} alt="" />
                            <div className="ts_text">
                                <h4>Athart Rachel</h4>
                                <span>Gym Trainer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="ts-item set-bg5" >
                            <img src={bgimg2} alt="" />
                            <div className="ts_text">
                                <h4>Athart Rachel</h4>
                                <span>Gym Trainer</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="ts-item set-bg6">
                            <img src={bgimg3} alt="" />
                            <div className="ts_text">
                                <h4>Athart Rachel</h4>
                                <span>Gym Trainer</span>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </section>


    <section className="banner-section set-bg-three py-5" >
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="bs-text">
                        <h2>registration now to get more deals</h2>
                        <div className="bt-tips">Where health, beauty and fitness meet.</div>
                        <Link to="/login" className="primary-btn  btn-normal">Appointment</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
};

export default About;