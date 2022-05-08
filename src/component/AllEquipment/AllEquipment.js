import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../fireBase.init';
import './AllEquipment.css';

const AllEquipment = () => {
    const [user] = useAuthState(auth);
    const [equipments, setEquipments] = useState([]);
    const [totalPage, setTotalPage] = useState(0);
    const [page, setPage] = useState(0);
    const [pageSize, setPageSize] = useState(10)

    useEffect(() => {
        fetch("http://localhost:5000/equipmentCount")
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setTotalPage(pages)
            })
    }, [])

    // get data
    useEffect(() => {
        fetch(`http://localhost:5000/allEquipments?page=${page}&size=${pageSize}`)
            .then(res => res.json())
            .then(data => setEquipments(data))
    }, [equipments, page, pageSize])

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
            <section className="pricing-section spad mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <span>Our Plan</span>
                                <h2>Total Equipment: {equipments.length} </h2>
                            </div>
                        </div>
                    </div>
                    <Row>

                        {/* =============== */}

                        {
                            equipments.map(equipment =>
                                <div className="col-md-3" key={equipment._id}>
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
                    </Row>
                </div>
                <div className="container text-center mt-4 pagination">
                    {
                        [...Array(totalPage).keys()].map(number => <button key={number._id} className={page === number ? 'selected' : ''} onClick={() => setPage(number)}>{number + 1}</button>)
                    }
                    {pageSize}
                    <select onChange={e => setPageSize(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </section>
        </div>
    );
};

export default AllEquipment;