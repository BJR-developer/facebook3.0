import React , { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { BiWorld } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineLike , AiOutlineDislike , AiOutlineComment , AiOutlineShareAlt } from 'react-icons/ai';
import { data } from 'autoprefixer';

const deletePost = async(_id) =>{
  try {
    fetch('/api/posts' , {
      method:'DELETE',
      body:_id
    })
  } catch (error) {
    console.log(error);
  }
}

const editBox = async(_id) =>{
  const newcaption = prompt("Enter your new caption");
  const data = {
    _id,newcaption:newcaption,isUpdate:true
  }
  const jsonData = JSON.stringify(data);
  try {
    fetch('/api/posts' , {
      method:'PUT',
      body:jsonData,
      headers:{
        'Content-Type':'application/json'
      }
    })
    console.log(_id);
  } catch (err) {
    console.log(err);
  }
}
// likes request 
const likes = async(_id , likes) =>{
  try {
    const data = {_id:_id , likes:likes ,islikes:true }
    const jsonData = JSON.stringify(data)
    fetch("/api/posts/reaction" , {
      method:'POST',
      body:jsonData,
      headers:{
        'Content-Type':'application/json'
      }
    })
  } catch (error) {
    console.log(error);
  }
}
//dislikes request
const dislikes = async(_id , dislikes) =>{
    try {
      const data= {
        _id,dislikes,isdislikes:true
      }
      const jsonData = JSON.stringify(data)
      fetch('/api/posts/reaction' , {
        method:'POST',
        body:jsonData,
        headers:{
          'Content-Type':'application/json'
        }
      })
    } catch (error) {
      console.log(error);
    }
}

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

      <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          <BsThreeDots  aria-hidden="true" aria-expanded='true' aria-haspopup='true'/>
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
          <div>
            <Menu.Item as='div'>
              <div onClick={()=>{editBox(props._id)} } className=' text-xs p-2 hover:bg-gray-200'>Edit</div>
            </Menu.Item>
            <Menu.Item as='div'>
              <div onClick={()=>{deletePost(props._id)}} className=' text-xs p-2 hover:bg-gray-200'>Delete</div>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>


      </div>
      </div>
      {/* caption of posts */}
      <div className='captionOfPosts text-xs mb-3 mt-3'>
      {props.caption}
      </div>
      <div className='translation text-xs text-gray-500 cursor-pointer select-none mb-3'>See translation</div>
      {props.postImg ? 
        <img alt={props.ImageAlt} className='simple-shadow h-auto' src={props.postImg} width="560px" height="100%" />
      : ""}
     
      {/* reaction bar  */}
      <div className='reactionAdd flex justify-between mt-2 shadow-md'>
      <a onClick={()=>{{likes(props._id,props.likes)}}} className='likes p-2 text-xl hover:bg-gray-200 duration-300 focus:text-blue-500 transition-all cursor-pointer rounded-xs flex items-center w-full like'>
          <AiOutlineLike className='' />
          <span className='ml-1 text-xs cursor-pointer'>{props.likes}</span>
          <span className='likeval text-xs ml-2 font-medium cursor-pointer'>Like</span>
      </a>
      <a onClick={()=>{dislikes(props._id,props.dislikes)}} className='p-2 text-xl hover:bg-gray-200 duration-300 focus:text-blue-500 transition-all cursor-pointer rounded-xs flex items-center w-full dislike'>
          <AiOutlineDislike className='' />
          <span className=' ml-1 text-xs cursor-pointer'>{props.dislikes}</span>
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
