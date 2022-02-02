import React, { useEffect, useState } from 'react';
import PostsAll from '../loop/PostsAll';
import axios from 'axios'
export default function Posts(props) {
    const [ posts , getPosts ] = useState([]);

    useEffect(()=>{
      const fetchData = async ()=>{
        const res = await axios('/api/posts');
        getPosts(res.data)
      }
      fetchData();
    },[posts])
    let text = ''

  return(
    <>
    {
      posts.map((data , index)=>{
        return (
          <PostsAll 
      oldcaption = {data.caption}
      _id = {data._id}
      key={data._id}
      ImageAlt={data.username + data.caption + data.createdAt}
      profileImg={data.profileImg}
      profileName={data.username}
      time = {data.createdAt}
      caption = {data.caption}
      postImg = {data.postImage}
      likes = {data.likes}
      dislikes = {data.dislikes}
      comments = ""
      shares = ""
    />
        )
      })
    }

    </>
  );
}