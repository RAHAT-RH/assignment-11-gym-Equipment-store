import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css'

const NotFoundPage = () => {
    return (
        <div className='position-absolute text-white bg-404'>
            <section class="section-404">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="text-404">
                                <h1>404</h1>
                                <h3>Opps! This page Could Not Be Found!</h3>
                                <p>Sorry bit the page you are looking for does not exist, have been removed or name changed</p>
                                <Link to="/"><i> <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> </i> Go back home</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NotFoundPage;