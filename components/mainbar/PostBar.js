import React, { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { BsCameraFill } from 'react-icons/bs';
import { FcStackOfPhotos } from 'react-icons/fc';
import { HiEmojiHappy } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai'

export const PostBar = () => {
  const [image, setImage] = useState('');
  const [previewImage, setPreviewImage] = useState('');
  const [postVal, setPost] = useState('');
  const [uploading, setUploading] = useState(false);
  const { data: session } = useSession();
  const formData = new FormData;
  formData.append('file', image);


  //handle image
  const handleImage = async (e) => {
    setImage(e.target.files[0]);
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0])
    }
    reader.onload = (readerEvent) => {
      setPreviewImage(readerEvent.target.result);
    }
  }
  //submit for a post
  const handlePost = async (e) => {
    if (postVal == '' && image == '') {
      return alert("Please write something on it!!");
    }
    setUploading(true)
    formData.append('upload_preset', 'fb-upload-management')
    const url = `https://api.cloudinary.com/v1_1/dxtnn1awt/image/upload`;
    const config = {
      headers: {
        'content-type': 'multi-part/form-data'
      }
    }

    try {
      const imageData = await fetch(url, {
        method: 'POST',
        body: formData,
        config
      }).then(res => res.json()).catch(err => console.log(err));

      let post = {
        username: session.user.name,
        profileImg: session.user.image,
        email: session.user.email,
        caption: postVal,
        postImage: imageData.secure_url
      }

      const postRes = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify(post),
        header: {
          'Content-Type': 'application/json'
        }
      });
      setPost('');
      setImage('');
      setPreviewImage('')
      setUploading(false);
    } catch (error) {
      console.log(error);
      setUploading(false)
    }
  }
  return (
    <>
      <div className='postbar mt-5'>
        {/* input bar  */}
        <div className='profileAndPost  w-auto m-auto flex rounded-md flex-col bg-white p-2 shadow-md'>
          <div className=' flex m-auto'>
            <div className='profileLogo'>
              <div className='smallProfile pl-3 pr-3 flex cursor-pointer transition-all duration-150'>
                <div className='profileIcon mt-1'>
                  <Image alt={session.user.name} className='rounded-full' src={session.user.image} width={30} height={30} /></div>
              </div>
            </div>
            <input className='inputBox text-xs bg-gray-200 rounded-full w-96 sm:w-[300px] overflow-hidden outline-none placeholder:text-xs flex placeholder:mb-4 placeholder:pl-2 selection:pl-2 pl-2' type='text' value={postVal} placeholder={`What's on your mind, ${session.user.name}?😎`} onChange={(e) => { setPost(e.target.value) }} />
          </div>
          {/* preview image  */}
          <div className='relative'>
            {
              previewImage !== '' ?
                <>
                  <img src={previewImage} className='w-[200px] shadow-lg h-auto mx-auto mt-2 rounded-md' />
                  <AiFillCloseCircle onClick={() => setPreviewImage('')} className=' text-rose-500 text-xl absolute top-2 sm:right-16 right-28 cursor-pointer' />
                </>
                :
                ""
            }
          </div>

          {/* this is media upload bar */}
          <hr className='pt-1 mt-3'></hr>
          <div className='threeOption w-[370px] sm:w-[350px] flex justify-between mt-3 ml-auto mr-auto'>
            <div className='camera flex items-center cursor-pointer'>
              <BsCameraFill className=' text-red-500 text-2xl' />
              <span className='ml-1 text-xs font-medium text-gray-700'>Live video</span>
            </div>
            <div className='photoVideo flex items-center cursor-pointer'>
              <FcStackOfPhotos className='text-2xl' />
              <span className='ml-1 text-xs font-medium text-gray-700'>
                {/* <Image id="output_image" className='absolute' height={50} width={50} /> */}
                <input type="file" accept="image/*" className='imageUpload absolute' onChange={(e) => handleImage(e)} />
                Photo/Video</span>
            </div>
            <div className='feelingActivity flex items-center cursor-pointer'>
              <HiEmojiHappy style={{ color: "#0004e5" }} className='text-2xl' />
              <span className='ml-1 text-xs font-medium text-gray-700'>Feeling/Activity</span>
            </div>
          </div>
          {
            uploading ?
              <button className=' hover:bg-black cursor-not-allowed bg-white hover:border-white text-black border-2 rounded-sm transition-all duration-200 hover:text-white pt-1 pb-1 mt-5'>Posting</button>
              :
              <button onClick={() => { handlePost(); }} className=' hover:bg-black bg-white hover:border-white text-black border-2 rounded-sm transition-all duration-200 hover:text-white pt-1 pb-1 mt-5'>Post</button>
          }
        </div>
      </div>
    </>
  );
};
