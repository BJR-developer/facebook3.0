import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineSearch , AiOutlineHome , AiOutlineShop } from 'react-icons/ai';
import {FiMonitor} from 'react-icons/fi';
import {RiGroupLine , RiMessengerFill , RiGamepadLine} from 'react-icons/ri';
import { IoApps , IoNotificationsCircleSharp } from 'react-icons/io5';
import { MdArrowDropDown } from 'react-icons/md';

export default function Navbar() {
  const [searchVal , setSearch] = useState('');
  return (
    <>
    <Head>
      <title>Facebook 3.0</title>
      <link rel='icon' href='/images/fbsvg.png' />
    </Head>
  <div className='navbarSticky pl-3 pr-2 pt-1 pb-1 flex justify-between shadow bg-white'>
    {/* under code for leftHeader */}
    <div className='leftBar flex'>
      <div className='logo'>
      <Image alt="Facebook logo" src='/images/fbsvg.png' width={30} height={30} />
      </div>
      <div style={{marginTop:"2px"}} className='searchBar ml-2 flex items-center bg-gray-100 rounded-2xl h-7 w-48'>
        <div className='searchLogo ml-2'><AiOutlineSearch /></div>
        <input style={{margin:""}} className='inputBox text-xs bg-transparent w-40 overflow-hidden outline-none placeholder:text-xs flex placeholder:mb-4 ml-2' placeholder='Search Facebook' type='text' value={searchVal} onChange={(e)=>{setSearch(e.target.value)}}/>
      </div>
    </div>
    {/* under code for middleBar */}

    <div className='middleBar flex items-center'>
    <Link  href="/">
    <a style={{marginBottom:"-10px" , }} className=' pb-3 hover:border-blue-500 hover:text-blue-700 focus:border-blue-500 focus:text-blue-700 border-b-2 border-b-transparent focus:transition-all duration-700 text-gray-600 text-xl pl-9 pr-9' ><AiOutlineHome   /></a>
    </Link>
    <Link  href="/#">
    <a style={{marginBottom:"-10px" , }} className=' pb-3 hover:border-blue-500 hover:text-blue-700 focus:border-blue-500 focus:text-blue-700 border-b-2 border-b-transparent focus:transition-all duration-700 text-gray-600 text-xl pl-9 pr-9' ><RiGroupLine  /> </a>
    </Link>
    <Link  href="/#">
    <a style={{marginBottom:"-10px" , }} className=' pb-3 hover:border-blue-500 hover:text-blue-700 focus:border-blue-500 focus:text-blue-700 border-b-2 border-b-transparent focus:transition-all duration-700 text-gray-600 text-xl pl-9 pr-9' ><FiMonitor   /></a>
    </Link>
    <Link  href="/#">
    <a style={{marginBottom:"-10px" , }} className=' pb-3 hover:border-blue-500 hover:text-blue-700 focus:border-blue-500 focus:text-blue-700 border-b-2 border-b-transparent focus:transition-all duration-700 text-gray-600 text-xl pl-9 pr-9' ><AiOutlineShop   /></a>
    </Link>
    <Link  href="/#">
    <a style={{marginBottom:"-10px" , }} className=' pb-3 hover:border-blue-500 hover:text-blue-700 focus:border-blue-500 focus:text-blue-700 border-b-2 border-b-transparent focus:transition-all duration-700 text-gray-600 text-xl pl-9 pr-9' ><RiGamepadLine   /></a>
    </Link>
    </div>

    {/* below code for rightbar */}

    <div className='rightBar flex items-center'>
    {/* profile Logo  */}
      <div className='smallProfile mr-2 flex justify-center cursor-pointer bg hover:bg-gray-200 transition-all duration-500 pl-2 pr-2 rounded-full'>
      <div className='profileIcon mt-1'> <Image className='rounded-full' src='/images/bjr.jpg' width={25} height={25} /></div>
      <div style={{marginTop:"8px" , fontWeight:"500"}} className='profileFName pl-1 text-xs'>Jamilur</div>
      </div>
    {/* another option by icons  */}
    <IoApps style={{fontSize:"33px"}} className=' bg-gray-200 transition-all duration-500 rounded-full p-2 mr-2 cursor-pointer hover:bg-gray-300' />
    <RiMessengerFill style={{fontSize:"33px"}} className=' bg-gray-200 transition-all duration-500 rounded-full p-2 mr-2 cursor-pointer hover:bg-gray-300' />
    <IoNotificationsCircleSharp style={{fontSize:"33px"}} className=' bg-gray-200 transition-all duration-500 rounded-full p-2 mr-2 cursor-pointer hover:bg-gray-300' />
    <MdArrowDropDown style={{fontSize:"33px"}} className=' bg-gray-200 transition-all duration-500 rounded-full p-2 mr-2 cursor-pointer hover:bg-gray-300' />
    </div>

  </div>
  </>);
}
