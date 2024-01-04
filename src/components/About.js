import React, { useState } from "react";
import Yoga from "../Images/Yoga.jpg";
import Userdetails from "./Userdetails";
import Userdetails_2 from "./Userdetails_2";

function About() {
  const [Userinfo, setUserinfo] = useState(true);

  const handleclick = (option) => {
    if (option === "About") {
      setUserinfo(true);
    } else {
      setUserinfo(false);
    }
  };

  return (
    <div className="AboutSection-1">
      <div className="AboutSection-2">
        <div className="ImageSection-1">
          <img className="image" src={Yoga} alt="Photo" />
          <p>Name: Deepak</p>
          <p>Work: Devlopment</p>
          <p>Profession: Website</p>
          <p>Social: Instagram</p>
          <p>Eng: Soft. Eng.</p>
        </div>
        <div className="SectionHeader-1">
          <div className="SectionHeader-2">
            <div className="Citem item1">
              <h4>Name: Deepak</h4>
              <h5 style={{ color: "blue" }}>Web Devloper</h5>
              <h6>Ranking 1/10</h6>
            </div>
            <div className="Citem item2">
              <button
                style={{
                  padding: "5px 10px 5px 10px",
                  borderRadius: "10px",
                  border: "none",
                  backgroundColor: "yellow",
                }}
              >
                Edit Profile
              </button>
            </div>
          </div>
          <div className="SectionHeader-3">
            <div className="Citem item3">
              <h3 onClick={() => handleclick("About")}>About</h3>
              <h3 onClick={() => handleclick("Timeline")}>Timeline</h3>
            </div>
            <div>{Userinfo === true ? <Userdetails /> : <Userdetails_2 />}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
