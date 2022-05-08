import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Details.css'

const Details = () => {
    const { id } = useParams()
    const [singleEquipment, setSingleEquipment] = useState({})
    // const [q, setQ] = useState(0)
    // console.log(q)

    useEffect(() => {
        const url = `https://sleepy-dawn-70645.herokuapp.com/equipments/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleEquipment(data))
    }, [])

    const { img, name, details, categories, quantity, country } = singleEquipment;

    const delivered = id => {
        const newQuantity = parseInt(quantity) - 1;
        const updateProduct = { ...singleEquipment, quantity: newQuantity }
        setSingleEquipment(updateProduct);




        const proceed = window.confirm('Are you sure want to deliver');
        if (proceed) {
            const url = `https://sleepy-dawn-70645.herokuapp.com/updateQuantity/${id}`
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateProduct)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data)
                })
        }


    }
    return (
        <div>
            <section className="dark">
                <div className="container py-4">
                    <h1 className="h1 text-center" id="pageHeaderTitle">My Cards Dark</h1>

                    <article className="postcard dark blue">

                        {/* <img className="postcard__img" src={equipment.img} alt="Image Title" /> */}
                        <img className="postcard__img" src={img} alt="" />
                        <h1>{singleEquipment.name}</h1>

                        <div className="postcard__text">
                            <h1 className="postcard__title orange">{name}</h1>
                            <div className="postcard__subtitle small">
                                <time>
                                    {new Date().getFullYear()}
                                    <i className="fas fa-calendar-alt mr-2"></i>
                                    <FontAwesomeIcon style={{ fontSize: "14px", marginLeft: "20" }} icon={faCalendar}></FontAwesomeIcon>
                                </time>
                            </div>
                            <div className="postcard__bar"></div>
                            <div className="postcard__preview-txt">{details}</div>
                            <div className="d-flex justify-content-between mt-5">
                                <div className="col-xs-4">
                                    <div className="profile-overview">
                                        <p className='orange'>Categories</p>
                                        <h4 className='text-white'>{categories}</h4></div>
                                </div>
                                <div className="col-xs-4">
                                    <div className="profile-overview">
                                        <p className='orange'>Quantity</p>
                                        <h4 className='text-white'>{quantity}</h4></div>
                                </div>
                                <div className="col-xs-4">
                                    <div className="profile-overview">
                                        <p className='orange'>Country</p>
                                        <h4 className='text-white'>{country}</h4></div>
                                </div>
                            </div>
                        </div>
                    </article>
                    <button onClick={() => delivered(id)} className='btn btn-success'>Delevery</button>



                </div>
            </section>
        </div>
    );
};

export default Details;