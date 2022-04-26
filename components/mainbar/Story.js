import React from 'react';
import Image from 'next/image';
import { AiOutlinePlus } from 'react-icons/ai';
import {useSession} from 'next-auth/react'
import StoryAbove from '../loop/StoryAbove';
export const Story = () => {
  const {data:session} = useSession()
  return (
      <>
      {/* if no story available */}
  <div className='Littlestory p-2 shadow-md flex items-center  w-auto m-auto'>
    <div className='plusIcon p-2 bg-blue-100 rounded-full'>
        <AiOutlinePlus className=' text-blue-600' />
    </div>
    <div className=' flex flex-col ml-3'>
    <div className='createStory text-sm font-medium'>Create Story</div>
    <div className='sharePhoto text-xs text-gray-600'>Share a photo or write something</div>
    </div>
  </div>
  {/* friendlist story show */}
  <div style={{ padding:"1px"}} className='allStorySec sm:w-[391px] w-auto  select-none cursor-grab overflow-x-auto flex items-center mt-4'>
    <div className='friendsStory flex rounded-lg shadow-md w-20 pb-3'>
        <div className='createStory flex flex-col items-center'>
            <Image alt='profile image' src={session.user.image} className=' rounded-t-md object-cover object-center' width={80} height={100}/>
        <span style={{width:"80px" , margin:"auto"}} className='z-50 '>
        <div style={{marginTop:"-12px"}} className= 'plusIcon mr-auto ml-auto p-1 bg-white  w-6 rounded-full'>
        <AiOutlinePlus style={{marginLeft:"-2px" , marginTop:"-2px" }} className=' text-xl text-white rounded-full bg-blue-500 p-1' />
        </div>
        </span>
    <div className='createStory text-xs font-medium'>Create Story</div>
        </div>
    </div>
    {/* story start from here */}
    <StoryAbove
    storyImg = '/images/arif.jpg'
    profileImg = '/images/arif.jpg'
    profileName = "Arif Mahmud Ryan"
     />
    <StoryAbove
    storyImg = '/images/atiq.jpg'
    profileImg = '/images/atiq.jpg'
    profileName = "Atiqur Rahman"
     />
    <StoryAbove
    storyImg = '/images/nahida.jpg'
    profileImg = '/images/nahida.jpg'
    profileName = "Nahida Shikha"
     />
    <StoryAbove
    storyImg = '/images/raiyana.jpg'
    profileImg = '/images/raiyana.jpg'
    profileName = "Raiyana Azad"
     />
    <StoryAbove
    storyImg = '/images/ear-mama.jpg'
    profileImg = '/images/ear-mama.jpg'
    profileName = "Earshad Ullah"
     />
    </div>
  </>
  );
};
