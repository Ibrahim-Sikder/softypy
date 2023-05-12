import React from "react";
import "./Mission.css";
import mission from "../../Assets/mission.png";
const Mission = () => {
  return (
    <div className="py-20">
      <div className="missionHead pb-8 ">
        <h2>Our Mission & Vision</h2>
        <p>
          Serving our customer, searching their entire satisfaction and
          providing <br /> touristic services of quality, committing to the
          social, cultural and <br /> environmental reality of our country.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  place-items-end">
        <div className="missionBox relative">
          <h4 className="missionText">Mission</h4>
          <img src={mission} alt="mission" />
          <p className="missionPara">
            Providing advanced travel solutions with great care and
            satisfaction.
          </p>
        </div>
        <div className="missionBox relative mr-[330px]">
          <h4 className="missionText">Mission</h4>
          <img src={mission} alt="mission" />
          <p className="missionPara">
            Providing advanced travel solutions with great care and
            satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
