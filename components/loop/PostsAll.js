import React, { Fragment, useState, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { BiWorld } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineLike, AiFillLike, AiOutlineDislike, AiFillDislike, AiOutlineComment, AiOutlineShareAlt } from 'react-icons/ai';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import moment from 'moment';
import { useRouter } from 'next/router';


export default function PostsAll(props) {
  const [isLike, setLike] = useState(false);
  const [offlineLikes, setOfflineLikes] = useState(props.reactDetails.length);
  const [isDislike, setDislike] = useState(false);
  const [offlineDisLikes, setOfflineDisLikes] = useState(props.reactDetailsInverse.length);
  const { data: session } = useSession();
  const router = useRouter();
  const isYourPost = ((session.user.name === props.user) && (session.user.email === props.email))

  const allLikes = props.reactDetails;
  const isHeLike = allLikes.findIndex(val => (val.user === session.user.name) !== -1)

  const allDislikes = props.reactDetailsInverse;
  const isHeDisLike = allDislikes.findIndex(val => (val.user === session.user.name) !== -1)

  //hold reaction color
  useEffect(() => {
    if (isHeLike === 0) {
      setLike(true)
    };
    if (isHeDisLike === 0) {
      setDislike(true)
    }
  }, []);

  const deletePost = async (_id) => {
    try {
      await fetch('/api/posts', {
        method: 'DELETE',
        body: _id
      });
      location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  const comingsoon = (user) => {
    alert(`This function will be comming soon! ${user} :( `)
  }

  //edit posts
  const editBox = async (_id) => {
    const newcaption = prompt("Enter your new caption");

    if (newcaption === null) {
      return;
    }
    const data = {
      _id, newcaption: newcaption, isUpdate: true
    }
    const jsonData = JSON.stringify(data);
    try {
      fetch('/api/posts', {
        method: 'PUT',
        body: jsonData,
        headers: {
          'Content-Type': 'application/json'
        }
      })
      location.reload();
      console.log(_id);
    } catch (err) {
      console.log(err);
    }
  }
  // likes request 
  const likes = async (_id, likes, user, email) => {

    try {
      const data = { _id, user, likes, email, islikes: true }
      const jsonData = JSON.stringify(data);

      if (isLike) {

        setLike(false);
        setOfflineLikes(offlineLikes - 1);

        const res = await fetch("/api/posts/reaction", {
          method: "DELETE",
          body: jsonData,
          headers: {
            "Content-Type": "application/json"
          }
        });
      } else if (isHeLike === -1) {

        setOfflineLikes(offlineLikes + 1);
        setLike(true);

        const res = await fetch("/api/posts/reaction", {
          method: 'POST',
          body: jsonData,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
    } catch (error) {
      console.log(error);
      setLike(false)
    }
  }
  //dislikes request
  const dislikes = async (_id, dislikes, user, email) => {

    try {

      if (isDislike) {
        setDislike(false);
        setOfflineDisLikes(offlineDisLikes - 1);
        const data = { _id, user, dislikes, email, isdislikes: true }
        const jsonData = JSON.stringify(data);

        const res = await fetch("/api/posts/reaction", {
          method: "DELETE",
          body: jsonData,
          headers: {
            "Content-Type": "application/json"
          }
        });

      } else if (isHeDisLike === -1) {

        setDislike(true);
        setOfflineDisLikes(offlineDisLikes + 1);
        const data = { _id, user, dislikes, email, isdislikes: true }
        const jsonData = JSON.stringify(data);
        const res = await fetch('/api/posts/reaction', {
          method: 'POST',
          body: jsonData,
          headers: {
            'Content-Type': 'application/json'
          }
        });
        setDislike(true)
      }
    } catch (error) {
      console.log(error);
      setDislike(false);
      setOfflineDisLikes(offlineDisLikes - 1);
    }
  }
  return (
    <div className='allPosts shadow-md bg-white mt-5 p-2'>

      {/* post about profile details*/}
      <div className='abovePostDetails flex justify-between items-center'>
        <div className='postDetails flex'>
          {/* profile img  */}
          <div className='smallProfile pr-3 flex cursor-pointer'>
            <div className='profileIcon mt-1'> <Image alt={props.ImageAlt} className='rounded-full' src={props.profileImg} width={25} height={25} /></div>
          </div>
          {/* post details of admin  */}
          <div className='adminDetails flex flex-col'>
            <span className='postsProfileName text-xs font-medium'><a href='#'>{props.profileName}</a></span>
            <div className='privacy flex items-center'>
              <div className='ago text-xs text-gray-600'>
                {moment(props.time).fromNow()}
              </div>
              <BiWorld className=' text-xs text-gray-700 ml-2' />
            </div>
          </div>
        </div>

        {/* posts edit option  */}
        {
          isYourPost ?

            <div className='postActionEdit'>

              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button>
                    <BsThreeDots aria-hidden="true" aria-expanded='true' aria-haspopup='true' />
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
                        <div onClick={() => { editBox(props._id) }} className=' text-xs p-2 hover:bg-gray-200'>Edit</div>
                      </Menu.Item>
                      <Menu.Item as='div'>
                        <div onClick={() => { deletePost(props._id) }} className=' text-xs p-2 hover:bg-gray-200'>Delete</div>
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            :
            ""
        }

      </div>
      {/* caption of posts */}
      <div className='captionOfPosts text-xs mb-3 mt-3'>
        {props.caption}
      </div>
      <div className='translation text-xs text-gray-500 cursor-pointer select-none mb-3'>See translation</div>
      {props.postImg ?
        <img alt={props.ImageAlt} className='simple-shadow w-[490px] h-auto' src={props.postImg} />
        : ""}

      {/* reaction bar  */}
      <div className='reactionAdd flex justify-between mt-2 shadow-md'>
        <a onClick={() => { { likes(props._id, props.likes, session.user.name, session.user.email) } }} className='likes p-2 text-xl hover:bg-gray-200 duration-300 focus:text-blue-500 transition-all cursor-pointer rounded-xs flex items-center w-full like'>
          {
            isLike ?
              <AiFillLike className=' text-blue-500' />
              :
              <AiOutlineLike className='' />
          }
          <span className='ml-1 text-xs cursor-pointer'>{offlineLikes}</span>
          <span className='likeval text-xs ml-2 font-medium cursor-pointer'>Like</span>
        </a>
        <a onClick={() => { dislikes(props._id, props.dislikes, session.user.name, session.user.email) }} className='p-2 text-xl hover:bg-gray-200 duration-300 focus:text-blue-500 transition-all cursor-pointer rounded-xs flex items-center w-full dislike'>
          {
            isDislike ?
              <AiFillDislike className=' text-rose-500' />
              :
              <AiOutlineDislike className='' />
          }
          <span className=' ml-1 text-xs cursor-pointer'>{offlineDisLikes}</span>
          <span className=' text-xs ml-2 font-medium cursor-pointer'>DisLike</span>
        </a>
        <a onClick={() => { comingsoon(session.user.name) }} className='p-2 text-xl hover:bg-gray-200 duration-300 focus:text-blue-500 transition-all cursor-pointer rounded-xs flex items-center w-full comment'>
          <AiOutlineComment className='' />
          <span className='ml-1 text-xs cursor-pointer'>{props.comments}</span>
          <span className=' text-xs ml-2 font-medium cursor-pointer'>Comments</span>
        </a>
        <a onClick={() => { comingsoon(session.user.name) }} className='p-2 text-xl hover:bg-gray-200 duration-300 focus:text-blue-500 transition-all rounded-xs flex items-center w-full share'>
          <AiOutlineShareAlt className='' />
          <span className='ml-1 text-xs cursor-pointer'>{props.shares}</span>
          <span className=' text-xs ml-2 font-medium cursor-pointer'>Share</span>
        </a>
      </div>

    </div>
  );
}
