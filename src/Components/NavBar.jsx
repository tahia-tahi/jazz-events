import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png';
import { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import logo from '../assets/j-event.png'

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log('Sign-out successful.'))
      .catch((error) => console.log(error));
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="w-full bg-base-100 shadow-md">
      <div className="w-11/12 mx-auto p-4 flex justify-between items-center">

      <div className='flex items-center gap-0' >
      <img className='w-[50px]' src={logo} alt="" />
      <h1 className="text-2xl  text-primary font-bold">Jazz Events</h1>
      </div>
       

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <HiX size={27} /> : <HiMenuAlt3 size={27} />}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-5">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? 'border-b-2 font-semibold text-primary' : 'text-accent hover:underline'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'border-b-2 font-semibold text-primary' : 'text-accent hover:underline'
            }
          >
            About
          </NavLink>


        </div>

        <div className="hidden md:flex items-center gap-3">
  {user ? (
    <>
      <div className="flex items-center gap-2">
        <img
          className="w-10 h-10 rounded-full"
          src={user.photoURL || userIcon}
          alt="User Icon"
          title={user.displayName}
        />
        
        <div className="flex flex-col">
  <span className="text-sm font-medium text-gray-700">
    {user.displayName || user.email}
  </span>
  <Link to="/myprofile" onClick={toggleMenu} className="text-xs text-accent hover:underline">
    My Profile
  </Link>
</div>

      </div>
      <button onClick={handleLogOut} className="btn btn-primary text-white hover:btn-secondary">
        Log Out
      </button>
    </>
  ) : (
    <>
      <Link to="/auth/login" className="btn btn-primary text-white hover:btn-secondary">
        Log In
      </Link>
      <Link to="/auth/register" className="btn btn-outline btn-secondary">
        Register
      </Link>
    </>
  )}
</div>


        
      </div>

      {isMenuOpen && (
        <div className="md:hidden w-11/12 mx-auto px-4 pb-4 flex flex-col gap-3">
          <NavLink
            to="/"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive ? 'font-semibold text-primary border-b-2' : 'text-accent'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={toggleMenu}
            className={({ isActive }) =>
              isActive ? 'font-semibold text-primary border-b-2' : 'text-accent'
            }
          >
            About
          </NavLink>

          <div className="flex flex-col gap-2 mt-3">
  {user ? (
    <>
      <div className="flex items-center gap-2">
        <img
          className="w-10 h-10 rounded-full"
          src={user.photoURL || userIcon}
          alt="User Icon"
        />
        <span className="text-sm font-medium text-gray-700">
          {user.displayName || user.email}
        </span>
      </div>
      <button onClick={handleLogOut} className="btn btn-primary text-white hover:btn-secondary mt-2">
        Log Out
      </button>
    </>
  ) : (
    <>
      <Link to="/auth/login" className="btn btn-primary text-white hover:btn-secondary">
        Log In
      </Link>
      <Link to="/auth/register" className="btn btn-outline btn-secondary">
        Register
      </Link>
    </>
  )}
</div>



        </div>
      )}
    </nav>
  );
};

export default NavBar;
