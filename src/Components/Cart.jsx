import React,{useState,useEffect, useContext} from 'react';
import CartItems from './CartItems';
import { CartContext } from '../Context/Cart';
import { Link ,useNavigate } from 'react-router-dom';

const Cart = () => {
const[payment ,setPayment]=useState(false);
const[isButton ,setIsButton] = useState(false);
const navigate =useNavigate();
const {cartItems}= useContext(CartContext);

const handlePaymentClick = async () => {
  try {
    // Toggle the payment state
    const updatedPayment = !payment;
    setPayment(updatedPayment);

    // Delay to ensure state update is processed
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Check if the current payment state matches the intended navigation destination
    if (payment !== updatedPayment) {
      // Navigate to the determined path
      navigate(updatedPayment ? '/payment' : '/');
    }

    // Log the updated state values for verification
    console.log("Updated payment:", updatedPayment);
  } catch (error) {
    console.log("Error occurred:", error);
  }
};
 useEffect(() => {
  
 }, [payment]);


let btn = payment?'Go to Shopping Cart' : 'Proceed to Payment'

// const handlePaymentClick = () => {
//   try {
//     setPayment(!payment);
//     console.log(payment);
    
//   } catch (error) {
//     console.log(error);
//   }
  
// };
// useEffect(() => {
//   if (payment) {
//     navigate('/payment');
//     // setIsButton(false);
   
//   } else {
//     navigate('/');
//     // setIsButton(true);
//   }
// }, [payment]);
    const total = cartItems.reduce((acc,item)=>{
        const itemTotal = (Math.floor(item.price)) * item.quantity;
        return  acc + itemTotal
    }, 0);
  return (
    <div className='bg-gray-200 p-10 w-[33vw] max-h-[80vh] fixed mt-[5rem] overflow-y-scroll'>
        <p className='text-xl font-bold'>Cart</p>
       {
        cartItems.length >0 ? (
            cartItems.map((cartItems)=>(
                <CartItems  key={cartItems.id} cart={cartItems}/>
            ))
        ):(
            <div className='flex justify-center items-center font-bold text-xl'> Total $0.0 </div>
        )
      }
      <div>
      {
        total >0 && <p className='font-bold text-center text-xl'>Total: ${total}</p>
      }
      </div> 
     
    </div>
  )
}

export default Cart