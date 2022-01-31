import React from 'react';
import { Story } from './mainbar/Story';
import { PostBar } from './mainbar/PostBar';
import RoomCreate from './mainbar/CreateRoom';
import Posts from './mainbar/Posts';

export default function Main() {
  return (
  <div className='mainBar mt-5 sm:mt-0 sm:scale-90'>
      <Story />
      <PostBar />
      <RoomCreate />
      <Posts />
  </div>
  );
}
