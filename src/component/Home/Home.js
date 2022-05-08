import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useHook from '../../useHook/useHook';
import { Carousel, Row } from 'react-bootstrap';
import { faAngleRight, faDumbbell, faEdit, faFilter, faHeartbeat, faSwimmingPool, faTransgender, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import photoCalass01 from '../../img/classes/class-1.jpg';
import photoCalass02 from '../../img/classes/class-2.jpg';
import photoCalass03 from '../../img/classes/class-3.jpg';
import photoCalass04 from '../../img/classes/class-4.jpg';
import photoCalass05 from '../../img/classes/class-5.jpg';
import banner01 from '../../img/hero/hero-1.jpg';
import banner02 from '../../img/hero/hero-2.jpg';
import './Home.css';
import useGetApi from '../../useHook/useGetApi';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../fireBase.init';




const Home = () => {
    const [user] = useAuthState(auth);
    // const [enroll] = useHook();
    const [equipments, setEquipments] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/allEquipments")
            .then(res => res.json())
            .then(data => setEquipments(data))
    }, [equipments])



    // Delete handler
    const handleDelete = id => {
        console.log("deleting id", id)
        const proceed = window.confirm("Are You Sure You Want To Delete");
        if (proceed) {
            const url = `http://localhost:5000/delete/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deleteCount > 0) {
                        const remaining = equipments.filter(equipmentId => equipmentId._id !== id);
                        setEquipments(remaining)

                    }
                })
        }
    }
    return (
        <div>

            <Carousel fade >
                <Carousel.Item className='vh-100 vw-100 overflow-hidden'>
                    <img
                        className="d-block "
                        src={banner01}
                        alt="First slide"
                    />
                    <Carousel.Caption>

                        <div className="hi-text">
                            <span>Shape your body</span>
                            <h1 className='text-white'>Be <strong className='text-danger'>strong</strong> traning hard</h1>
                            <Link to="/" className="primary-btn">Get info</Link>
                        </div>


                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='vh-100 vw-100'>
                    <img
                        className="d-block"
                        src={banner02}
                        alt="Second slide"
                    />

                    <Carousel.Caption>

                        <div className="hi-text">
                            <span>Shape your body</span>
                            <h1 className='text-white'>Be <strong className='text-danger'>strong</strong> traning hard</h1>
                            <Link to="/" className="primary-btn">Get info</Link>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <section className="choseus-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title my-5 text-center">
                                <span className='color'>Why chose me as a personal trainer?</span>
                                <h2 className='text-white'>PUSH YOUR LIMITS FORWARD</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span><FontAwesomeIcon style={{ fontSize: "30px" }} icon={faFilter}></FontAwesomeIcon></span>
                                <h4>Exercise improves mood</h4>
                                <p className='text-color'>Exercise can help prevent excess weight gain or help maintain weight loss. When you engage in physical activity, you burn calories. </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span><FontAwesomeIcon style={{ fontSize: "30px" }} icon={faHeartbeat}></FontAwesomeIcon></span>

                                <h4>Healthy nutrition plan</h4>
                                <p className='text-color'>Regular trips to the gym are great, but don't worry if you can't find a large chunk of time to exercise every day... </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span><FontAwesomeIcon style={{ fontSize: "30px" }} icon={faDumbbell}></FontAwesomeIcon></span>
                                <h4>Professional training plan</h4>
                                <p className='text-color'>No matter what your current weight is, being active boosts high-density lipoprotein (HDL) cholesterol, ... </p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="cs-item">
                                <span><FontAwesomeIcon style={{ fontSize: "30px" }} icon={faSwimmingPool}></FontAwesomeIcon></span>
                                <h4>Unique to your needs</h4>
                                <p className='text-color'>Winded by grocery shopping or household chores? Regular physical activity can ...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="classes-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Our Classes</span>
                                <h2>WHAT WE CAN OFFER</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="class-item">
                                <div className="ci-pic">
                                    <img src={photoCalass01} alt="" />
                                </div>
                                <div className="ci-text">
                                    <span>STRENGTH</span>
                                    <h5>Weightlifting</h5>
                                    <Link to="/"><i><FontAwesomeIcon className='i' icon={faAngleRight}></FontAwesomeIcon></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="class-item">
                                <div className="ci-pic">
                                    <img src={photoCalass02} alt="" />
                                </div>
                                <div className="ci-text">
                                    <span>Cardio</span>
                                    <h5>Indoor cycling</h5>
                                    <Link to="/"><i><FontAwesomeIcon className='i' icon={faAngleRight}></FontAwesomeIcon></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="class-item">
                                <div className="ci-pic">
                                    <img src={photoCalass03} alt="" />
                                </div>
                                <div className="ci-text">
                                    <span>STRENGTH</span>
                                    <h5>Kettlebell power</h5>
                                    <Link to="/"><i><FontAwesomeIcon className='i' icon={faAngleRight}></FontAwesomeIcon></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="class-item">
                                <div className="ci-pic">
                                    <img src={photoCalass04} alt="" />
                                </div>
                                <div className="ci-text">
                                    <span>Cardio</span>
                                    <h4>Indoor cycling</h4>
                                    <Link to="/"><i><FontAwesomeIcon className='i' icon={faAngleRight}></FontAwesomeIcon></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="class-item">
                                <div className="ci-pic">
                                    <img src={photoCalass05} alt="" />
                                </div>
                                <div className="ci-text">
                                    <span>Training</span>
                                    <h4>Boxing</h4>
                                    <Link to="/"><i><FontAwesomeIcon className='i' icon={faAngleRight}></FontAwesomeIcon></i></Link>
                                </div>
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
                                <h2>Total Equipment: {equipments.slice(0, 6).length}</h2>
                            </div>
                        </div>
                    </div>
                    <Row>

                        {/* =============== */}

                        {
                            equipments.slice(0, 6).map(equipment =>
                                <div className="col-md-4" key={equipment._id}>
                                    <div className="profile-card-4 text-center position-relative"><img src={equipment.img} alt='' className="img img-responsive" />
                                        {
                                            user?.uid ? <div className='icon position-absolute top-0 d-flex justify-content-between w-100'>
                                                <Link to={`/update/${equipment._id}`}><FontAwesomeIcon icon={faEdit} style={{ fontSize: "30px", padding: "5px", }}></FontAwesomeIcon></Link>
                                                <button onClick={() => handleDelete(equipment._id)} style={{ backgroundColor: 'transparent', border: "none", padding: "5px", }}><FontAwesomeIcon icon={faTrashAlt} style={{ fontSize: "30px", color: 'red', padding: "5px", }}></FontAwesomeIcon></button>
                                            </div> : ''
                                        }

                                        <div className="profile-content">
                                            <Link to={`/details/${equipment._id}`} className="text-decoration-none">
                                                <div className="profile-name ">
                                                    {equipment.name}
                                                </div>
                                            </Link>
                                            <div className="profile-description">{equipment.details}</div>
                                            <div className="d-flex justify-content-between">
                                                <div className="col-xs-4">
                                                    <div className="profile-overview">
                                                        <p>Categories</p>
                                                        <h4>{equipment.categories}</h4></div>
                                                </div>
                                                <div className="col-xs-4">
                                                    <div className="profile-overview">
                                                        <p>Quantity</p>
                                                        <h4>{equipment.quantity}</h4></div>
                                                </div>
                                                <div className="col-xs-4">
                                                    <div className="profile-overview">
                                                        <p>Country</p>
                                                        <h4>{equipment.country}</h4></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }

                        <Link to='/allEquipment' className='mx-auto text-center'><button className='btn btn-bg w-25 mt-4'>See More</button></Link>


                    </Row>
                </div>
            </section>

        </div>
    );
};

export default Home;