import React from "react";
import "./Customer.css";
import quote from '../../Assets/quote2.png';
const Customer = () => {
  return (
    <div className="my-20">
      <div className="customerHead pb-10 ">
        <h2>Customer satisfaction is our top priority</h2>
        <p>
          Our clients praise us for our great results, personable service,
          expert knowledge. Here are what just a few of them had to say
        </p>
      </div>
      <div className="customer">
        <p>Your thoughtfulness and support of Ghuronti is very much appreciated. <br />  You are a very dear friend to the Chamber, and I want to assure you that <br /> your confidence in Ghuronti will be justified.</p>
        <img className="quoteImg" src={quote} alt="quote" />
      </div>
    </div>
  );
};

export default Customer;
