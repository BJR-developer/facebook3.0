import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {  signIn , signOut } from 'next-auth/react';

export default function Login() {
  return (<>
  <Head>
      <link rel='icon' href='/images/fbsvg.png' />
      <title>Facebook 3.0 Login</title>
  </Head>
      <div className='loginForm flex flex-col justify-center m-auto'>
          <div className='title mb-5 mt-5 flex items-center justify-center'>
              <Image alt='facebook logo' src='/images/fbsvg.png' width={100} height={100} />
              <div className='tText text-6xl text-blue-500 font-bold'>3.0</div>
          </div>
          <div className='login bg-blue-600 p-1 rounded-full w-64 flex items-center m-auto justify-center'>
              <div className='forBg flex items-center justify-center'>
              <Image alt='facebook logo' src='/images/fbsvg.png' width={20} height={20} />
              <div onClick={()=>{signIn()}} className='logintext cursor-pointer ml-2 text-white font-medium'>LOGIN WITH FACEBOOK</div>
              </div>
          </div>
      </div>
  </>)
}
