import React from 'react'
import Styles from "./open.module.css"
import ApexChart from  "../chart/ChartApex"
import ApexChart1 from '../chart/BarApex'


const Open = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.left}>
        <h1  className={Styles.blue}>Underlying</h1>
        <br/>
        <select id={Styles.mySelect}>
            <option>BANKNIFTY</option>
            <option>FINNIFTY</option>
            <option>NIFTY</option>
        </select>
        <br/>
        <br/>
        <h1  className={Styles.blue}>Expiry</h1>
        <br/>
        <div style={{display:"flex",justifyContent:"space-around"}}>
            <h3>2023-05-04</h3>
            <h3>2023-05-11</h3>
        </div>
      </div>
      <div className={Styles.right}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <h3  className={Styles.blue}>Change in Open Interest</h3>
            <h3 className={Styles.pink}>BANKNFTY:   43,233.90</h3>
        </div>
        <ApexChart/>
        <h3 className={Styles.blue}>Open Interest</h3>
        <ApexChart1/>
      </div>
    </div>
  )
}

export default Open
