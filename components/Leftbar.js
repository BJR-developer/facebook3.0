import React from 'react';
import Image from 'next/image';
import OptionName from './loop/leftOptionName';
import { FaUserFriends , FaUserClock } from 'react-icons/fa';
import { MdGroups , MdMonitor } from 'react-icons/md';
import { FaStore , FaFlag } from 'react-icons/fa';
import { BsSaveFill , BsFillCalendarEventFill, BsBagDashFill } from 'react-icons/bs';

export default function Leftbar() {
  return (
  <div className='leftBar fixed left-0 pt-5 w-64 flex flex-col shadow-md rounded-sm ml-3 mt-5'>

      <div className='smallProfile pl-3 pr-3 flex cursor-pointer bg hover:bg-gray-200 transition-all duration-150'>
      <div className='profileIcon mt-1'> <Image className='rounded-full' src='/images/bjr.jpg' width={25} height={25} /></div>
      <div style={{marginTop:"8px" , fontWeight:"500"}} className='profileFName pl-1 text-xs'>Jamilur Rahman Bjr</div>
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
