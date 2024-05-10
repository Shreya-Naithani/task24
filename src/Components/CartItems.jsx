import React, { useContext } from 'react';
import { CartContext } from '../Context/Cart';

const CartItems = ({cart}) => {
   
const{cartItems ,setCartItems,handling}=useContext(CartContext);
    const itemCost = Math.floor(cart.price) * cart.quantity;
    let cost = Math.floor(itemCost);

  const handleRemovingItem=(cart)=>{

    const existingItem = cartItems.find((item)=>item.id === cart.id);


    if(existingItem.quantity===1){
      setCartItems(cartItems.filter((item)=> item.id !== existingItem.id))
    }
    else{
   const updatedItem = cartItems.map((item)=>item.id===cart.id ? ({...cart ,quantity:cart.quantity-1}):(item))
   setCartItems(updatedItem);
    }
  }
  const handleAddingItem=(cart)=>{
   handling(cart);
  }
   
     
  
  return (
    <div className='bg-gray-100 mb-4 flex p-7'>
      <div >
        <img className='h-[80px]'  src={cart.image}/>
      </div>
      <div className='flex flex-col'>
         <div className='font-bold mx-2'>
      {cart.title}
         </div>
         <div className='flex  mx-2 gap-12'>
          <p>${cost}</p>
          <div className='flex'>
           <button 
           onClick={()=>handleRemovingItem(cart)}
           className='bg-slate-400 hover:bg-slate-500 text-center font-bold px-2 rounded-md mr-2 '>-</button>
           <p>{cart.quantity}</p>
           <button
           onClick={()=>handleAddingItem(cart)}
           className='bg-slate-400 hover:bg-slate-500 px-2 text-center font-bold rounded-md ml-2'>+</button>
          </div>
         </div>
      </div>
    </div>
  )
}

export default CartItems