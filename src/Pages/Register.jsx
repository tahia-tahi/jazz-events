import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import GoogleSignIn from '../Provider/GoogleSignIn';

import ShowHidePassword from '../Components/ShowHidePassword';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';




const Register = () => {

    const { createUser, setUser, updateUser } = use(AuthContext)
    const [nameError, setNameError] = useState("");
    const [passwordError, setPasswordError] = useState('')



    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();


        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value

        if (name.length < 5) {
            setNameError('Name should more than 5 character')
            return
        } else {
            setNameError('')
        }

        if (passwordRegex.test(password) === false) {
            setPasswordError('Password must have an uppercase letter, a Lowercase letter,least 6 character')
            return;
        }

        console.log(name, email, password, photo);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo }).then(() => {
                    setUser({ ...user, displayName: name, photoURL: photo });
                    toast.success('Register Successfull!!')
                    
                    navigate('/')
                })
                    .catch((error) => {
                        console.log(error);
                        setUser(user)
                    })
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });

    }

    return (
        <div>
            <Helmet>
                <title>  Register</title>
              </Helmet>
            <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleRegister} className="card-body">
                    <h1 className="text-3xl text-center text-accent font-bold">Register now!</h1>
                    <fieldset className="fieldset">

                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" required />


                        {nameError && <p className='text-xs text-error'>{nameError}</p>}

                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required />

                        <label className="label">Photo</label>
                        <input type="text" name='photo' className="input" placeholder="Photo URL" required />

<ShowHidePassword></ShowHidePassword>


                        <button type='submit' className="btn btn-primary hover:btn-secondary mt-4">Register</button>
                        <p className='text-center font-bold my-2 text-primary'>OR</p>

                        <GoogleSignIn></GoogleSignIn>

                        <p className='mt-3'>Already have an account? <Link className='text-primary font-semibold hover:text-secondary' to={'/auth/login'}>Log In</Link></p>
                    </fieldset>

                    {passwordError && <p className='text-xs text-error'>{passwordError}</p>}
                </form>
            </div>
        </div>
    );
};

export default Register;