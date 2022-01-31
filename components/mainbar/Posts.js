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
  return(
    <>
    {
      posts.map((data , index)=>{
        return (
          <>
          <PostsAll 
      key={data.createdAt}
      ImageAlt={data.username + data.caption + data.createdAt}
      profileImg={data.profileImg}
      profileName={data.username}
      time = {data.createdAt}
      caption = {data.caption}
      postImg = {data.postImage}
      // likes = '2M'
      // dislikes = '11'
      // comments = '32'
      // shares = '16'
    />
    </>
        )
      })
    }

    </>
  );
}