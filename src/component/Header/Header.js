import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../../fireBase.init';
import logo from '../../img/logo.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Header.css'
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);
    if(loading){
        <p>loading....</p>
    }
    const logout = () => {
        signOut(auth);
        toast('Log out successfully')
        navigate('/login')
      };
    return (
        <div>
            <Navbar className='header-section position-absolute top-0'  expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <CustomLink className='ms-4 text-decoration-none nav-text mt-2 ' to="/">Home</CustomLink>
                            <CustomLink className='ms-4 text-decoration-none nav-text mt-2 ' to="/about">About Us</CustomLink>
                            <CustomLink className='ms-4 text-decoration-none nav-text mt-2 ' to="/services">Services</CustomLink>
                            <CustomLink className='ms-4 text-decoration-none nav-text mt-2 ' to="/order">Check Out</CustomLink>
                            {/* <CustomLink className='ms-4 text-decoration-none nav-text mt-2 ' to="/blog">Our Blog</CustomLink> */}
                            {
                                user?.uid ? <CustomLink className='ms-4 text-decoration-none nav-text mt-2 ' to="/addEquipment">Add Equipment</CustomLink> : <CustomLink className='ms-4 text-decoration-none nav-text mt-2 ' to="/blog">Our Blog</CustomLink>
                            }
                            {/* <CustomLink className='ms-4 text-decoration-none nav-text mt-2 ' to="/signup">Sign Up</CustomLink> */}
                            {
                                user?.uid ? '' : <CustomLink className='ms-4 text-decoration-none nav-text mt-2 ' to="/signup">Sign Up</CustomLink>
                            }
                            {
                                user?.uid ?  <button onClick={logout} className='ms-4 text-decoration-none nav-text text-white btn btn-danger' >Log out</button> : <CustomLink className='ms-4 text-decoration-none nav-text text-white' to="/login">Log In</CustomLink>
                            }

                            {
                                user?.uid && <NavLink className='ms-2 text-decoration-none nav-text' to="/">{user.email}</NavLink>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <ToastContainer theme="dark"/>
        </div>
    );
};

export default Header;