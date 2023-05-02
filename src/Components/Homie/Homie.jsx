import React from 'react';
import './Homie.css';
import {BsEye,BsGooglePlay} from 'react-icons/bs';
import {SiAdguard} from 'react-icons/si';
import {BsFillPeopleFill} from 'react-icons/bs';
import {GrAppleAppStore} from 'react-icons/gr';

import imgcleanup from './img/imgcleanup.png';






const Homie = () => {
  return (
    <>
    
    <div>
        <div className='payout'>
            <div className='PayoutTextDiv'>
                <h1 className='payoutHeading'> One Click Instant Payout<br/> with Credit And Debit Card</h1>
                <p className='payoutSubText'>Become a Finance Owner in minutes using your debit or credit card and 
                <br/>Quickly purchase top Finance</p>
            </div>
            <div className='payoutCardsDiv'>
                <div className='BuySell'>
                    <p>Buy</p>
                    <p>|</p>
                    <p>Sell</p>
                </div>
                <p style={{textAlign:'center'}}>1 BTC is Rougly</p>
                <p style={{textAlign:'center'}}>56255156 USD</p>
                
                <div className='cardFleds'>
                <input type="text" className='inputFiels'/> <p id='usd'>|&nbsp;USD</p>
                <input type="text" className='inputFiels'/> <p id='usd'>|&nbsp;BTC</p>
                <button id='buyNowBtn'>Buy Now</button>
                </div>

            </div>
        </div>


        <div className='cryptocurrency'>
            <div className='trustTextDiv'>
                <p className='platfromHeading'>We Are The Most Trusted<br/> Cryptocurrency Platform</p>
                <p className='platfrmSubText'>We Believe Finance is here to stay- and that a future worth building is one 
                <br/>which opens its doors and invites everyone in</p>
            </div>
            <div className='cryptoPaltform'>
                <div className='trustDiv'>
                    <div className='trustIcons'><BsEye id='inconss'/></div>
                    <p  id='trustSubHeading'>Clarity</p>
                    <p id='trustSubDiscribe'>We Help You make Sense of the Coins, the terms, the dense charts and market Changes</p>
                </div>

                <div className='trustDiv'>
                    <div className='trustIcons'> 
                        <SiAdguard id='inconss'/>
                    </div>
                    <p  id='trustSubHeading'>Confidance</p>
                    <p id='trustSubDiscribe'>Our markets are always up to date, Sparking curiosity with real- woeld relevance</p>
                </div>

                <div className='trustDiv'>
                    <div className='trustIcons'>
                        <BsFillPeopleFill id='inconss'/>
                    </div>
                    <p id='trustSubHeading' >Community</p>
                    <p id='trustSubDiscribe' >We supports the Finace Cummunity, Putting data in the hands which need it most</p>
                </div>
            </div>

        </div>


        <div className='MobileApp'>
            <div className='Portfolio' >
                <p id='PortfolioHeading'>Build Your Crypto Portfolio <br/>anywhere</p>
                <p id='PortfolioDiscrb'>A Powerful Finance exchange in your pocket.<br/>
Buy,Sell and trade Crypto on the go.</p>
            </div>
            <br></br>
            <div className='PortfolioDiv'>
                <img src={imgcleanup} alt="" id='imgCleanup' />
                <button id='CryptoBtn1'><BsGooglePlay id='googleIcons'/>&nbsp;GET IT ON <br/>Google Play</button> <br/>
                <button id='CryptoBtn2'><GrAppleAppStore id='iosIcons'/>&nbsp;Download on the <br/>App Store</button>

            </div>
        </div>

<br></br>
<br></br>
<br></br>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

        <div className='trading'>
            <div className='StartTrading'>
                <p className='financeHeading'>Ready to start trading Finance?</p>

                <p className='financeDiscribe'>New Users Can earn up to $70 in Finance rewards</p>

                <input type="text" placeholder='Enter Your Email Address' className='FinanceSearch' />
                <button className='FinanceBtn'>Get Started</button>
            </div>
        </div>









    </div>
    
    
    
    
    
    </>
  )
}

export default Homie