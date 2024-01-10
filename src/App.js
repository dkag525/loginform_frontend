import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar"; // Import the Navbar component
import Errorpage from "./components/Errorpage";
import Logout from "./components/Logout";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<Errorpage />} />
      </Routes>
    </div>
  );
}

export default App;
