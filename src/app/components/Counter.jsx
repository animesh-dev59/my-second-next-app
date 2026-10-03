  'use client';
 
import React, { useState } from 'react';

const Counter = () => {
  console.log('counter componnent validCss');
   const [count,setCount] = useState(0);
  const handleIncrease = () => {   
    console.log('Increase button clicked');
    setCount(count + 1);
  }
  return (
    <div>
      <h3 className='tex-bold text-green-400 mb-3'> counter is a value : {count}</h3>

      <h1>H</h1>
      <h1>He</h1>
      <h1>Hel</h1>
      <h1>Hell</h1>
      <h1>Hello</h1> 

     <button onClick={handleIncrease} className='border-2 border-teal-500 p-3 rounded-2xl'> Increse</button>

    </div>
  );
};

export default Counter;