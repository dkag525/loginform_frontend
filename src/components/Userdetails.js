import React from "react";

function Userdetails(props) {
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
          <p>{props.userData?._id}</p>
          <p>{props.userData?.name}</p>
          <p>{props.userData?.email}</p>
          <p>9876543210</p>
          <p>{props.userData?.work}</p>
        </div>
      </div>
    </>
  );
}

export default Userdetails;
