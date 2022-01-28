import React from 'react';
import { BiWorld } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineLike , AiOutlineDislike , AiOutlineComment , AiOutlineShareAlt } from 'react-icons/ai';

export default function PostsAll(props) {
  return (
    <div className='allPosts shadow-md bg-white mt-5 p-2'>

    {/* post about profile details*/}
    <div className='abovePostDetails flex justify-between items-center cursor-pointer'>
      <div className='postDetails flex'>
      {/* profile img  */}
      <div className='smallProfile pr-3 flex cursor-pointer'>
    <div className='profileIcon mt-1'> <img className='rounded-full' src={props.profileImg} width={25} height={25} /></div>
    </div>
    {/* post details of admin  */}
    <div className='adminDetails flex flex-col'>
        <span className='postsProfileName text-xs font-medium'><a href='#'>{props.profileName}</a></span>
        <div className='privacy flex items-center'>
        <div className='ago text-xs text-gray-600'>{props.time}</div>
          <BiWorld className=' text-xs text-gray-700 ml-2' />
        </div>
    </div>
      </div>
      {/* posts edit option  */}
      <div className='postActionEdit'>
          <BsThreeDots />
      </div>
      </div>
      {/* caption of posts */}
      <div className='captionOfPosts text-xs mb-3'>
      {props.caption}
      </div>
      <div className='translation text-xs text-gray-500 cursor-pointer select-none mb-3'>See translation</div>
      <img className='simple-shadow ' src={props.postImg} width={482}></img>
     
      {/* reaction bar  */}
      <div className='reactionAdd flex justify-between mt-2 shadow-md'>
      <a className='p-2 text-xl hover:bg-gray-200 duration-300 focus:text-blue-500 transition-all cursor-pointer rounded-xs flex items-center w-full like'>
          <AiOutlineLike className='' />
          <span className='ml-1 text-xs cursor-pointer'>{props.likes}</span>
          <span className=' text-xs ml-2 font-medium cursor-pointer'>Like</span>
      </a>
      <a className='p-2 text-xl hover:bg-gray-200 duration-300 focus:text-blue-500 transition-all cursor-pointer rounded-xs flex items-center w-full dislike'>
          <AiOutlineDislike className='' />
          <span className='ml-1 text-xs cursor-pointer'>{props.dislikes}</span>
          <span className=' text-xs ml-2 font-medium cursor-pointer'>DisLike</span>
      </a>
      <a className='p-2 text-xl hover:bg-gray-200 duration-300 focus:text-blue-500 transition-all cursor-pointer rounded-xs flex items-center w-full comment'>
          <AiOutlineComment className='' />
          <span className='ml-1 text-xs cursor-pointer'>{props.comments}</span>
          <span className=' text-xs ml-2 font-medium cursor-pointer'>Comments</span>
      </a>
      <a className='p-2 text-xl hover:bg-gray-200 duration-300 focus:text-blue-500 transition-all rounded-xs flex items-center w-full share'>
          <AiOutlineShareAlt className='' />
          <span className='ml-1 text-xs cursor-pointer'>{props.shares}</span>
          <span className=' text-xs ml-2 font-medium cursor-pointer'>Share</span>
      </a>
      </div>
    </div> 
  );
}
