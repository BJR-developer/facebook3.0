import React from 'react';
import Image from 'next/image';
export default function StoryAbove(props) {
  return (
  <>
       <div style={{width:"90px" , height:"140px" ,backgroundImage:`url(${props.storyImg})`}} className='overlay bg-center bg-cover ml-2 bg-black rounded-lg'>
    <div className='friendsRStory shadow-md bac rounded-lg bg-center bg-cover flex flex-col justify-between' style={{width:"90px" , height:"140px" ,backgroundColor:"#0000005c"}}>
      <span style={{padding:"3px"}} className='m-2 rounded-full bg-blue-800 h-7 w-7'>
      <Image alt='profile images' className=' object-cover rounded-full' src={props.profileImg} width={30} height={30}/>
      </span>
      <div className='friendsName text-xs font-medium text-white pb-1 pl-1'>{props.profileName}</div>
    </div>
   </div>
  </>
    );
}
