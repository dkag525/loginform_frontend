import React from "react";

function Userdetails() {
  return (
    <>
      <div className="Citem item4">
        <div
          style={{
            border: "2px solid black",
            width: "200px",
            fontWeight: "bolder",
          }}
        >
          <p>User_Id</p>
          <p>Name</p>
          <p>Email</p>
          <p>Phone</p>
          <p>Profession</p>
        </div>
        <div
          style={{
            border: "2px solid black",
            width: "200px",
            fontWeight: "bolder",
          }}
        >
          {" "}
          <p>123456789</p>
          <p>Deepak</p>
          <p>abcd@gmail.com</p>
          <p>9876543210</p>
          <p>Web Devloper</p>
        </div>
      </div>
    </>
  );
}

export default Userdetails;
