import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import NavBar from '../Components/NavBar';

const MyProfile = () => {
  const { user, setUser } = useContext(AuthContext);

  const [name, setName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [loading, setLoading] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    setLoading(true);

    updateProfile(user, {
      displayName: name,
      photoURL: photoURL
    })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL });
        toast.success('Profile updated successfully!');
      })
      .catch((error) => {
        toast.error(`Failed to update: ${error.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (

    <div>

        <NavBar></NavBar>
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded mt-20">
       
       <h2 className="text-2xl font-bold mb-4 text-center">My Profile</h2>
 
       <div className="text-center mb-6">
         <img
           src={user?.photoURL || 'https://via.placeholder.com/150'}
           alt="Profile"
           className="w-24 h-24 rounded-full mx-auto border"
         />
         <h3 className="text-xl font-semibold mt-2">{user?.displayName}</h3>
         <p className="text-sm text-gray-500">{user?.email}</p>
       </div>
 
       <form onSubmit={handleUpdate}>
         <label className="block mb-2 font-medium">Edit Name</label>
         <input
           type="text"
           className="input input-bordered w-full mb-4"
           value={name}
           onChange={(e) => setName(e.target.value)}
         />
 
         <label className="block mb-2 font-medium">Edit Photo URL</label>
         <input
           type="text"
           className="input input-bordered w-full mb-4"
           value={photoURL}
           onChange={(e) => setPhotoURL(e.target.value)}
         />
 
         <button
           type="submit"
           className={`btn btn-primary w-full ${loading ? 'btn-disabled' : ''}`}
         >
           {loading ? 'Updating...' : 'Save Changes'}
         </button>
       </form>
     </div>

    </div>


  );
};

export default MyProfile;
