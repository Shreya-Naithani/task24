import React from 'react'

const PaymentCart = () => {
  return (
    <div className='m-5 w-[70%]'>

          <div className='mb-5 flex flex-col lg:flex-row'>
            <label className='font-bold mr-6'>
            <input 
           name='paymentoptions'
            type="radio"/>
          Cash on Delivery
            </label>
            <label className='font-bold mr-6'>
            <input 
            name='paymentoptions'
            value="Credit Card"
            type="radio"/>
          Cash on Delivery
            </label>
          </div>

      <form className=''>
        <div className='flex flex-col border-2 border-black rounded-lg p-4 '>
        <label className='font-bold'>Enter your Card Number:</label>
        <input className="rounded-full p-1 mt-2 mb-1 border-2 border-black w-[80%]" placeholder='Card Number' type="number"/>
        <label className='font-bold'>Enter your Card's expiry date:</label>
        <input className="rounded-full p-1 mt-2 mb-1 border-black border-2 w-[80%]" placeholder='Expiry Date' type="text"/>
        <label className='font-bold'>Enter your CVV Number:</label>
        <input className="rounded-full p-1 mt-2 mb-1 border-black border-2 w-[80%]" placeholder='CVV' type="text"/>
      
       <button className=' mt-3  bg-slate-400 hover:bg-slate-500 font-bold rounded-lg px-2 py-1'>Confirm Payment</button>
       </div>
      </form>
    </div>
  )
}

export default PaymentCart
