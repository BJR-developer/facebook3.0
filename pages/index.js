import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import Navbar from '../components/Navbar';
import Leftbar from '../components/Leftbar';
import Rightbar from '../components/Rightbar';
import Main from '../components/Main'
import Login from '../components/Login';
export default function index() {
  const { data: session } = useSession()

  console.log(session);
  if (session){
    return (
      <>
  <div className='fullcontainer'>
    <Navbar />
    <div className='maincontainer flex justify-center'>
    <Leftbar />
    <Main />
    <Rightbar />
    </div>
  </div>
  </>);
  }
   
  return (
  <> 
<div className='login'>
    <Login />
  </div>
  </>
  );
}
