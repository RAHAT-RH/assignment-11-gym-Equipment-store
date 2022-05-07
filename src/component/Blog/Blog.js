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
                                <p className="mb-0 mt-2 font-italic">"Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger’s identity has been determined, the second step is verifying any special services the passenger has access to, whether it’s flying first-class or visiting the VIP lounge."</p>
                                <footer className="blockquote-footer pt-4 mt-4 border-top">Difference between authorization and authentication?
                                    <cite title="Source Title"></cite>
                                </footer>
                            </blockquote>
                        </div>
                        <div className="col-lg-6 mx-auto my-2">
                            <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                                <div className="blockquote-custom-icon bg-info shadow-sm"><FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon></div>
                                <p className="mb-0 mt-2 font-italic">"Firebase is a free service provided by Google which can be used as a feature-rich back-end. Frontend developers can use Firebase to decrease development time and increase productivity. If you are a frontend developer which often gets frustrated and stuck because the backend is not ready then I have great news for me. Yes I have other options"</p>
                                <h4>Firebase Alternatives</h4>
                                <ul>
                                    <li>Parse</li>
                                    <li>Back4App</li>
                                    <li>AWS Amplify</li>
                                    <li>Kuzzle</li>
                                    <li>Couchbase</li>
                                </ul>
                                <footer className="blockquote-footer pt-4 mt-4 border-top">Why are you using firebase? What other options do you have to implement authentication?
                                    <cite title="Source Title"></cite>
                                </footer>
                            </blockquote>
                        </div>
                        <div className="col-lg-6 mx-auto my-2">
                            <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                                <div className="blockquote-custom-icon bg-info shadow-sm"><FontAwesomeIcon icon={faQuoteLeft}></FontAwesomeIcon></div>
                                <p className="mb-0 mt-2 font-italic">"Firebase is originally developed by Firebase inc and later acquired by Google. It provides different kinds of services that help you to develop high-quality mobile and web applications to grow your business. It is compatible with Web, iOS, Android, and OS X clients. With Firebase, developers don’t need to worry about the backend programming, Authentication, API development, database (real-time cloud-hosted NoSQL database and cloud firestore), File storage, etc. Firebase provides all the services with very efficient and fast performance."</p>
                                <h4>Different services firebase provide</h4>
                                <ul>
                                    <li>Cloud Firestore</li>
                                    <li>Cloud Functions</li>
                                    <li>Authentication</li>
                                    <li>Hosting</li>
                                    <li>Cloud Storage</li>
                                    <li>Google Analytics</li>
                                    <li>Predictions</li>
                                </ul>
                                <footer className="blockquote-footer pt-4 mt-4 border-top">What other services does firebase provide other than authentication


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