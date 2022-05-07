import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css'

const Details = () => {
    const { id } = useParams()
    const [singleEquipment, setSingleEquipment] = useState({})
    useEffect(()=> {
        const url = `http://localhost:5000/equipments/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setSingleEquipment(data))
    },[singleEquipment])
    return (
        <div>
            <section className="dark">
                <div className="container py-4">
                    <h1 className="h1 text-center" id="pageHeaderTitle">My Cards Dark</h1>

                    <article className="postcard dark blue">

                        {/* <img className="postcard__img" src={equipment.img} alt="Image Title" /> */}
                        <img className="postcard__img" src={singleEquipment.img} alt="" />
                        <h1>{singleEquipment.name}</h1>

                        <div className="postcard__text">
                            <h1 className="postcard__title orange">{singleEquipment.name}</h1>
                            <div className="postcard__subtitle small">
                                <time>
                                    {new Date().getFullYear()}
                                    <i className="fas fa-calendar-alt mr-2"></i>
                                    <FontAwesomeIcon style={{ fontSize: "14px", marginLeft: "20" }} icon={faCalendar}></FontAwesomeIcon>
                                </time>
                            </div>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">{singleEquipment.details}</div>
                            <div className="d-flex justify-content-between mt-5">
                                <div className="col-xs-4">
                                    <div className="profile-overview">
                                        <p className='orange'>Categories</p>
                                        <h4 className='text-white'>{singleEquipment.categories}</h4></div>
                                </div>
                                <div className="col-xs-4">
                                    <div className="profile-overview">
                                        <p className='orange'>Quantity</p>
                                        <h4 className='text-white'>{singleEquipment.quantity}</h4></div>
                                </div>
                                <div className="col-xs-4">
                                    <div className="profile-overview">
                                        <p className='orange'>Country</p>
                                        <h4 className='text-white'>{singleEquipment.country}</h4></div>
                                </div>
                            </div>
                        </div>
                    </article>



                </div>
            </section>
        </div>
    );
};

export default Details;