import React from 'react';
import { useSession } from "next-auth/react"
import Navbar from '../components/Navbar';
import Leftbar from '../components/Leftbar';
import Rightbar from '../components/Rightbar';
import Main from '../components/Main'
import Login from '../components/Login';
import { Loader } from '../components/Loader';
export default function Index() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <div className=' min-h-screen my-auto flex items-center justify-center flex-cols'>
      <Loader />
    </div>
  }

  if (status === "unauthenticated") {
    return (
      <>
        <div className='login'>
          <Login />
        </div>
      </>
    );
  }

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