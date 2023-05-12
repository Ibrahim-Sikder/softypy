import React from "react";
import "./Trending.css";
import trending from "../../Assets/trendin.png";
import trending2 from "../../Assets/trendin2.png";
import trending3 from "../../Assets/trendin3.png";
const Trending = () => {
  return (
    <div className=" destination my-24">
      <div className="trendingHead">
        <h2>Trending International Destinations</h2>
        <p>
          
          Serving our customer, searching their entire satisfaction and
          providing <br /> touristic services of quality, committing to the
          social, cultural and <br /> environmental reality of our country.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="trending">
          <img src={trending} className="w-full" alt="" />
          <div className="w-full flex justify-between px-5">
            <div>
              <h6>Dubai: The city of life </h6>
              <span>
                Starts From <span className="text-black">27500TK</span>
              </span>
            </div>
            <p>4 Days </p>
          </div>
          <button>View Details </button>
        </div>
        <div className="trending">
          <img src={trending} className="w-full" alt="" />
          <div className="w-full flex justify-between px-5">
            <div>
              <h6>Dubai: The city of life </h6>
              <span>
                Starts From <span className="text-black">27500TK</span>
              </span>
            </div>
            <p>4 Days </p>
          </div>
          <button>View Details </button>
        </div>
        <div className="trending">
          <img src={trending} className="w-full" alt="" />
          <div className="w-full flex justify-between px-5">
            <div>
              <h6>Dubai: The city of life </h6>
              <span>
                Starts From <span className="text-black">27500TK</span>
              </span>
            </div>
            <p>4 Days </p>
          </div>
          <button>View Details </button>
        </div>
      </div>
    </div>
  );
};

export default Trending;
