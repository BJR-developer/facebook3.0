import React from 'react';
import { FcCameraAddon } from 'react-icons/fc';
import ActiveContact from '../loop/ActiveContact';
    export default function RoomCreate() {
      return (<div className='createRoom mt-5 shadow-md rounded-md p-2 flex items-center'>
      <div className='room flex items-center shadow-md p-2 rounded-full w-32'>
        <FcCameraAddon />
        <span className='createRoomText cursor-pointer text-sm font-medium text-gray-700 ml-2'> Create Room </span>
      </div>
      <div className='contactlist flex ml-2'>
     <ActiveContact 
         imgUrl = '/images/raiyana.jpg'
     />
     <ActiveContact 
         imgUrl = '/images/arif.jpg'
     />
     <ActiveContact 
         imgUrl = '/images/nahida.jpg'
     />
      </div>
  </div>
  );
    }
