import React, { useState } from 'react';
import Image from 'next/image';
import {BsCameraFill} from 'react-icons/bs';
import { FcStackOfPhotos } from 'react-icons/fc';
import { HiEmojiHappy } from 'react-icons/hi';
import { useSession } from 'next-auth/react';
export const PostBar = () => {

    const [postVal , setPost ] = useState('');
    const {data : session} =  useSession();
    
    // get posts by fetching 
    //submit for a post
    const handlePost = async (e) =>{

      if(postVal == ''){
        return alert("Please write something on it!!");
      }

      let post = {
        username:session.user.name,
        profileImg:session.user.image,
        email : session.user.email,
        caption:postVal,
      }
      try {
        const res = await fetch('/api/posts/posts' , {
          method:'POST',
          body:JSON.stringify(post),
          header: {
            'Content-Type' : 'application/json'
          }
        });

      } catch (error) {
        console.log(error);
      }
         }
  return (
  <div className='postbar mt-5'>
  {/* input bar  */}
    <div className='profileAndPost flex rounded-md flex-col bg-white p-2 shadow-md'>
    <div className=' flex m-auto'>
        <div className='profileLogo'>
        <div className='smallProfile pl-3 pr-3 flex cursor-pointer transition-all duration-150'>
      <div className='profileIcon mt-1'>
       <Image className='rounded-full' src='/images/bjr.jpg' width={30} height={30} /></div>
      </div>
    </div>
        <input className='inputBox text-xs bg-gray-200 rounded-full w-96 overflow-hidden outline-none placeholder:text-xs flex placeholder:mb-4 placeholder:pl-2 selection:pl-2 pl-2' type='text' value={postVal} placeholder={`What's on your mind, Jamilur?😎`} onChange={(e)=>{setPost(e.target.value)}}/>
        </div>
        {/* this is media upload bar */}
        <hr className='pt-1 mt-3'></hr>
        <div style={{width:"380px"}} className='threeOption flex justify-between mt-3 ml-auto mr-auto'>
            <div className='camera flex items-center cursor-pointer'>
             <BsCameraFill className=' text-red-500 text-2xl' />
                <span className='ml-1 text-xs font-medium text-gray-700'>Live video</span>
            </div>
            <div className='photoVideo flex items-center cursor-pointer'>
            <FcStackOfPhotos className='text-2xl' />
            <span className='ml-1 text-xs font-medium text-gray-700'>Photo/Video</span>
            </div>

            <div className='feelingActivity flex items-center cursor-pointer'>
                <HiEmojiHappy style={{color:"#0004e5"}} className='text-2xl' />
            <span className='ml-1 text-xs font-medium text-gray-700'>Feeling/Activity</span>
            </div>
        </div>
        <button onClick={()=>{handlePost()}} className=' hover:bg-black bg-white hover:border-white text-black border-2 rounded-sm transition-all duration-200 hover:animate-pulse hover:text-white pt-1 pb-1 mt-5'>Post</button>
    </div>
  </div>
  );
};
