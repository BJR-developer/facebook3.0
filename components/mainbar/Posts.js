import React, { useEffect, useState } from 'react';
import PostsAll from '../loop/PostsAll';
import axios from 'axios'
import { Loader } from '../Loader';
export default function Posts(props) {
  const [posts, getPosts] = useState([]);
  const [isLoading, setLoading] = useState();
  useEffect(() => {

    const fetchData = async () => {
      const res = await fetch('/api/posts/').then(res => res.json())
      getPosts(res);
    }
    fetchData();
  }, [])

  return (
    <>
      {
        posts.map((data, index) => {
          return (
            <PostsAll
              _id={data._id}
              key={data._id}
              ImageAlt={data.username + data.caption + data.createdAt}
              profileImg={data.profileImg}
              profileName={data.username}
              user={data.username}
              email={data.email}
              time={data.createdAt}
              caption={data.caption}
              oldcaption={data.caption}
              postImg={data.postImage}
              likes={data.likes?.count}
              dislikes={data.dislikes?.count}
              comments=""
              shares=""
              reactDetails={data.reactDetails}
              reactDetailsInverse={data.reactDetailsInverse}
            />
          )
        })
      }
      <Loader />
    </>
  );
}