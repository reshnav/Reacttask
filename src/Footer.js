import React, { useState }  from "react";
import "./App.css"; // Importing the CSS file
import istaimg from "./assets/istaimg.png"
import doc1 from "./assets/doc1.avif"
import doc2 from "./assets/doc2.jpg"
import { useNavigate } from "react-router-dom"; 
import OIPImage from "./assets/OIP.jpeg"

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import axios from "axios";
const Footer = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const payload = {
      username: formData.username,
      password: formData.password,
      device_id: "d110e15c-74f6-41fb-be55-893016b12294",
      os_id: "b93a9204-ee21-4cf9-8a94-cf5eeabf7301",
      role_id: "143f37f2-ca38-0ab1-2489-1e47113655fc",
      language: "da315627-3ece-2016-c628-b61dc5ee9be0",
  
    };

    console.log(payload,"payload_________________")
    const headers = {
      "Accept": "application/json, text/plain, */*",
      "Content-Type": "application/json",
      "APPID": "Gem3s12345",
      "Authorization": "Bearer LpKHZ"

    };
    console.log("headers",headers)
    try {
      const response = await axios.post(
        "https://uae-saas-api.instapract.ae/web/api/default/login",
        payload,
        {
          headers
        }
      );

      if (response.data.success) {
        console.log("Login Successful:", response.data);

        const patientProfile = response.data.PatientProfile || {};
        const user = response.data.User || {};
      
        const userData = {
          profilePicture: patientProfile.profile_picture || OIPImage,
          userName: user.username || "Michael Allwyn",
          userId: user.id || "b6d368b0-852d-4ea1-8b8b-2f5168fc7e10",
        };
      
        localStorage.setItem("userData", JSON.stringify(userData));

        const authToken = response.data.data.access_token;
        console.log("Authorization Token:", authToken);
        localStorage.setItem("authToken", authToken);
        
        setTimeout(() => {
          navigate("/Contant"); 
        }, 300);

      } else {
        console.error("Login Failed:", response.data.msg);
        setError(response.data.msg);
      }
    } catch (err) {
      console.error("API Error:", err);
      setError("An error occurred. Please try again.");
    }if(error.response){
      console.error("Response Data:", error.response.data);
   }else if(error.request){
       console.error("No Response from Server");
   } else{
     console.error("Error Setting Up Request");
   }
  };

  

  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0">
          {/* Left Section - Background Image & Text */}
          <MDBCol
  md="6"
  className="text-white d-flex flex-column justify-content-center align-items-center"
  style={{
    backgroundImage: `linear-gradient(rgba(6, 72, 116, 0.5), rgba(6, 72, 116, 0.5)), url(${doc1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '3rem',
    color: 'white',
    textAlign: 'left',
  }}
>
        
        
            <h1 className="mb-3">Instapract</h1>
            <h4>User Centric Teleconsulting,</h4>
            <h4>Expert Opinion Platform.</h4>
          </MDBCol>

          {/* Right Section - Login Form */}
          <MDBCol md="6" className="d-flex align-items-center justify-content-center">
          <MDBCard className="shadow-0 border-0 w-75">
            <MDBCardBody className="p-5">
              {/* Logo */}
              <div className="text-center mb-4">
                <img src={istaimg} alt="InstaPract Logo" className="w-50" />
              </div>

              {/* Login Form */}
              <h3 className="fw-bold text-center mb-4">Login</h3>
              <form onSubmit={handleSubmit}>
              <MDBInput wrapperClass="mb-3" label="Username"  type="email" size="lg"
              
                            name="username"
                            placeholder="Revathi@mymail.com"
                            value={formData.username}
                            onChange={handleChange}
                            required
              />

              {/* Password Field with Show/Hide */}
              <div className="position-relative">
                <MDBInput wrapperClass="mb-3" label="Password"   size="lg"
                 
                  type="password"
                              name="password"
                              placeholder="**********"
                              value={formData.password}
                              onChange={handleChange}
                              required
                  />
                <span className="position-absolute top-50 end-0 translate-middle-y me-3"
                  style={{ cursor: "pointer" }}>
                
                </span>
              </div>

              {/* Remember Me & Login Button */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
              </div>

              <MDBBtn className="w-100" color="primary" size="lg"  type="submit" disabled={loading}> {loading ? "Logging in..." : "Login"}
              </MDBBtn>
</form>
           
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );

};





export default Footer
// return (


    
  //   <div className="login-container">
  //     <div className="login-left">
  //     <img src={doc2} alt="Login Illustration" className="login-image" />
  //       <h1>Instapract</h1>
  //       <p>User Centric Teleconsulting, Expert Opinion Platform.</p>
  //     </div>

      
  //     <div className="login-right">
  //       <div className="login-box">
  //         <img src={istaimg}alt="InstaPract Logo" className="logo" />
  //         <h2>Login</h2>
  //         <form onSubmit={handleSubmit}>
  //           <label>Username</label>
  //           <input
  //             type="email"
  //             name="username"
  //             placeholder="janesmith@mymail.com"
  //             value={formData.username}
  //             onChange={handleChange}
  //             required
  //           />
  //           <label>Password</label>
  //           <input
  //             type="password"
  //             name="password"
  //             placeholder="**********"
  //             value={formData.password}
  //             onChange={handleChange}
  //             required
  //           />
  //           <div className="remember-me">
  //             <input type="checkbox" id="remember" />
  //             <label htmlFor="remember">Remember me</label>
  //           </div>
  //           {/* <button type="submit">Login</button> */}

  //           <button type="submit" disabled={loading}>
  //             {loading ? "Logging in..." : "Login"}
  //           </button>
            
  //         </form>
  //         {error && <p style={{ color: "red" }}>{error}</p>}
  //       </div>
  //     </div>


      
  //   </div>



  // );
