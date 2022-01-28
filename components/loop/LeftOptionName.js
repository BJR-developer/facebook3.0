import React from 'react';

 const leftOptionName = (props) => {
  return (
    <div className='leftOneOption flex cursor-pointer items-center p-3 transition-all duration-150 hover:bg-gray-200'>
    {props.iconName}
    <div className='optionName pl-3 text-xs lg:hidden font-medium '>{props.optionName}</div>
  </div>
)
};
export default leftOptionName;