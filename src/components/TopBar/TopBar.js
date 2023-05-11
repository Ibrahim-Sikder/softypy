import React from 'react';
import './TopBar.css'
import { FaPhoneAlt } from "react-icons/fa";
const TopBar = () => {
    return (
        <div className='topBar'>
        <div className="w-[800px] mx-auto ">
            <span><FaPhoneAlt className='topBarIcon'></FaPhoneAlt> <span className='phone'>+01825-445033</span></span> <span className='contact'>Contact us</span>
        </div>
    </div>
    );
};

export default TopBar;