import React from 'react';
import TopBar from '../../../components/TopBar/TopBar';
import './Header.css';
import logo from '../../../Assets/logo.png';
import { FaSistrix } from "react-icons/fa";
const Header = () => {
    return (
        <div>
          <TopBar></TopBar>
          <div className="header">
            <div className='headerContent '>
              <span className='logo'>
                <img src={logo} alt="" />
              </span>
              <h5>About Us</h5>
              <span className='relative'>
              <input placeholder='Search right hotel, visa' className='relative' type="text" />
              <FaSistrix className='searchIcon'></FaSistrix>
              </span>
              <button>Log in</button>
              <button className='buttonTow'>Sign Up</button>
            </div>
          </div>  
        </div>
    );
};

export default Header;