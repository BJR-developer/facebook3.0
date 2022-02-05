import React from 'react';
import { useSession } from "next-auth/react"
import Navbar from '../components/Navbar';
import Leftbar from '../components/Leftbar';
import Rightbar from '../components/Rightbar';
import Main from '../components/Main'
import Login from '../components/Login';
export default function Index() {
  const { data: session } = useSession()

  if (!session){
    return (
      <> 
    <div className='login'>
        <Login />
      </div>
      </>
      );
  }
   else {
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
}