import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";
import movieNight from "../../Images/movieNight.jpg";
import { MdWavingHand, MdEditCalendar } from "react-icons/md";
import { FaHandshake, FaStreetView } from "react-icons/fa";
import { BsLink45Deg } from "react-icons/bs";
import { GiPartyPopper } from "react-icons/gi";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleEvent = () => {
    navigate("/create");
  };

  return (
    <div>
      <div className="landing">
        <p className="heading">
          Imagine if <br /> <span className="snapchat">Snapchat</span> <br />{" "}
          had events.
        </p>
        <p className="subTitle">
          Easily host and share events with your friends across any social
          media.
        </p>
      </div>
      <div className="eventSection">
        <div>
          <img className="movieNight" src={movieNight} alt="movieNight" />
        </div>
        <div>
          <h1>Movie Night</h1>
          <p>
            <MdWavingHand className="waving" /> Hosted by <b>Zillur</b>
          </p>
          <div className="div1">
            <p>
              {" "}
              <span style={{ color: "#5A4981" }}>14 responses .</span>{" "}
              <span style={{ color: "#9475D9" }}>see Guest</span>{" "}
            </p>
            <button className="btn1">
              <FaHandshake className="waving" /> Invite
            </button>
          </div>
        </div>
        <div className="details">
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
          <div className="div2">
            <div>
              <FaStreetView style={{ color: "red" }} />
            </div>
            <div>
              <p className="position">Street Name</p>
              <p className="date">301 Rowes Lane, WA, 7183</p>
            </div>
          </div>
          <div className="div2">
            <div>
              <BsLink45Deg style={{ color: "#61656A" }} />
            </div>
            <div>
              <p className="date">netflix.com</p>
            </div>
          </div>
        </div>
        <button className="btn2" onClick={handleEvent}>
          <p><GiPartyPopper style={{ color: "#F8CB49", fontSize: "18px" }}/> Create my event</p>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
