import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkLoginDetails, checkSignUpForm } from '../utils/Validate';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { NetflixBg } from '../utils/constants';

const Login = () => {

    const [isSignInForm,setisSignInForm]=useState(true);
    const [errorMessage,seterrorMessage]=useState(null);

    const dispatch=useDispatch();

    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);

    const toggleevent=()=>{
        setisSignInForm(!isSignInForm);
    }

    const handleSignIn=()=>{
        // Validate login or signup data 
        // console.log(email.current.value)
        // console.log(pwd.current.value)
        if (isSignInForm){
            const message=checkLoginDetails( email.current.value,password.current.value);
            seterrorMessage(message);

            //(SIGN-In) if validations passed authenticate the user to sign-in.
            if(message===null){

                signInWithEmailAndPassword(auth, email.current.value, password.current.value).then((userCredential) => {
                    // Signed in (AUthenticated) 
                    // const user = userCredential.user;
                    // console.log(user);


                }).catch((error) => {
                        // const errorCode = error.code;
                        // const errorMessage = error.message;
                        seterrorMessage("Invalid User")
               });
        }
        }else{
            const message=checkSignUpForm(name.current.value,email.current.value,password.current.value );
            seterrorMessage(message);
            // console.log(message);

            //(SIGN-UP) if validations passed create a user using firebase.
            if(message===null){
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value).then((userCredential) => {
                    // Signed up (Success)
                    // const user = userCredential.user;
                    updateProfile(auth.currentUser, {
                        displayName: name.current.value
                      }).then(() => {
                        // Profile updated! so get values from auth and dispatch to user store
                        // ...if you use user to get values you will recieve old values but not updated. so auth.currenUser
                        const {uid, email,displayName}= auth.currentUser; 
                        dispatch(addUser({uid:uid, email:email,displayName:displayName}));
                      }).catch((error) => {
                        // An error occurred
                        // ...
                      });
                    // console.log(user);

                }).catch((error) => {
                    // const errorCode = error.code;
                    // const errorMessage = error.message;
                    seterrorMessage("Email already in use");
                });
            }
        }
        
    }
  return (
        <div>
            <Header/>
            <div className="absolute inset-0">
                <img className="object-cover object-center h-screen  w-full md:h-full " src={NetflixBg} alt="bg-logo"/>
        </div>
            <form onSubmit={(e)=>e.preventDefault()} className='absolute bg-black p-4  md:p-12  rounded-lg w-4/5 md:w-3/12 my-40  mx-auto left-0 right-0 bg-opacity-75'>
                <h1 className='text-3xl text-white font-semibold '>{isSignInForm ? "Sign In" :"Sign up"}</h1>
                {!isSignInForm && <input ref={name} type='text' className='p-2 my-4 w-full bg-gray-800 text-white rounded-md bg-opacity-75 border border-gray-500' placeholder='Enter Full Name'/>}
                <input ref={email} type='text' className='p-2 my-4 w-full bg-gray-800 text-white rounded-md bg-opacity-75 border border-gray-500' placeholder='Enter Email'></input>
                <input ref={password} type='password' className='p-2 my-4 w-full bg-gray-800 text-white rounded-md bg-opacity-75 border border-gray-500' placeholder='Enter Password'></input>
                <p className='text-red-600 text-lg py-1'>{errorMessage}</p>
                <button className='bg-red-600 p-2 my-4 w-full rounded-lg  font-semibold hover:bg-red-800' onClick={handleSignIn}>{isSignInForm ? "Sign In" :"Sign up"}</button>
                <p className='text-white cursor-pointer' onClick={toggleevent}>{isSignInForm ? "New to Netflix? Sign Up" :"Already a user? Sign In"}</p>
            </form>
        </div>

  )
}

export default Login