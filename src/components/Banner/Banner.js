import React from "react";
import "./Banner.css";
import banner from "../../Assets/log 1.png";
import mokka from "../../Assets/Vector5.png";
import flight from "../../Assets/Vector.png";
import busses from "../../Assets/Vector2.png";
import man from "../../Assets/Vector3.png";
import hotel from "../../Assets/Vector4.png";
import visa from "../../Assets/Vector.png";
const Banner = () => {
  return (
    <div className="banner ">
      <img className="bannerImg" src={banner} alt="" />
      <h2>Welcome to Ghuronti! Find Flights, Hotels & Tour Packages</h2>
      <div className="bannerItem">
        <ul className="menu">
          <li className="items">
            <span>
              <img
                className="menuIcon mr-3 text-[#092E3D]"
                src={mokka}
                alt="menu"
              />
            </span>{" "}
            Hajj & Umrah{" "}
          </li>
          <li className="items">
            <span>
              <img className="menuIcon mr-3" src={flight} alt="menu" />
            </span>{" "}
            Flight{" "}
          </li>
          <li className="items">
            <span>
              <img className="menuIcon mr-3" src={busses} alt="menu" />
            </span>{" "}
            Hotel{" "}
          </li>
          <li className="items">
            <span>
              <img className="menuIcon mr-3" src={hotel} alt="menu" />
            </span>{" "}
            Visa{" "}
          </li>
          <li className="items">
            <span>
              <img className="menuIcon mr-3" src={visa} alt="menu" />
            </span>{" "}
            Tour{" "}
          </li>
          <li className="items">
            <span>
              <img className="menuIcon mr-3" src={man} alt="menu" />
            </span>{" "}
            Busses{" "}
          </li>
        </ul>
      </div>
      <div className="inputBox">
        <span>One way</span>
        <span>One way</span>
        <span>One way</span>
      </div>
      <div className="grid inputBox2 grid-cols-1 md:grid-cols-2">
        <div className="airPort">
          <h6>Flying From</h6>
          <p>City or Airport </p>
        </div>
        <div className="airPort2">
          <h6>Flying From</h6>
          <p>City or Airport </p>
        </div>
      </div>
      <div>
        <div className="depart">
          <p>Depart To</p>
          <span>18 March 2023</span>
        </div>
        <div className="depart2">
          <p>Return To</p>
          <span>25 March 2023</span>
        </div>
      </div>
      <div className="passenger">
        <span>Passengers & Cabin Class</span>
        <span>Copy
Economy Class</span> <br />
        <span>1 Person </span>
      </div>
      <button className="flightBtn mb-10">Search Flight</button>
    </div>
  );
};

export default Banner;
