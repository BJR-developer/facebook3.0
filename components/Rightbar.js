import React from 'react';
import Image from 'next/image';
import {BiVideoPlus, BiSearchAlt2, BiDotsHorizontal } from 'react-icons/bi';
import { RightActiveContact } from './loop/RightActiveContact';
const Rightbar = () => {
    return (
        <div className='rightBar h-5/6 overflow-y-auto md:hidden  fixed right-0 pt-5 pl-5 w-64 lg:w-auto float-right shadow-md rounded-sm mr-3 mt-5'>
            <div className='rTitleBar flex justify-between text-gray-500 font-medium'>
                <div className='contactsName text-sm lg:hidden'>Active Contacts</div>

                <div className='iconOption flex items-center '>
                    <BiVideoPlus className='mr-3 lg:hidden'/>
                    <BiSearchAlt2 className='mr-3'/>
                    <BiDotsHorizontal className='mr-3'/>
                </div>
            </div>
            <div className='contactList pt-3 items-end'>
                  <RightActiveContact 
                      profileId = 'Jamilur Rahman Bjr'
                      profileUrl = 'https://www.facebook.com/jamilur.rahman.bjr'
                      profileImg = '/images/bjr.jpg'
                  />
                  <RightActiveContact 
                      profileId = 'Arif Mahmud Ryan'
                      profileUrl = 'https://www.facebook.com/enter.text.3781'
                      profileImg = '/images/arif.jpg'
                  />
                  <RightActiveContact 
                      profileId = 'Earshad Ullah'
                      profileUrl = 'https://www.facebook.com/earshad.ullah.56'
                      profileImg = '/images/ear-mama.jpg'
                  />
                  <RightActiveContact 
                      profileId = 'Raiyana Azad'
                      profileUrl = 'https://www.facebook.com/naznin.azad.982'
                      profileImg = '/images/raiyana.jpg'
                  />
                  <RightActiveContact 
                      profileId = 'Nahida Shikha'
                      profileUrl = 'https://www.facebook.com/nahida.shikha.94'
                      profileImg = '/images/nahida.jpg'
                  />
                  <RightActiveContact 
                      profileId = 'Atiqur Rahman'
                      profileUrl = 'https://www.facebook.com/atiq.sabiat'
                      profileImg = '/images/atiq.jpg'
                  />
                 
            </div>
        </div>
    )
};
export default Rightbar;
