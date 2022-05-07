import React, { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../fireBase.init';
import Loading from '../../../Loading/Loading';
import './SignUp.css'

const SignUp = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);

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

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const [errors, setErrors] = useState({
        emailError: "",
        passwordError: "",
        confirmPassError: ""
    })

    const [createUserWithEmailAndPassword, user,  error] = useCreateUserWithEmailAndPassword(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);
   
    useEffect(()=>{
        if(user){
            toast('Create Account Successfully Email Verification Sent')
            navigate('/');
        }
    },[user])


    
   

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

    const handleConfirmPassword = (event) => {
        if (event.target.value === userInfo.password) {
            setUserInfo({ ...userInfo, confirmPassword: event.target.value })
            setErrors({ ...errors, confirmPassError: "" })
        }
        else {
            setErrors({ ...errors, confirmPassError: "Password don't match" })
            setUserInfo({ ...userInfo, confirmPassword: "" })
        }
    }

    useEffect(() => {
        if (error) {
            // switch (error?.code) {
            //     case "auth/invalid-email":
            //         toast("Invalid email provided, please provide a valid email");
            //         break;
            //     case "auth/invalid-password":
            //         toast("Wrong password. Intruder!!");
            //         break;
            //     default:
            //        break;
            // }
            toast(user?.message)
        }
    }, []);


    // handle Form

    const handleForm = (event) => {
        event.preventDefault()
        createUserWithEmailAndPassword(userInfo.email, userInfo.password);
        sendEmailVerification(); 
    }

    // handle Google Sign In

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
    }


    return (
        <div className='bg'>
            <div className="login-container ">
                <div className="login-title">Sign up</div>
                <form onSubmit={handleForm} className="login-form">
                    
                    <input onBlur={handleEmail} type="email" name='email' placeholder="Your Email" />
                    {errors?.emailError && <p className="error-message">{errors.emailError}</p>}
                    
                    <input onBlur={handlePassword} type="password" placeholder="password" />
                    {errors?.passwordError && <p className="error-message">{errors.passwordError}</p>}

                    <input onBlur={handleConfirmPassword} type="password" placeholder="confirm password" />
                    {errors?.confirmPassError && <p className="error-message">{errors.confirmPassError}</p>}
                    <span className='note text-danger'>Already Have An Account? <Link to='/login' className=' text-primary'>Log In</Link></span>
                    <button type='submit'>Sign up</button>

                    
                    <ToastContainer theme='dark'/>
                </form>
                <button onClick={handleGoogleSignIn}>Google Sign up</button>
            </div>
            
        </div>
    );
};

export default SignUp;