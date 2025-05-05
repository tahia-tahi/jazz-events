import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png'
import { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const NavBar = () => {

    const { user, logOut } = use(AuthContext)


    const handleLogOut = () =>{
        console.log('trying to logout');
        logOut().then(() => {
            console.log('Sign-out successful.');
          
          }).catch((error) => {
            console.log(error);
          });
    }

    return (
        <div className='w-11/12 mx-auto p-3 flex justify-between items-center'>
            <h1 className='text-4xl text-primary font-bold'>Jazz Events</h1>

            <div className='flex justify-center gap-4' >
                <NavLink to={'/'} end className={({ isActive }) => isActive ? 'border-b-2 font-semibold text-primary' : 'text-accent'}>Home</NavLink>
                <NavLink to={'/about'} className={({ isActive }) => isActive ? 'border-b-2 font-semibold text-primary' : 'text-accent'}>About</NavLink>
            </div>

            <div className='flex justify-center gap-3'>
                <div className='flex items-center gap-2'>

                    <img className='w-12 rounded-full' src={`${user ? user.photoURL: userIcon}`} title={user ? user.displayName : 'user'} alt="" />
                    <p>{user ? ( <button onClick={handleLogOut} className='btn btn-primary text-white hover:btn-secondary '>Log Out</button>) : 
                    
                    (<Link to={'/auth/login'} className='btn btn-primary text-white hover:btn-secondary'>Log In</Link>
                    )}</p>
                </div>
            </div>

        </div>
    );
};

export default NavBar;