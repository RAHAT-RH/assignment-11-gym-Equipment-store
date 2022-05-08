import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Update = () => {
    const { id } = useParams()
    const [equipments, setEquipments] = useState({});
    useEffect(() => {
        fetch(`https://sleepy-dawn-70645.herokuapp.com/equipments/${id}`)
            .then(res => res.json())
            .then(data => setEquipments(data))
    }, [equipments])

    // update Handle
    const handleUpdateEquipment = event => {
        event.preventDefault();
        const name = event.target.name.value;
        // const selectElement = event.target;
        // const categories = selectElement.value;
        const categories = event.target.categories.value;
        const quantity = event.target.quantity.value;
        const country = event.target.country.value;
        const img = event.target.url.value;
        const details = event.target.details.value;

        const updateEquipment = { name, categories, quantity, country, details, img }
        console.log(name, categories, quantity, country, details, img);

        const url = `https://sleepy-dawn-70645.herokuapp.com/update/${id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateEquipment)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        event.target.reset();

        toast("Successfully Update Equipment")
    }

    // update handle

    // const handleUpdateEquipment = event => {
    //     event.preventDefault();
    //     const name = event.target.name.value;
    //     // const selectElement = event.target;
    //     // const categories = selectElement.value;
    //     const categories = event.target.categories.value;
    //     const quantity = event.target.quantity.value;
    //     const country = event.target.country.value;
    //     const img = event.target.url.value;
    //     const details = event.target.details.value;

    //     const updateEquipment = { name, categories, quantity, country, details, img }
    //     // console.log(name, categories, quantity, country, details, img);

    //     const url = `https://sleepy-dawn-70645.herokuapp.com/update/${id}`;
    //     fetch(url, {
    //         method: "PUT",
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(updateEquipment)
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data))

    //     event.target.reset();

    //     toast("Successfully Update Equipment")

    // }
    return (
        <div>
            <section className="contact-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title contact-title">
                                <span>Update Gym Equipment </span>
                                <h2> {equipments.name}</h2>
                            </div>
                            <div className="contact-widget">
                                <div className="col-md-6" key={equipments._id}>
                                    <div className="profile-card-4 text-center position-relative"><img src={equipments.img} alt='' className="img img-responsive" />

                                        <div className="profile-content">

                                            <div className="profile-name ">
                                                {equipments.name}
                                            </div>

                                            <div className="profile-description">{equipments.details}</div>
                                            <div className="d-flex justify-content-between">
                                                <div className="col-xs-4">
                                                    <div className="profile-overview">
                                                        <p>Categories</p>
                                                        <h4>{equipments.categories}</h4></div>
                                                </div>
                                                <div className="col-xs-4">
                                                    <div className="profile-overview">
                                                        <p>Quantity</p>
                                                        <h4>{equipments.quantity}</h4></div>
                                                </div>
                                                <div className="col-xs-4">
                                                    <div className="profile-overview">
                                                        <p>Country</p>
                                                        <h4>{equipments.country}</h4></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="leave-comment">
                                <form onSubmit={handleUpdateEquipment}>
                                    <input type="text" name="name" placeholder="Gym Equipment Name" />
                                    {/* <input type="text" name="categories" id="" /> */}
                                    <select className="form-control border-none mb-4 bg-dark text-white" name='categories' id=" " placeholder='Categories'>
                                        <option value='Categories' disabled>Categories</option>
                                        <option value='Dumbbell'>Dumbbell</option>
                                        <option value="Leg Extension">Leg Extension</option>
                                        <option value='Barbell'>Barbell</option>
                                        <option value="TRX">TRX Brand</option>
                                        <option value='Bicycle'>Stationary Bicycle</option>
                                        <option value='Treadmill'>Treadmill</option>
                                        <option value='Kettle'>Kettle</option>
                                        <option value='Pull Up Bar'>Pull Up Bar</option>
                                    </select>
                                    <input type="number" name='quantity' placeholder="Quantity" />
                                    <input type="text" name='url' placeholder="Image Url" />
                                    <input type="text" name='country' placeholder="Country" />
                                    <textarea placeholder="details" name='details'></textarea>
                                    <button type="submit">Update Equipment</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <ToastContainer />
                </div>
            </section>
        </div>
    );
};

export default Update;