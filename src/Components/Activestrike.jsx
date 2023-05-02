
import React from 'react'
import Styles from "./callRatio/call.module.css"
import ApexChart2 from './chart/Line'

const Activestrike = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.left}>
        <h1 className={Styles.blue}>Underlying</h1>
        <br/>
        <select className={Styles.mySelect}>
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
        <br/>
        <br/>
        <h1  className={Styles.blue}>Selected Strikes</h1>
        <br/>
        <div className={Styles.green}><h3><input type='checkbox' id={Styles.inputbox}/> &nbsp;PCR-5 Strikes</h3></div><br/>
        <div className={Styles.veb}><h3><input type='checkbox'id={Styles.inputbox}/> &nbsp;PCR-10 Strikes</h3></div><br/>
        <div className={Styles.pink}><h3><input type='checkbox'id={Styles.inputbox}/> &nbsp;PCR-20 Strikes</h3></div><br/>

        <div className={Styles.green}><h3><input type='checkbox'id={Styles.inputbox}/> &nbsp;PCR-5 Strikes</h3></div><br/>
        <div className={Styles.veb}><h3><input type='checkbox'id={Styles.inputbox}/> &nbsp;PCR-10 Strikes</h3></div><br/>
        <div className={Styles.pink}><h3><input type='checkbox'id={Styles.inputbox}/> &nbsp;PCR-20 Strikes</h3></div><br/>
        
      </div>
      <div className={Styles.right}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <h3  className={Styles.blue}>Put-Call Ratio (Intraday)</h3>
            <h3 className={Styles.pink1}>BANKNFTY:   43,309.65</h3>
        </div>
        <ApexChart2/>
      </div>
    </div>
  )
}

export default Activestrike
