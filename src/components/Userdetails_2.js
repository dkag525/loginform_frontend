import React from "react";

function Userdetails_2(props) {
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
          <p>Insta</p>
          <p>facebook</p>
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
          <p>yes</p>
          <p>facebook.com</p>
          <p>{props.userData?.email}</p>
          <p>{props.userData?.phone}</p>
          <p>Web Devloper</p>
        </div>
      </div>
    </>
  );
}

export default Userdetails_2;
