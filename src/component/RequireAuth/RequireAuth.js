import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../fireBase.init';
import Loading from '../../Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading] = useAuthState(auth);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace/>
    }

    if (user.providerData[0]?.providerId === 'password' && !user.emailVerified) {
        return <div className='text-center mt-5'>n
            <h3 className='text-danger'>Your email is not verified!!</h3>
            <h5 className='text-danger'>Please Verify your email address</h5>
            <button className='btn btn-primary' onClick={async () => {
                await sendEmailVerification()
                toast('send email verification')
            }}>verify email</button>
            <ToastContainer />
        </div>
    }
    return children;
};

export default RequireAuth;