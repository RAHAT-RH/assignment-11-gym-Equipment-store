import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../fireBase.init';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const [sendPasswordResetEmail,  error] = useSendPasswordResetEmail(auth);



    const handleResetPassword = (event) => {
        event.preventDefault();
        sendPasswordResetEmail(email);
        toast('Reset Password')

    }
    return (
        <div>
            <div className="login-container" style={{ height: "400px" }}>
                <div className="login-title">Reset Password</div>
                <form onSubmit={handleResetPassword} className="login-form">
                    <input onChange={handleEmail} type="text" placeholder="Your Email" />
                    <button type='submit'>Reset Password</button>

                </form>
                <ToastContainer theme="dark" />
            </div>
        </div>
    );
};

export default ResetPassword;