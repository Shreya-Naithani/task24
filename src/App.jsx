import React from 'react';
import {Routes ,BrowserRouter, Route} from 'react-router-dom';
import Payment from './Components/Payment';

import Home from './Home';

function App() {
 
  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/payment" element={<Payment/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
