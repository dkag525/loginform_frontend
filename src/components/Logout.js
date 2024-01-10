import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  // promeses method

  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status != 200) {
          const error = new Error(res.error);
          throw error;
        }
        sessionStorage.removeItem("USER");
        navigate("/signin", { replace: true });
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Logout Page</h1>
    </>
  );
}

export default Logout;
