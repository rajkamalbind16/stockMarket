import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const options = [
    {
      label:'Popular Stategies',
      path:'/popularstategies',
    },

    {
      label:'Custom Strategy',
      path:'/customstrategy',
    },

    {
      label:'Open Interest',
      path:'/openinterest',
    },

    {
      label:'Put Call Ratio',
      path:'/putcall',
    },

    {
      label:'Active Strikes & OI',
      path:'/activestrike',
    },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionHover = (option) => {
    setSelectedOption(option);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <>
    <div className="nav-div">
    <li><Link to="/" style={{textDecoration:'none'}}>Home</Link></li>
        <li>Markets</li>
        <li className="dropdown-toggle" onMouseOver={toggleDropdown}>Option
        </li>
        {isOpen && (
        <p className="dropdown-menu" onMouseLeave={handleMouseLeave}>
          {options.map((option) => (
            <Link
              key={option.label}
              to={option.path}
              className="dropdown-item"
              onMouseEnter={() => handleOptionHover(option)}
              style={{textDecoration:'none'}}
            >
              {option.label}<br/>
            </Link>
          ))}
           </p>
      )}
    


        <li>Stocks & Alerts</li>
        <li>Backtests</li>
        <li>House of Algos</li>
        <button className='btnSignin'>Sign in</button>
       <button className='btnGetStarted'>Get Started</button>
    </div>

    </>
  );
};

export default Navbar;
