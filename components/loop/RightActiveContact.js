import React from 'react';
import { BsDot } from 'react-icons/bs';

export const RightActiveContact = (props) => {
  return (
    <a href={props.profileUrl}><div className='pl-1 pt-1 pb-1 rounded-l-full mb-3 smallProfile pr-3 flex cursor-pointer bg hover:bg-gray-200 transition-all duration-150'>
                        <div className='profileIcon rounded-full flex bottom-0'>
                            <img className='rounded-full' src={props.profileImg}
                                width={25}
                                height={25}/>
                     
                        <BsDot style={{marginLeft:"-15px" , position:"relative" , top:"9px"}} className=' text-2xl text-green-600 scale-125' />
                        </div>
                        <div style={
                                {
                                    marginTop: "3px",
                                    fontWeight: "500"
                                }
                            }
                            className='profileFName pl-1 text-xs'>{props.profileId}</div>
                    </div>
                    </a>);
};
