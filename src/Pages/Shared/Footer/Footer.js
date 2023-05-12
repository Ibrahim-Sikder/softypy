import React from 'react';
import './Footer.css';
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebook,FaTwitter,FaBimobject,FaWhatsappSquare,FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='footer p-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center'>
                <div className='mb-10'>
                    <h4 className='pb-5'>BD Office Address </h4>
                    <p className='number'>
                       <span>
                       <span> <FaPhoneAlt></FaPhoneAlt> </span>
                        <span>+0182544-5033</span>
                       </span>
                    </p>
                    <p className='number'>
                       <span>
                       <span> <FaPhoneAlt></FaPhoneAlt> </span>
                        <span>+0182544-5033</span>
                       </span>
                    </p>
                    <p className='number'>
                       <span>
                       <span> <FaMapMarkerAlt></FaMapMarkerAlt> </span>
                        <span>Cox's Bazar, Ukhiya, Court Bazar</span>
                       </span>
                    </p>
                    <p className='number'>
                       <span>
                       
                        <span>Cox's Bazar, Bangladesh</span>
                       </span>
                    </p>
                </div>
                <div className='mb-10'>
                    <h4 className='pb-5'>USA Office Address </h4>
                    <p className='number'>
                       <span>
                       <span> <FaPhoneAlt></FaPhoneAlt> </span>
                        <span>+0182544-5033</span>
                       </span>
                    </p>
                    <p className='number'>
                       <span>
                       <span> <FaPhoneAlt></FaPhoneAlt> </span>
                        <span>+0182544-5033</span>
                       </span>
                    </p>
                    <p className='number'>
                       <span>
                       <span> <FaMapMarkerAlt></FaMapMarkerAlt> </span>
                        <span>USA Address: XXX Creek Ln,</span>
                       </span>
                    </p>
                    <p className='number'>
                       <span>
                       
                        <span>Daraville, GA XXX </span>
                       </span>
                    </p>
                </div>
                <div className='mb-10'>
                    <h4 className='pb-5'>Social Media  </h4>
                    <p className='number'>
                       <span>
                       <span > <FaFacebook className='socialIcon'></FaFacebook> </span>
                       <span> <FaTwitter className='socialIcon'></FaTwitter> </span>
                       <span> <FaWhatsappSquare className='socialIcon'></FaWhatsappSquare> </span>
                       <span> <FaPhoneAlt className='socialIcon'></FaPhoneAlt> </span>
                       <span> <FaPhoneAlt className='socialIcon'></FaPhoneAlt> </span>
                       <span> <FaBimobject className='socialIcon'></FaBimobject> </span>
                       <span> <FaInstagramSquare className='socialIcon'></FaInstagramSquare> </span>
                       </span>
                    </p>
                    <p className='number'>
                       <span>
                       <span> <FaPhoneAlt></FaPhoneAlt> </span>
                        <span>+0182544-5033</span>
                       </span>
                    </p>
                    <p className='number'>
                       <span>
                       <span> <FaMapMarkerAlt></FaMapMarkerAlt> </span>
                        <span>USA Address: XXX Creek Ln,</span>
                       </span>
                    </p>
                    <p className='number'>
                       <span>
                       
                        <span>Daraville, GA XXX </span>
                       </span>
                    </p>
                </div>
                <div className='mb-10'>
                    <h4 className='pb-5'>HELP </h4>
                    <p className='number'>
                       <span>
                       FAQ
                       </span>
                    </p>
                    <p className='number'>
                       <span>
                        <span>Privary Policy</span>
                       </span>
                    </p>
                    <p className='number'>
                       <span>
                        <span>Term & Condition </span>
                       </span>
                    </p>
                   
                </div>
            </div>
        </div>
    );
};

export default Footer;