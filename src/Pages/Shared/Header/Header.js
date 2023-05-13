import React, { useRef } from 'react';
import TopBar from '../../../components/TopBar/TopBar';
import './Header.css';
import logo from '../../../Assets/logo.png';
import { FaSistrix, FaBars, FaTimes, } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Header = () => {
  window.addEventListener("scroll", function () {
    var header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("active");
    const navItems = document.querySelector(".navItems");
    navItems.classList.toggle("active");
  };

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
                <FaBars className='toggle'></FaBars>
            <nav className="mr-[100px] navItems" ref={navRef}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/apartments">Apartments</Link>
              </li>
              <li>
                <Link to="/reviews">Reviews</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/contactus">Contact</Link>
              </li>
            </ul>
          </nav>
          {/* humberger menu */}
          <div className="humberger" ref={navRef} onClick={showNavbar}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
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