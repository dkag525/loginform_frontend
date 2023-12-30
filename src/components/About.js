import React from "react";
import Yoga from "../Images/Yoga.jpg";

function About() {
  return (
    <div className="container emp-profile">
      <form method="">
        <div className="row">
          <div className="col-md-4">
            <img
              src={Yoga}
              alt="yoga"
              style={{ width: "200px", height: "200px" }}
            />
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h5>vinod</h5>
              <h6>web devloper</h6>
              <p className="profile-rating mt-3 mb-5">Ranking : 1/10</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default About;
