import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import auth from '../../firebase/firebase.config';

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPass, setShowPass] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const pass = e.target.password.value;
        const terms = e.target.terms.checked;
        console.log(terms);

        setError('');
        setSuccess('');

        if (pass.length < 6) {
            setError('Password must be 6 characters long minimum!');
            return
        }
        else if (!terms) {
            setError('accept our terms and condition first!');
            return
        }

        createUserWithEmailAndPassword(auth, email, pass)
            .then(result => {
                const user = result.user;
                setSuccess('user created successfully!');
                console.log(user);
            })
            .catch(error => {
                setError(error.message);
                console.error(error);
            })
    }

    return (
        <div className='mt-20'>
            <div className='w-1/2 mx-auto'>
                <h2 className='text-xl font-bold mb-3'>Please Register!</h2>

                {/* form */}
                <form onSubmit={handleRegister} className='space-y-2'>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path
                                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="email" name='email' className="grow" placeholder="Email" required />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                clipRule="evenodd" />
                        </svg>
                        <input type={showPass ? "text" : "password"} name='password' className="grow" placeholder='Password' required />
                        <span
                            onClick={() => setShowPass(!showPass)}
                        >
                            {
                                showPass ? <FaEyeSlash /> : <FaEye />
                            }
                        </span>
                    </label>
                    <div className='pb-2'>
                        <input className='mr-1' type="checkbox" name="terms" id="terms" />
                        <label htmlFor="terms">accept terms and conditions</label>
                    </div>
                    <input type="submit" value="Register" className="btn btn-active btn-accent" />
                </form>
                {
                    error && <p className='text-red-600'>{error}</p>
                }
                {
                    success && <p className='text-green-700'>{success}</p>
                }
            </div>
        </div>
    );
};

export default Register;