import React, { useContext } from 'react';
import { CartContext } from '../Context/Cart';
import CartItems from './CartItems';

const Item = ({cart}) => {
  const {cartItems ,setCartItems ,handling} = useContext(CartContext);
   
    let titles = cart.title.slice(0,18)+"..."
    let cost = Math.floor(cart.price);
 
const handleAddToCart =(cart)=>{
  handling(cart)
}
    
  return (
    
   <div className='flex justify-center items-center rounded-md flex-col h-[250px] w-[200px] shadow-lg bg-gray-100 hover:scale-105 p-3 m-4'>
      <div>
        <img className="h-[100px]" src={cart.image} alt="cartItem"/>
      </div>
      <div className=' flex flex-col justify-center items-center bg-slate-200 rounded-md p-2 mt-1'>
        <p>{titles}</p>
        <p>${cost}</p>
        <button onClick={()=>handleAddToCart(cart)} className='border-2 border-slate-700 hover:bg-slate-400 px-1 rounded-lg'>Add to Cart</button>
      </div>
    </div>
    
 
  )
}

export default Item ;