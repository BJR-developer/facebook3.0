import React from 'react';
import { BsDot } from 'react-icons/bs';
import Image from 'next/image';
export default function ActiveContact(props) {
  return (
    <div className='profileIcon rounded-full flex bottom-0'>
    <Image alt='active image' className='rounded-full' src={props.imgUrl}
                        width={25}
                        height={25}/>
    <BsDot style={{marginLeft:"-15px" , position:"relative" , top:"9px"}} className=' text-2xl text-green-600 scale-125' />
</div>
  );
}
