import React from 'react'
import Styles from "./navabar.module.css"

const Navabar = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.logo}><h3>FINENCE</h3></div>
      <div className={Styles.right}>
        <h3>Exchange</h3>
        <h3>Pricing</h3>
        <h3>Wallet</h3>
        <h3>Company</h3>
        <h3>Blog</h3>
        <button className={Styles.btn2}>Sign in</button>
       <button className={Styles.btn}>Get Started</button>
      </div>
    </div>
  )
}

export default Navabar


