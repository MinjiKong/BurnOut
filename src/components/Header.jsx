import React from 'react'
import { useState } from 'react';
import { useLocation } from 'react-router-dom';


function Header(props) {
    // const [header, setHeader] = useState('BurnOut');
    
    console.log("From Header: " + props.text);

    


  return (
    <div className='top-0 h-13 p-2 w-full relative bg-dark-navy flex justify-center'>
        <h1 className='text-white text-3xl font-saira text-center my-auto'>{props.text}</h1>
    </div>
  )
}

export default Header