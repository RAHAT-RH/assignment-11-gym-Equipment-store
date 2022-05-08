import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import details1 from '../../img/blog/blog-1.jpg'
import details2 from '../../img/blog/blog-2.jpg'
import detailsPng from '../../img/blog/details/quote-left.png'
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <section className="blog-details-hero set-bg-15">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 p-0 m-auto">
                            <div className="bh-text">
                                <h3>Workout nutrition explained. What to eat before, during, and after exercise.</h3>
                                <ul>
                                    <li>by Admin</li>
                                    <li>Apr,18, 2022</li>
                                    <li>20 Comment</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="py-5   bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto my-4 ">
                            <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded ">
                                <div className="blockquote-custom-icon bg-info shadow-sm"><FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon></div>
                                <p className="mb-0 mt-2 font-italic">JavaScript is a programming language. It is running in any web browser with a proper browser engine. Nde.js: It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately. JavaScript is normally used for any client-side activity for one web application. An activity can be addressing business validation or dynamic page display in some schedule time interval or basic Ajax call kind of task. Those are used for a maximum time for any web application. Whereas Node JS mainly used for accessing or running any operating system for non-blocking operation. An operation like creating or executing a shell script, or getting some specific hardware-related information on one call or installed certificate details in the system or a lot of define task is  non-blocking on an operating system."</p>
                                <footer className="blockquote-footer pt-4 mt-4 border-top">Difference between javascript and nodejs
                                    <cite title="Source Title"></cite>
                                </footer>
                            </blockquote>
                        </div>
                        <div className="col-lg-6 mx-auto my-2">
                            <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                                <div className="blockquote-custom-icon bg-info shadow-sm"><FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon></div>
                                <p className="mb-0 mt-2 font-italic">"MongoDB is the Document Oriented Database. MongoDB stores a lot of data in JSON format. MongoDB's performance is much faster than any RDBMS. MongoDB is designed to work with Large Scale Data. MongoDB can work on multiple servers. MongoDB can handle a large number of access requests easily. => There are 2 design patterns in programming. One is asynchronous programming and the other is synchronous programming. Node JS by default follows the Asynchronous pattern. That is, it does not wait for a task to be completed. In the meantime, NodeJS started another job. That’s why we use nodeJS."</p>
                                <h4>X</h4>
                                
                                <footer className="blockquote-footer pt-4 mt-4 border-top">When should you use nodejs and when should you use mongodb?
                                    <cite title="Source Title"></cite>
                                </footer>
                            </blockquote>
                        </div>
                        <div className="col-lg-6 mx-auto my-2">
                            <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                                <div className="blockquote-custom-icon bg-info shadow-sm"><FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon></div>
                                <p className="mb-0 mt-2 font-italic">"SQL databases defines and manipulates data based structured query languageSQL. Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice especially for great complex queries. But from other side it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system. "</p>
                                
                                <footer className="blockquote-footer pt-4 mt-4 border-top">Differences between sql and nosql databases.


                                     <cite title="Source Title"></cite>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>



            <section className="blog-details-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 p-0 m-auto">
                            <div className="blog-details-text">
                                <div className="blog-details-title">
                                    <h3 className='text-white'>Difference between authorization and authentication:</h3>
                                    <p>Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger’s identity has been determined, the second step is verifying any special services the passenger has access to, whether it’s flying first-class or visiting the VIP lounge.</p>
                                    
                                    <h5>You Can Buy For Less Than A College Degree</h5>
                                    <p>Going to the gym every day can help improve your cardiovascular system, strengthen your muscles, help you maintain your weight, boost your mental health and decrease the odds that you'll develop other health conditions.
                                    </p>
                                </div>
                                <div className="blog-details-pic">
                                    <div className="blog-details-pic-item">
                                        <img src={details1} alt="" />
                                    </div>
                                    <div className="blog-details-pic-item">
                                        <img src={details2} alt="" />
                                    </div>
                                </div>
                                <div className="blog-details-desc">
                                    <p>Fitness classes. Access to group fitness classes is one of the advantages of gym workouts. Not only do you get the heart-pumping, muscle-building benefits of the exercises, but you also tap into the motivation and encouragement of working out with other people.
                                        Other recreational activities. Some larger facilities offer additional recreational activities such as swimming, racquetball, basketball, pickleball or an indoor track. Consider swapping out a few of these activities for your regular cardio workouts.
                                        Benefits of Gym Workouts
                                    </p>
                                </div>
                                <div className="blog-details-quote">
                                    <div className="quote-icon">
                                        <img src={detailsPng} alt="" />
                                    </div>
                                    <h5>The whole family of tiny legumes, whether red, green, yellow, or black, offers so many
                                        possibilities to create an exciting lunch.</h5>
                                    <span>MEIKE PETERS</span>
                                </div>
                                <div className="blog-details-more-desc">
                                    <p>If you have a gym membership or you're thinking about signing up for one, the most important thing to remember is that you have to use it. The advantages of gym workouts are that they provide several different ways to exercise, so going to the gym every day does not have to become boring and tedious.</p>
                                    <p>At first, this probably seems like a lot of exercise. However, if you spread those minutes out over the course of a week, you'll soon see just how easy it is to fit it in, especially if you're going to the gym every day.</p>
                                </div>
                                <div className="blog-details-tag-share">
                                    <div className="tags">
                                        <Link to="/">Body buiding</Link>
                                        <Link to="/">Yoga</Link>
                                        <Link to="/">Weightloss</Link>
                                        <Link to="/">Streching</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;