import {createContext, useState} from 'react';

export const CartContext = createContext(null);

export const CartProvider = (props)=>{
    const [getData ,setGetData ] = useState([]);
    const [cartItems , setCartItems] =useState([]);

    const handling =(cart)=>{
        const existingItem = cartItems.find((item)=> cart.id === item.id);

        if(existingItem){
         const updatedCart = cartItems.map((item)=>item.id ===cart.id ? ({...item , quantity:item.quantity+1}):item)
         setCartItems(updatedCart)
        }
        else{
          setCartItems([...cartItems,{...cart , quantity:1}])
        }
    }

    return (
       <CartContext.Provider value={{getData ,setGetData ,cartItems,setCartItems , handling}}>
        {props.children}
       </CartContext.Provider>
    );    
};