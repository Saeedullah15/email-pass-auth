import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../firebase/firebase.config';

const Login = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const emailRef = useRef(null);

    const handleLogin = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const pass = e.target.password.value;

        setError('');
        setSuccess('');

        signInWithEmailAndPassword(auth, email, pass)
            .then(result => {
                const user = result.user;
                console.log(user);

                if (user.emailVerified) {
                    setSuccess("User verified and logged in successfully!");
                }
                else {
                    alert("Email is not verified!");
                }
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    const handleResetPass = () => {
        const email = emailRef.current.value;
        console.log(email);

        sendPasswordResetEmail(auth, email)
            .then(result => {
                setSuccess("Check your email for password reset!")
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                    {/* form */}
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" ref={emailRef} name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label onClick={handleResetPass} className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div>
                            <p>Didn't have any account? Please <Link to="/register" className='text-blue-600'>Register!</Link></p>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                        {
                            error && <p className='text-red-600'>{error}</p>
                        }
                        {
                            success && <p className='text-green-700'>{success}</p>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;