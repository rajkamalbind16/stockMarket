import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/nav/Navbar';
import Home from './Components/Home/Home';
import Customstrategy from './Components/Customstrategy';
import Popularstategies from './Components/Popularstategies';
import CallRatio from './Components/callRatio/CallRatio';
import Open from './Components/open/Open';
import Activestrike from './Components/Activestrike';

const App = () => {
  return (
    <div className='main'>
<BrowserRouter>
<Navbar/>
<Routes>
<Route  path="/" element={<Home/>} />
<Route  path='/popularstategies'element={<Popularstategies/>} />
<Route  path='/customstrategy'element={<Customstrategy/>} />
<Route  path='/openinterest'element={<Open/>} />
<Route  path='/putcall'element={<CallRatio/>} />
<Route  path='/activestrike'element={<Activestrike/>} />
</Routes>
<Footer/>

</BrowserRouter>
    
    </div>

    
    
    
  
  )
}

export default App