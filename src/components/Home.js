import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Home() {
  return (
    <>
      <div
        className="home-page"
        style={{
          backgroundColor: "#eee",
          height: "92.5vh",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div className="home-div">
          <p
            className="pt-5"
            style={{ fontSize: "2rem", fontWeight: "bold", color: "blue" }}
          >
            Welcome
          </p>
          <h1>We are working on Mern Project</h1>
        </div>
      </div>
    </>
  );
}

export default Home;
