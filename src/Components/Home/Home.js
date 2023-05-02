import React from 'react'
import Styles from "./home.module.css"
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { FaEthereum } from 'react-icons/fa';
import { SiBinance } from 'react-icons/si';
import { SiXrp ,SiOrigin} from 'react-icons/si';
import { FaChartLine } from 'react-icons/fa';
import { MdWifiTethering } from 'react-icons/md';
import { GiChaingun } from 'react-icons/gi';
import Homie from '../Homie/Homie';


const Home = () => {
  return (
    <>
    <div className='myContainer'>
    <div className={Styles.container}>
      <h1>A trusted and secure</h1>
      <h1>cryptocurrency exchange</h1>
     
      <p className='para'>Your guid to the word of an open financial system. Get started with the</p>
      <p>easiestand most secure plateform to buy and trade Finance</p>
     
      <button className={Styles.btn1}>Get Started Now</button>
    </div>

{/* 
    card of crypto */}

    <div className={Styles.contain}>
    <div>
    <div className={Styles.icon}>
    <BsCurrencyBitcoin className={Styles.icn}/>
  <h3>Bitcoin</h3>
  <h3>BTC</h3>
    </div>
   <h3>USD 53,260.20</h3>
    </div>
    <div>
    <div className={Styles.icon}>
    <FaEthereum className={Styles.icn}/>
    <h3>Ethereum</h3>
    <h3>ETH</h3>
    </div>
    <h3>USD 53,260.20</h3>
    </div>
    <div>
    <div className={Styles.icon}>
   
    <SiBinance className={Styles.icn}/>
    <h3>Binance Coin</h3>
   
    <h3>BNB</h3>
    </div>
    <h3>USD 53,260.20</h3>
    </div>
    <div>
    <div className={Styles.icon}>
    <SiXrp className={Styles.icn}/>
    <h3>XRP</h3>
    <h3>XRP</h3>
    </div>
    <h3>USD 53,260.20</h3>
    </div>

    <div>
    <div  className={Styles.icon}>
    <MdWifiTethering className={Styles.icn}/>
    <h3>Tether</h3>
    <h3>USBT</h3>
    </div>
    <h3>USD 53,260.20</h3>
    </div>
    <div>
    <div className={Styles.icon}>
    <FaChartLine className={Styles.icn}/>
    <h3>Achain</h3>
    <h3>Act</h3>
    </div>
    <h3>USD 53,260.20</h3>
    </div>
    <div>
    <div className={Styles.icon}>
    <SiOrigin className={Styles.icn}/>
    <h3>Origin Protocol</h3>
    <h3>OGN</h3>
    </div>
    <h3>USD 53,260.20</h3>
    </div>
    <div>
    <div className={Styles.icon}>
    <GiChaingun className={Styles.icn}/>
    <h3>IoT Chain</h3>
    <h3>ITC</h3>
    </div>
    <h3>USD 53,260.20</h3>
    </div>
    <div>
        <button>View All Assets</button>
    </div>

    </div>

<div className={Styles.contain_1} >
<h1>The Most Trusted </h1>
    <h1>Cryptocurrency Platform</h1>
    <p className='para'>Finance has a variety of features that make it the best </p>
    <p className='para'>Place to start trading</p>.
    </div>

  

    <div className={Styles.name}>
    
     <div>
      <div className={Styles.circle}></div>
      <h3>Portfolio Manager</h3>
      <p>Buy and Shell Popular digital</p>
      <p>Currencies. Keep track of them</p>
      <p>in the one place</p>
     </div>

     <div className={Styles.mid}>
     <div className={Styles.circle}></div>
     <h3>Mobile Apps</h3>
     <p>Stay on top of the markets</p>
     <p>with the finance app for</p>
     <p>Android or ios</p>
     </div>
     <div>

     <div className={Styles.circle}></div>
     <h3>Vault Protection</h3>
     <p>For added security, store Your</p>
     <p>funds in a vault with time</p>
     <p>delayed withdeawals</p>
     </div>

    </div>
    </div>
<Homie/>
    </>
  )
}

export default Home
