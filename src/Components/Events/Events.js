import React from "react";
import "./Events.css";
import eventImage from "../../Images/Event image.png";
import { MdArrowForwardIos, MdEditCalendar, MdWavingHand } from "react-icons/md";
import { FaStreetView } from "react-icons/fa";

const Events = () => {
  return (
    <div>
      <img src={eventImage} alt="EventImage" />
      <div>
        <p className="eventName">Birthday Bash</p>
        <p className="hostName">
          Hosted by <b>Zillur</b>
        </p>
      </div>
      <div className="details">
      <div className="div3">
            <div className="div2">
              <div>
                <MdEditCalendar style={{ color: "#BD6E6E" }} />
              </div>
              <div>
                <p className="position">18 August 6:00PM</p>
                <p className="date">
                  to <b>19 August 1:00PM</b>UTC + 10
                </p>
              </div>
            </div>
            <div style={{ color: "#BDBDBD" }}>
              <MdArrowForwardIos />
            </div>
          </div>
          <div className="div3">
            <div className="div2">
              <div>
                <FaStreetView style={{ color: "red" }} />
              </div>
              <div>
                <p className="position">Street Name</p>
                <p className="date">301 Rowes Lane, WA, 7183</p>
              </div>
            </div>
            <div style={{ color: "#BDBDBD" }}>
              <MdArrowForwardIos />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Events;
