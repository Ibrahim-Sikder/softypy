import React from 'react';
import './Travel.css';
import travel from '../../Assets/travel2.png'
const Travel = () => {
    return (
        <div className='travel my-20'>
            <img className='w-full' src={travel} alt="" />
        </div>
    );
};

export default Travel;