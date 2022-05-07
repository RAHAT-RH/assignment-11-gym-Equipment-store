import { faCaretRight, faDumbbell, faFilter, faHeartbeat, faSwimmingPool } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import serviceimg1 from '../../../img/services/services-1.jpg'
import serviceimg2 from '../../../img/services/services-2.jpg'
import serviceimg3 from '../../../img/services/services-3.jpg'
import serviceimg4 from '../../../img/services/services-4.jpg'
import React from 'react';
import useHook from '../../../useHook/useHook';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServicesPage = () => {
    const [enroll] = useHook();
    return (
        <div>
            <section className="breadcrumb-section set-bg-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="breadcrumb-text">
                                <h2>Services</h2>
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

            <section className="services-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>What we do?</span>
                                <h2>PUSH YOUR LIMITS FORWARD</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 order-lg-1 col-md-6 p-0">
                            <div className="ss-pic">
                                <img src={serviceimg1} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-2 col-md-6 p-0">
                            <div className="ss-text">
                                <h4>Personal training</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut dolore
                                    facilisis.</p>
                                <Link to="/">Explore</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-3 col-md-6 p-0">
                            <div className="ss-pic">
                                <img src={serviceimg2} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-4 col-md-6 p-0">
                            <div className="ss-text">
                                <h4>Group fitness classes</h4>
                                <p>Most gyms are going to be full of everything you’ll ever need for your workouts. From rowing machines to saunas, treadmills to free weights, whatever fitness goals you want to </p>
                                <Link to="/">Explore</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-8 col-md-6 p-0">
                            <div className="ss-pic">
                                <img src={serviceimg4} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-6 col-md-6 p-0">
                            <div className="ss-text second-row">
                                <h4>Body building</h4>
                                <p>Additionally, there should always be a qualified instructor in your gym to help you use the machines and exercise correctly. Priceless when you’re just starting out.</p>
                                <Link to="/">Explore</Link>
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-2 col-md-6 p-0">
                            <div className="ss-pic">
                                <img src={serviceimg3} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-3 order-lg-5 col-md-6 p-0">
                            <div className="ss-text second-row">
                                <h4>Strength training</h4>
                                <p>Additionally, there should always be a qualified instructor in your gym to help you use the machines and exercise correctly. Priceless when you’re just starting out.</p>
                                <Link to="/">Explore</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="banner-section set-bg-three py-5" >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="bs-text service-banner">
                                <h2>Exercise until the body obeys.</h2>
                                <div className="bt-tips">Where health, beauty and fitness meet.</div>
                                <Link to="https://www.youtube.com/watch?v=EzKkl64rRbM" className="play-btn video-popup"><i
                                > <FontAwesomeIcon icon={faCaretRight}></FontAwesomeIcon> </i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pricing-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Our Plan</span>
                                <h2>Choose your pricing plan</h2>
                            </div>
                        </div>
                    </div>
                    <Row>


                        {
                            enroll.map(enrolls =>
                                <div key={enrolls.id}  style={{background:`url(${enrolls.img})`, backgroundSize: 'cover'}} className="col-lg-4 col-md-8">
                                    <div className="ps-item">
                                        <h3>{enrolls.name}</h3>
                                        <div className="pi-price">
                                            <h2>$ {enrolls.price}</h2>
                                            <span>{enrolls.subName}</span>
                                        </div>
                                        <ul>
                                            <li>{enrolls.number01}</li>
                                            <li>{enrolls.number02}</li>
                                            <li>{enrolls.number03}</li>
                                            <li>{enrolls.number04}</li>
                                            <li>{enrolls.number05}</li>
                                            <li>{enrolls.number06}</li>
                                        </ul>
                                        <Link to="/order" className="primary-btn pricing-btn">Enroll now</Link>
                                        <Link to="/order" className="thumb-icon"><i className="fa fa-picture-o"></i></Link>
                                    </div>
                                </div>

                            )

                        }

                    </Row>
                </div>
            </section>

        </div>
    );
};

export default ServicesPage;