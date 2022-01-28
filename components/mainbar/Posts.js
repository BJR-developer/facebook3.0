import React, { useEffect, useState } from 'react';
import PostsAll from '../loop/PostsAll';
import axios from 'axios'
export default function Posts(props) {
    const [ posts , getPosts ] = useState([]);

    useEffect(()=>{
      const fetchData = async ()=>{
        const res = await axios('/api/posts/posts');
        getPosts(res.data)
      }
      fetchData();
    },[null])
    console.log(posts);
  return(
    <>
    {
      
    }
    <PostsAll 
      profileImg='/images/arif.jpg'
      profileName='Arif Mahmud Ryan'
      time = '4h'
      caption = 'ভালোবাসা হলো দুটি হৃদয়ের সমন্বয়, যেখানে একটি ছাড়া অন্যটি অচল।' 
      postImg = 'https://scontent.fdac34-1.fna.fbcdn.net/v/t39.30808-6/p720x720/272312200_3033249673596041_1778207441517180631_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeHaGuAYBAfv9OA77xKA7Eqy_a7OOvw0LW_9rs46_DQtb3T87mc48l17AvKVU7CszkZzvgHMdlSKMzFTv5amuOrH&_nc_ohc=YhJl53wMiZIAX_Hw9Pi&_nc_zt=23&_nc_ht=scontent.fdac34-1.fna&oh=00_AT_0ACFljfw0i0E4ZlNh5m8wNXlQcbKVr1yuJdV4Syllog&oe=61F1AD24'
      likes = '2M'
      dislikes = '11'
      comments = '32'
      shares = '16'
    />
    <PostsAll 
      profileImg='https://scontent.fdac96-1.fna.fbcdn.net/v/t1.6435-9/73068825_104124037687938_1005810228949680128_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFY9M2qixAbQIC7t2QeAEtTTyAltaMBi7VPICW1owGLtey0nx7jHfDboz1qnq4os9UtTkOeqNx5RU7KBZNaTx7G&_nc_ohc=OCKHnyxU4YcAX_nYXw7&_nc_ht=scontent.fdac96-1.fna&oh=00_AT-NIMGqD4nFOviI5ds9nfoEZzeNWx64gpVrZ0uZQzTpcQ&oe=6212D965'
      profileName='Sojib Omor'
      time = '6h'
      caption = 'অনেক ভাবনা হচ্ছে, কিন্তু ভেবে পাচ্ছিনা 🤦🌚' 
      postImg = 'https://scontent.fdac34-1.fna.fbcdn.net/v/t39.30808-6/p843x403/272214823_659385362161800_4907690944162289309_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFCrAElc74husf9OQQecDCedq119lQ6O1h2rXX2VDo7WDzR9itaFsULKXo2NTYG9eJFa1CJD1cNYqpS5EXNrQoz&_nc_ohc=kIwNrpR23FEAX-ewNpD&_nc_zt=23&_nc_ht=scontent.fdac34-1.fna&oh=00_AT-e9CLFV2s5zdy0Meb3NuNcbH_eiewJxpiQ3X8jST0cFQ&oe=61F12A9E'
      likes = '3.1k'
      dislikes = '120'
      comments = '1.1k'
      shares = '320'
    />
    <PostsAll 
      profileImg='/images/bjr.jpg'
      profileName='Jamilur Rahman Bjr'
      time = '17h'
      caption = 'এনিমির মাইরে বাপ😠' 
      likes = '6'
      dislikes = '1'
      comments = '2'
      shares = '0'
    />
    <PostsAll 
      profileImg='/images/bjr.jpg'
      postImg = 'https://scontent.fdac34-1.fna.fbcdn.net/v/t39.30808-6/271838022_651663182638055_1063289735013634308_n.png?_nc_cat=102&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeG__MgMki9jKq5Y_s3S848-PaY5xnJgFcQ9pjnGcmAVxHjpmk6XQ1YBJHQETJeZ6flXV9FQ0Ag0fPAcfdduuF6o&_nc_ohc=UuIPwhREwB8AX_ngN5N&_nc_zt=23&_nc_ht=scontent.fdac34-1.fna&oh=00_AT-qdiaPja-SZVBPJFewU0V8DXMw6uw9-MqiL6SYfrNhzQ&oe=61F08A1D'
      profileName='Jamilur Rahman Bjr'
      time = '17h'
      caption = 'FreelancerBjr official site' 
      likes = '12k'
      dislikes = '120'
      comments = '3.2k'
      shares = '620'
    />
    <PostsAll 
      profileImg='/images/bjr.jpg'
      postImg = 'https://scontent.fdac34-1.fna.fbcdn.net/v/t39.30808-6/271838022_651663182638055_1063289735013634308_n.png?_nc_cat=102&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeG__MgMki9jKq5Y_s3S848-PaY5xnJgFcQ9pjnGcmAVxHjpmk6XQ1YBJHQETJeZ6flXV9FQ0Ag0fPAcfdduuF6o&_nc_ohc=UuIPwhREwB8AX_ngN5N&_nc_zt=23&_nc_ht=scontent.fdac34-1.fna&oh=00_AT-qdiaPja-SZVBPJFewU0V8DXMw6uw9-MqiL6SYfrNhzQ&oe=61F08A1D'
      profileName='Jamilur Rahman Bjr'
      time = '17h'
      caption = 'FreelancerBjr official site' 
      likes = '12k'
      dislikes = '120'
      comments = '3.2k'
      shares = '620'
    />
    </>
  );
}