import React from 'react';
import './Customstrategy.css'

const Customstrategy = () => {
  return (
<div className="mainConatinerr">
    <div className="myleft">
      <input type='text' placeholder='Select script' id='inputSelect'/>
      <button id='myBtnAnalyze'>ANALYZE</button>
    </div>


    <div className="centerDiv">
        <div className="PayOFFChart">
            <p>Pay Off Chart</p>
        </div>

        <div className="Intraday">
            <p>Intraday Performance</p>
        </div>
    </div>



     <div className="myRightDiv">
                <p>Date</p>
                <input type='range' id='myRange'/>

                <p>IV Change(%)</p>
                <input type='range' id='myRange'/>

                <div className="divBasics">
    <p>The Basics</p>
    <div className="basics"><p>Max Profits</p><p>6891.25</p></div>
    <div className="basics"><p>Max Loss</p> <p>-317875</p></div>
    <div className="basics"><p>Break Even</p> <p>43425</p></div>
    <div>
        <p>GREEKS</p>
        <p>Theta</p>
        <p>Gamma</p>
        <p>Delta</p>
        <p>Vega</p>
        <p>Implied Volatillty</p>
    </div>
    </div>
             </div>
    </div>  
    )
}

export default Customstrategy