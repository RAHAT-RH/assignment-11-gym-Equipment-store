import { faEnvelope, faMapLocation, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const AddEquipment = () => {

    const handleAddEquipment = event => {
        event.preventDefault();
        const name = event.target.name.value;
        // const selectElement = event.target;
        // const categories = selectElement.value;
        const categories = event.target.categories.value;
        const quantity = event.target.quantity.value;
        const country = event.target.country.value;
        const img = event.target.url.value;
        const details = event.target.details.value;

        const addEquipment = { name, categories, quantity, country, details, img }
        console.log(name, categories, quantity, country, details, img);



        fetch("http://localhost:5000/addEquipment", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addEquipment)
        })
            .then(res => res.json())
            .then(data => console.log(data))

        event.target.reset();

        toast("Successfully Added Equipment")

    }
    return (
        <div>
            <section className="contact-section spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title contact-title">
                                <span>Product Name</span>
                                <h2>Add Gym Equipment</h2>
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
                                <form onSubmit={handleAddEquipment}>
                                    <input type="text" name="name" placeholder="Gym Equipment Name" />
                                    {/* <input type="text" name="categories" id="" /> */}
                                    <select className="form-control border-none mb-4 bg-dark text-white" name='categories' id=" " placeholder='Categories'>
                                        <option value='Categories'>Categories</option>
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
                                    <button type="submit">App Equipment</button>
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

export default AddEquipment;