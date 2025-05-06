import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import GoogleSignIn from '../Provider/GoogleSignIn';
import { toast } from 'react-toastify';
import ShowHidePassword from '../Components/ShowHidePassword';
import { sendPasswordResetEmail } from 'firebase/auth';
import auth from '../Firebase/firebase.config';
import { Helmet } from 'react-helmet-async';

const LogIn = () => {

  const [error, setError] = useState('')
  const emailRef = useRef()

  const { signIn } = use(AuthContext)
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate()
  const handleLogIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value
    console.log({ email, password });
    signIn(email, password).then(result => {
      const user = result.user
      console.log(user);
      toast.success('Login Successfull!!')
      navigate(`${location.state ? location.state : '/'}`)

    })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log(errorMessage);
        setError(errorCode)
      });


  }

  const handleForgetPassword = () => {
    const email = emailRef.current.value
    console.log(email);

    setError('')
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.warn('A password reset email has sent. Please check email.')
      })
      .catch((error) => {

        if( error.code === 'auth/user-not-found'){
          toast.error('No user found')
        }else if(error.code === 'auth/invalid-email'){
          toast.error('Invalid email')
        }else{
          toast.error(error.message || 'Something went wrong.');
        }
      
      })
  }
  return (
    <div className=''>
      <Helmet>
        <title>Log in</title>
      </Helmet>

      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogIn} className="card-body">
          <h1 className="text-3xl text-center text-accent font-bold">Login now!</h1>
          <fieldset className="fieldset">

            <label className="label">Email</label>
            <input type="email" name='email' ref={emailRef} className="input" placeholder="Email" required />

            <ShowHidePassword></ShowHidePassword>

            <div><a onClick={handleForgetPassword} className="link link-hover">Forgot password?</a></div>

            {error && <p className='text-red-600'>{error}</p>}

            <button type='submit' className="btn btn-primary hover:btn-secondary mt-4">Login</button>

            <p className='text-center font-bold my-2 text-primary'>OR</p>

            <GoogleSignIn></GoogleSignIn>
            <p className='mt-3'>Don't have an account? <Link className='text-primary font-semibold hover:text-secondary' to={'/auth/register'}>Register</Link></p>
          </fieldset>
        </form>
      </div>

    </div>
  );
};

export default LogIn;