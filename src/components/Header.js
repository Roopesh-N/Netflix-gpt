import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { NetflixLogo, UserLogo, languageOptions } from '../utils/constants';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toggleGptSearch } from '../utils/GptSlice';
import { changeLanguage } from '../utils/langSlice';

const Header = () => {

  const doSearch=useSelector(store=>store.GptSearch.doSearch);

  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=auth.currentUser;  
  const handlesignout=()=>{

      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
});
}
const handleGptToggle=()=>{
  dispatch(toggleGptSearch());
}

const handlelanguageChange=(e)=>{
  dispatch(changeLanguage(e.target.value))
}

  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid, email,displayName}= user;
            dispatch(addUser({uid:uid, email:email,displayName:displayName}));
            navigate('/browse');
        } else {
            dispatch(removeUser());
            navigate('/');
        }
    });
    //unsubscribe when component unmounts
    return ()=>unsubscribe();
},[]);

  return (
    <div className='absolute w-full bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-center md:justify-between'> 
          <img className='w-44 mx-auto md:mx-0 px-5 py-3 hover:cursor-pointer' src={NetflixLogo} alt='logo'/>
    {(user!=null)&&  
          <div className='flex p-2'>
            {(doSearch)?
            <>
            <select className='my-8 p-2 rounded-md text-white bg-gray-500' onChange={handlelanguageChange}>
                {languageOptions.map(lang=><option value={lang.identifier} key={lang.identifier}>{lang.name}</option>)}
            </select>
            </> : ""
            }
            <button className='my-8 rounded-md p-2 mx-2 bg-blue-500 text-white hover:opacity-75' onClick={handleGptToggle}>{(doSearch)? "Homepage":"GPT Search"}</button>
              <img className="w-12 h-12 m-6 rounded-md hover:cursor-pointer" src={UserLogo} alt='userlogo'/>
            <button onClick={handlesignout} className='ml-2 mr-2 text-xl font-medium text-white '>Sign out</button>
          </div>
      }
    </div>
      

  
  )
}


export default Header