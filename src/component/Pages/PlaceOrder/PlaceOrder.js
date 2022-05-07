import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight, faDumbbell, faEnvelope, faMapLocation, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const PlaceOrder = () => {
    return (
        <div>
            <section className="contact-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title contact-title">
                                <span>Contact Us</span>
                                <h2>GET IN TOUCH</h2>
                            </div>
                            <div className="contact-widget">
                                <div className="cw-text">
                                    <i> <FontAwesomeIcon icon={faMapLocation}></FontAwesomeIcon></i>
                                    <p>333 Middle Winchendon Rd, Rindge,<br /> NH 03461</p>
                                </div>
                                <div className="cw-text">
                                <i> <FontAwesomeIcon icon={faMobileAlt}></FontAwesomeIcon></i>
                                    <ul>
                                        <li>125-711-811</li>
                                        <li>125-668-886</li>
                                    </ul>
                                </div>
                                <div className="cw-text email">
                                <i> <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></i>
                                    <p>Support.gymcenter@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="leave-comment">
                                <form>
                                    <input type="text" placeholder="Name" />
                                    <input type="text" placeholder="Email" />
                                    <input type="text" placeholder="Your Package Name" />
                                    <textarea placeholder="Comment"></textarea>
                                    <button type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default PlaceOrder;