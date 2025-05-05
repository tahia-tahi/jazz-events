import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

    const {createUser, setUser, updateUser} = use(AuthContext)
    const [nameError, setNameError] = useState("");

    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();


        const form = e.target;
        const name = form.name.value
        const email = form.email.value
        const photo = form.photo.value
        const password = form.password.value

        if(name.length < 5 ){
            setNameError('Name should more than 5 character')
            return
        }else{
            setNameError('')
        }
        
        console.log(name,email,password,photo);
        createUser(email,password)
        .then(result=> {
            const user = result.user;
            updateUser({displayName: name, photoURL: photo}).then(()=>{
                setUser({...user,displayName: name, photoURL: photo});
                navigate('/')
            })
            .catch((error)=>{
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
            <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleRegister} className="card-body">
                    <h1 className="text-3xl text-center text-accent font-bold">Register now!</h1>
                    <fieldset className="fieldset">

                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Name" required />


{nameError && <p className='text-xs text-error'>{nameError}</p>}

                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" required/>

                        <label className="label">Photo</label>
                        <input type="text" name='photo' className="input" placeholder="Photo URL" required />

                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" required />
                        <div><a className="link link-hover">Forgot password?</a></div>

                        <button type='submit' className="btn btn-primary hover:btn-secondary mt-4">Register</button>

                        <p className='mt-3'>Already have an account? <Link className='text-primary font-semibold hover:text-secondary' to={'/auth/login'}>Log In</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;