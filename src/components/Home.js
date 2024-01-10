import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function Home() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);

  const userHomePage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log("Contact Data", data);
      setUserName(data.name);
      setShow(true);
    } catch (error) {
      console.log("error");
      navigate("/signin");
    }
  };

  useEffect(() => {
    userHomePage();
  }, []);

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
          <h1>{userName}</h1>
          <h2>
            {show ? "Happy, to see you back" : "We are working on Mern Project"}
          </h2>
        </div>
      </div>
    </>
  );
}

export default Home;
