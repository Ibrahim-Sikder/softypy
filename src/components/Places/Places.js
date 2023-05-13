import React from 'react';
import './Places.css';
import place from '../../Assets/see2.png';
import place2 from '../../Assets/see.png';
import place3 from '../../Assets/travel.png';
const Places = () => {
    return (
        <div className='places pt-10'>
           <h2 className='mb-16'>Best Places To Visit In Bangladesh</h2>
           <div className='bestPlaces'>
                <div>
                    <img src={place} className='w-full' alt="" />
                    <div className="w-full placesPrice">
                        <span>Cox's Bazar</span>
                        <span>1500tk</span>
                    </div>
                </div>
                <div className='leftContent mb-8'>
                    <p>Bangladesh is a South Asian country with a rich cultural heritage <br /> and natural beauty. It is home to the world's largest mangrove <br /> forest, culture, and natural beauty.</p>
                    <div className='mt-[85px] grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='w-full'>
                            <img className='w-full' src={place2} alt="price" />
                            <div className="w-full placesPrice">
                                <span>Cox's Bazar</span>
                                <span>1500tk</span>
                            </div>
                        </div>
                        <div className='w-full'>
                            <img src={place3} className='w-full' alt="" />
                            <div className="w-full placesPrice">
                                <span>Cox's Bazar</span>
                                <span>1500tk</span>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Places;