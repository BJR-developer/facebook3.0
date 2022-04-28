import React, { useState, Fragment } from 'react';
import { signOut } from 'next-auth/react';
import { Menu, Transition } from '@headlessui/react'
import classNames from 'classnames';

import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import { AiOutlineSearch, AiOutlineHome, AiOutlineShop } from 'react-icons/ai';
import { FiMonitor } from 'react-icons/fi';
import { RiGroupLine, RiMessengerFill, RiGamepadLine } from 'react-icons/ri';
import { IoApps, IoNotificationsCircleSharp } from 'react-icons/io5';
import { MdArrowDropDown } from 'react-icons/md';

export default function Navbar() {
  const [searchVal, setSearch] = useState('');
  const { data: session } = useSession();
  var fName = session.user.name.split(" ");
  fName = fName[0]
  return (
    <>
      <Head>
        <title>Facebook 3.0</title>
        <link rel='icon' href='/images/fbsvg.png' />
      </Head>
      <div className='navbarSticky pl-3 pr-2 pt-1 pb-1 sm:p-0 flex justify-between lg:justify-center shadow bg-white'>
        {/* under code for leftHeader */}
        <div className='leftBar flex msm:hidden'>
          <div className='logo pt-1 mt-[3px]'>
            <Image alt="Facebook logo" src='/images/fbsvg.png' width={30} height={30} />
          </div>
          <div style={{ marginTop: "5px" }} className='searchBar lg:hidden ml-2 flex items-center bg-gray-100 rounded-2xl h-7 w-48 lg:w-auto pr-2'>
            <div className='searchLogo sm:hidden ml-2'><AiOutlineSearch /></div>
            <input style={{ margin: "" }} className='inputBox lg:hidden text-xs bg-transparent w-40 overflow-hidden outline-none placeholder:text-xs flex placeholder:mb-4 ml-2' placeholder='Search Facebook' type='text' value={searchVal} onChange={(e) => { setSearch(e.target.value) }} />
          </div>
        </div>
        {/* under code for middleBar */}

        <div className='middleBar flex items-center'>
          <Link href="/">
            <a style={{ marginBottom: "-10px", }} className=' pb-3 hover:border-blue-500 hover:text-blue-700 focus:border-blue-500 focus:text-blue-700 border-b-2 border-b-transparent focus:transition-all duration-700 text-gray-600 text-xl pl-9 pr-6 md:pl-7 md:pr-7' ><AiOutlineHome /></a>
          </Link>
          <Link href="/#">
            <a style={{ marginBottom: "-10px", }} className=' pb-3 hover:border-blue-500 hover:text-blue-700 focus:border-blue-500 focus:text-blue-700 border-b-2 border-b-transparent focus:transition-all duration-700 text-gray-600 text-xl pl-9 pr-6 md:pl-7 md:pr-7' ><RiGroupLine /> </a>
          </Link>
          <Link href="/#">
            <a style={{ marginBottom: "-10px", }} className=' pb-3 hover:border-blue-500 hover:text-blue-700 focus:border-blue-500 focus:text-blue-700 border-b-2 border-b-transparent focus:transition-all duration-700 text-gray-600 text-xl pl-9 pr-6 md:pl-7 md:pr-7' ><FiMonitor /></a>
          </Link>
          <Link href="/#">
            <a style={{ marginBottom: "-10px", }} className=' pb-3  hover:border-blue-500 hover:text-blue-700 focus:border-blue-500 focus:text-blue-700 border-b-2 border-b-transparent focus:transition-all duration-700 text-gray-600 text-xl pl-9 pr-6 md:pl-7 md:pr-7' ><AiOutlineShop /></a>
          </Link>
          <Link href="/#">
            <a style={{ marginBottom: "-10px", }} className=' pb-3 msm:hidden hover:border-blue-500 hover:text-blue-700 focus:border-blue-500 focus:text-blue-700 border-b-2 border-b-transparent focus:transition-all duration-700 text-gray-600 text-xl pl-9 pr-6 md:pl-7 md:pr-7' ><RiGamepadLine /></a>
          </Link>
        </div>

        {/* below code for rightbar */}

        <div className='rightBar flex items-center'>
          {/* profile Logo  */}
          {/* <div className='smallProfile mr-2 flex justify-center cursor-pointer bg hover:bg-gray-200 transition-all duration-500 pl-2 pr-2 sm:p-0 rounded-full'>
            <div className='profileIcon mt-1'> 
            <Image alt='profile icon' className='rounded-full sm:p-0 sm:hidden' src={session.user.image} width={25} height={25} />
            </div>
            <div style={{ marginTop: "8px", fontWeight: "500" }} className='profileFName lg:hidden pl-1 first-line: text-xs'>{fName}</div>
          </div> */}
          {/* another option by icons  */}
          <IoApps style={{ fontSize: "33px" }} className=' md:hidden bg-gray-200 lg:hidden transition-all duration-500 rounded-full p-2 mr-2 cursor-pointer hover:bg-gray-300' />
          <RiMessengerFill style={{ fontSize: "33px" }} className=' md:hidden bg-gray-200 transition-all duration-500 rounded-full p-2 mr-2 cursor-pointer hover:bg-gray-300' />
          <IoNotificationsCircleSharp style={{ fontSize: "33px" }} className='md:hidden bg-gray-200 lg:hidden transition-all duration-500 rounded-full p-2 mr-2 cursor-pointer hover:bg-gray-300' />
          {/* this is a tallwind dropdown components */}
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button>
                <div className='logo pt-1  rounded-full'>
                  <Image alt="Facebook logo" src={session.user.image} width={30} height={30} className="rounded-full" />
                </div>
                {/* <MdArrowDropDown style={{ fontSize: "33px", marginTop: "5px" }} aria-hidden='true' className=' bg-gray-200 transition-all duration-500 rounded-full p-2 mr-2 cursor-pointer hover:bg-gray-300' aria-expanded='true' aria-haspopup='true' /> */}
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <div className=' text-sm font-medium pl-3 mb-5'>
                    signed in as
                    <div className='gmail text-sm font-bold break-words'>
                      {session.user.email}
                    </div>
                  </div>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Account settings
                      </a>
                    )}
                  </Menu.Item>
                  <div>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          onClick={() => { signOut() }}
                          className={classNames(
                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                            'block w-full text-left px-4 py-2 text-sm'
                          )}
                        >
                          Sign out
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

        </div>

      </div>
    </>);
}
