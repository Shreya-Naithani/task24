import React,{useState ,useEffect, useContext} from 'react';
import Cart from "./Components/Cart";
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import { CartContext } from './Context/Cart';
import { useNavigate } from 'react-router-dom';


function Home() {
 const {getData , setGetData} = useContext(CartContext);
const navigate =useNavigate();
 const fetchData = async()=>{
  try {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
   
    setGetData(data);
    
  } catch (error) {
    console.log(error);
  }
 }

 const handleClick=()=>{
  navigate('/payment');
 }

 useEffect(()=>{
 fetchData();
 },[])

  return (
    <div>
      <Navbar/>
      <div className="flex mx-[10rem] mt-[7rem]">
      <div className="h-screen w-[60%]">
        <Main/>
      </div>
      <div className="h-screen w-[40%]">
        <div className='flex  fixed mt-[2rem]  justify-center items-center mb-5'>

      <button onClick={handleClick} className='border-2 bg-slate-400 hover:bg-slate-500 font-bold  rounded-md px-2 py-1 ' > Proceed to Payment</button>
        </div>
       <Cart/>
      </div>
      </div>
      
    </div>
  )
}

export default Home
