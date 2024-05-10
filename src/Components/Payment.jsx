import React from 'react';
import PaymentCart from './PaymentCart';
import Cart from './Cart';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';


const Payment = () => {
  const navigate =useNavigate();
  const handleClick=()=>{
    navigate('/');
  }
  return (
    <div>
  <Navbar/>
  <div className="flex lg:mx-[10rem]  md:mx-[5rem] mx-[1rem] mt-[7rem]">
      <div className="h-screen w-[60%]">
        <PaymentCart/>
      </div>
      <div className="h-screen w-[40%]">
      <div className='flex  fixed mt-[2rem]  justify-center items-center mb-5'>

<button onClick={handleClick} className='border-2 bg-slate-400 hover:bg-slate-500 font-bold  rounded-md px-2 py-1 ' > Go to Shopping</button>
  </div>
       <Cart/>
       
      </div>
      </div>
    </div>
    
  )
}

export default Payment
