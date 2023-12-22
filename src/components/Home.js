import React from "react";
import {useState} from "react";
function Home() {
    const[color,setcolor] = useState("olive")
    const Primary = () => {
        setcolor('Red');
        
      }
      const Secondary = () => {
        setcolor('Yellow');
        
      }
      const Success = () => {
        setcolor('orange');
      }
      const Dang = () => {
        setcolor('blue');
        
      }
      const Der = () => {
        setcolor('violet');
        
      }
      const Dar = () => {
        setcolor('purple');
        
      }

    
  return (
    
    <>
    <div className = "w-full h-screen duration-200 flex flex-nowrap justify-around pt-6" style={{background: color}}>
      <div className = "cursor-pointer justify-center w-32  h-20 rounded-lg pt-5 font-serif  text-center text-3xl" onClick={Primary} style={{background: 'Red'}}>
        Red
      </div>
      <div className = "cursor-pointer justify-cente w-32  h-20 rounded-lg pt-5 font-serif  text-center text-3xl" onClick={Secondary} style={{background: 'Yellow'}}>
        Yellow
      </div>
      <div className = "cursor-pointer justify-center w-32  h-20 rounded-lg pt-5 font-serif  text-center text-3xl" onClick={Success} style={{background: 'orange'}}>
        Orange
      </div>
      <div className = "cursor-pointer justify-center w-32  h-20 rounded-lg pt-5 font-serif  text-center text-3xl" onClick = {Dang}style={{background: 'Blue'}}>
        Blue
      </div>
      <div className = "cursor-pointer  justify-center w-32  h-20 rounded-lg pt-5 font-serif  text-center text-3xl" onClick = {Der} style={{background: 'Violet'}}>
        Violet
      </div>
      <div className = " cursor-pointer justify-center w-32  h-20 rounded-lg pt-5 font-serif  text-center text-3xl" onClick = {Dar} style={{background: 'purple'}}>
        purple
      </div>
      


    </div>
    </>
  );
}

export default Home;
