import React from 'react';
import './Footer.css';
import {FaFacebook ,FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <div className='footerContainer'>
        <div className='footerDivs'>
            <div >
                <p>Finance</p>
                <p>Your best Finance Partner</p>
                <FaFacebook/>  <FaInstagram/>
            </div>

            <div>
                <p>Quick Link</p>
                <li>Buy/Sell</li>
                <li>Trade New</li>
                <li>Pricing</li>
            </div>

            <div>
                <p>Wallets</p>
                <p>Company</p>
            </div>

            <div>
                <p>Submit for Updates</p>
                <p>Subscribe to get update and notify  <br/>our exchange and products</p>
                <input type="text" placeholder='Enter Your Email Address' className='footerSeach' />
                <button id='footerSearchBtn'>Send</button>
            </div>
        </div>
        <hr/>
        <p id='textLast'>Term & Services | Privacy Policy</p>
    </div>
    
    
    
    </>
  )
}

export default Footer