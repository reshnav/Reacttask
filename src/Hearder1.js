import React from 'react'
import "./App.css"; // Importing the CSS file
import istaimg from "./assets/istaimg.png"
import doc1 from "./assets/doc1.avif"
import { useEffect, useState } from "react";



const Hearder1 = () => {

  const [user, setUser] = useState({
    profilePicture: "/profile.png",
    userName: "Guest",
    userId: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear(); // Clear user session data
    window.location.href = "/Footer"; // Redirect to login page
  };
  return (
    <div className="header d-flex justify-content-between align-items-center p-3 shadow-sm">
      <div className="logo d-flex align-items-center">
        <img src={istaimg} alt="Logo"/>
        {/* <h4 className="ms-2 fw-bold">InstaPract</h4> */}
      </div>
      <div className="user-info d-flex align-items-center">
        <img
          src={user.profilePicture}
          alt="User"
          className="rounded-circle me-2"
          width={40}
          height={40}
        />
        <div>
          <p className="mb-0 " style={{ color: "#003366"}}>Hi, {user.userName}</p>
          <small className="text-muted" style={{ color: "#003366" }}>
  User ID: {user.userId ? user.userId.slice(-4) : ""}
</small>        </div>
       

<button className="btn btn-outline-dark ms-3" onClick={handleLogout}>
  <i className="bi bi-power"></i> 
</button>
      </div>
    </div>
  );
};


export default Hearder1