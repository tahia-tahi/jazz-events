import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import GoogleSignIn from '../Provider/GoogleSignIn';

const LogIn = () => {

  const [error, setError] = useState('')

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
      navigate(`${location.state ? location.state : '/'}`)
    })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        // console.log(errorMessage);
        setError(errorCode)
      });
  }


  return (
    <div className=''>


      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogIn} className="card-body">
          <h1 className="text-3xl text-center text-accent font-bold">Login now!</h1>
          <fieldset className="fieldset">

            <label className="label">Email</label>
            <input type="email" name='email' className="input" placeholder="Email" required />

            <label className="label">Password</label>
            <input type="password" name='password' className="input" placeholder="Password" required />

            <div><a className="link link-hover">Forgot password?</a></div>

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