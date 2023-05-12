import React from 'react';
import './Travel.css';
import travel from '../../Assets/travel2.png'
const Travel = () => {
    return (
        <div className='travel py-24'>
           <div className="mb-24">
           <img src={travel} alt="" />
           </div>
        </div>
    );
};

export default Travel;