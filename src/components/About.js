import React, { useEffect, useState } from "react";
import Yoga from "../Images/Yoga.jpg";
import Userdetails from "./Userdetails";
import Userdetails_2 from "./Userdetails_2";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  const [Userinfo, setUserinfo] = useState(true);

  const handleclick = (option) => {
    if (option === "About") {
      setUserinfo(true);
    } else {
      setUserinfo(false);
    }
  };

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);

      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log("error");
      navigate("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <form method="GET" className="AboutSection-1">
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
    </form>
  );
}

export default About;
