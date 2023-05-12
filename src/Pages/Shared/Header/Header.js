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
              <div>
                <div className='logo'>
                  <img src={logo} alt="" />
                </div>
                <h5>About Us</h5>
                <div className='relative'>
                <input placeholder='Search right hotel, visa' className='relative' type="text" />
                <FaSistrix className='searchIcon'></FaSistrix>
                </div>
              </div>
             <div>
             <button>Log in</button>
              <button className='buttonTow'>Sign Up</button>
             </div>
            </div>
          </div>  
        </div>
    );
};

export default Header;