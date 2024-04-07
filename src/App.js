import logo from './logo.svg';
import React, { useState } from 'react';
import './index.css'; // or './styles.css' if that's your file name

import './App.css';

function App() {
  const[count, setCount]= useState(0);


  function decreaseHandler()
  {
     setCount(count-1);

  }

  function increasehandler()
  {
    setCount(count+1);
  }
  function resetm()
  {
    setCount(0);
  }
  return (
    <div className=" w-[100vw] h-[100vh]  justify-center  items-center  bg-[#021847] flex  flex-col text-yellow-500 scale-100 gap-10 ">
      <div className="text-[#8693af] font-medium text-2xl">Increment and decrement</div>
      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px]">
        <button onClick={decreaseHandler} className="border-r-4 text-center w-20 border-[#bfbfbf] text-5xl">
        -
        </button>
        <div>       
         {count}

        </div>
        <button onClick={increasehandler} className="border-l-4 text-center w-20 border-[#bfbfbf]">
        +
        </button>
      </div>
      <div onClick={resetm} className=" bg-[#8693af] rounded-sm text-lg px-5 py-2  ">Reset</div>
    </div>
    
  );
}

export default App;
