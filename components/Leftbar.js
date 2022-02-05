import React from 'react';
import Image from 'next/image';
import OptionName from './loop/LeftOptionName';
import { useSession } from 'next-auth/react';
import { FaUserFriends ,FaStore ,  FaFlag ,FaUserClock } from 'react-icons/fa';
import { MdGroups , MdMonitor } from 'react-icons/md';
import { BsSaveFill , BsFillCalendarEventFill, BsBagDashFill } from 'react-icons/bs';

export default function Leftbar() {
    const { data:session } = useSession();
  return (
  <div className='leftBar lg:w-auto bg-white fixed left-0 sm:w-full sm:left-auto sm:justify-evenly sm:bottom-0 sm:flex-row z-50 sm:items-center allStorySec h-5/6 sm:h-auto sm:pt-0 overflow-scroll pt-5 w-64 flex flex-col shadow-md rounded-sm ml-3 mt-5'>

      <div className='smallProfile pl-3 pr-3 flex cursor-pointer bg hover:bg-gray-200 transition-all duration-150'>
      <div className='profileIcon mt-1'> <Image className='rounded-full' alt='profile image' src={session.user.image} width={25} height={25} /></div>
      <div style={{marginTop:"8px" , fontWeight:"500"}} className='profileFName lg:hidden pl-1 text-xs'>{session.user.name}</div>
      </div>

      <OptionName 
          iconName={<FaUserFriends/>}
          optionName="Find Friends"
      />
      <OptionName 
          iconName={<MdGroups/>}
          optionName="Groups"
      />
      <OptionName 
          iconName={<FaStore/>}
          optionName="Marketplace"
      />
      <OptionName 
          iconName={<MdMonitor/>}
          optionName="Watch"
      />
      <OptionName 
          iconName={<FaUserClock/>}
          optionName="Memories"
      />
      <OptionName 
          iconName={<BsSaveFill/>}
          optionName="Saved"
      />
      <OptionName 
          iconName={<FaFlag/>}
          optionName="Pages"
      />
      <OptionName 
          iconName={<BsFillCalendarEventFill/>}
          optionName="Events"
      />
      <OptionName 
          iconName={<BsBagDashFill/>}
          optionName="Jobs"
      />
  </div>
  );
}
