import React, { useEffect, useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../fireBase.init';
import Loading from '../../../Loading/Loading';

const LogIn = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    // For Email and Password log in

    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
    })

    // For google

    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);

    // google error user and loading

    useEffect(() => {
        if (user2) {
            toast('Log In Successfully');
            navigate(from, {replace: true});
        }
    }, [user2])

    if(loading2){
        <Loading></Loading>
    }

    useEffect(() => {
        if (error2) {
            switch (error2?.code) {
                case "auth/invalid-email":
                    toast("please provide a valid email");
                    break;
                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!");
                    break;
                default:
                    toast("Close by user");
            }
        }
    }, [error2]);

    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
        other: ""
    })

    // google End

    useEffect(() => {
        if (user) {
            toast('Log In Successfully');
            navigate(from, {replace: true});
        }
    }, [user])


    useEffect(() => {
        if (error) {
            switch (error?.code) {
                case "auth/invalid-email":
                    toast("please provide a valid email");
                    break;
                case "auth/invalid-password":
                    toast("Wrong password. Intruder!!");
                    break;
                default:
                    toast("InValid Email and Password");
            }
        }
    }, [error]);

    // handle Email
    const handleEmail = (event) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const validEmail = emailRegex.test(event.target.value)
        if (validEmail) {
            setUserInfo({ ...userInfo, email: event.target.value });
            setErrors({ ...errors, emailError: "" })
        }
        else {
            setErrors({ ...errors, emailError: "Invalid Email" })
            setUserInfo({ ...userInfo, email: "" })
        }
    }

    // handle password

    const handlePassword = (event) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        const validPassWord = passwordRegex.test(event.target.value);
        if (validPassWord) {
            setUserInfo({ ...userInfo, password: event.target.value })
            setErrors({ ...errors, passwordError: "" })
        }
        else {
            setErrors({ ...errors, passwordError: "'Invalid password' Mini six characters, at least one letter and one number" })
            setUserInfo({ ...userInfo, password: "" })
        }
    }

    // Log in handle Email and Password

    const handleLogInForm = (event) => {
        event.preventDefault()
        signInWithEmailAndPassword(userInfo.email, userInfo.password)
    }

    // Google Handle sign in

    const handleGoogle = () =>{
        signInWithGoogle();
    }
    return (

        <div className="bg">
            <div className=' login-container'>
            <div className="login-title">Log In</div>
            <form onSubmit={handleLogInForm} className="login-form">
                <input onChange={handleEmail} type="text" placeholder="Your Email" />
                {errors?.emailError && <p className="error-message">{errors.emailError}</p>}

                <input onBlur={handlePassword} type="password" placeholder="password" />
                <div className='d-flex justify-content-between'>
                <p className=''> <Link to='/signup'>Sign Up</Link>  New Account</p>
                <p className=''>Forget password? <Link to='/reset-password'>Click Here</Link> </p>
                </div>
                {errors?.passwordError && <p className="error-message">{errors.passwordError}</p>}


                <button type='submit'>Log In</button>
                
            </form>
            <ToastContainer theme="dark" />
            <button onClick={handleGoogle}>Google Log In</button>
            </div>
        </div>

    );
};

export default LogIn;