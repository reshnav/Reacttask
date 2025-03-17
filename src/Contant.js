 import React  from 'react'
import { useState ,useEffect} from 'react';
import { FaTrashAlt } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./styles.css";
import "./App.css"; // Importing the CSS file

import axios from "axios";
import Hearder1 from './Hearder1';

// const DoctorCard = ({ doctor }) => (
//   <div className="doctor-card d-flex align-items-center justify-content-between p-3 shadow-sm bg-red rounded">
//     <div className="d-flex align-items-center">
//       <img src={doctor.profile_picture} alt="Doctor" className="rounded-circle me-3" width={50} height={50} />
//       <div>
//         <h5 className="mb-1">{doctor.name}</h5>
//         <p className="text-muted mb-0">{doctor.specialty.map(s => s.name).join(", ")}</p>
//       </div>
//     </div>
//     <button className="btn btn-primary">Connect</button>
//   </div>
// );
const DoctorCard = ({ doctor }) => (
  <div className="doctor-card">
    <div className="d-flex align-items-center">
      <img src={doctor.profile_picture} alt="Doctor" className="doctor-img rounded-circle me-3" />
      <div>
        <h5 className="mb-1">{doctor.name}</h5>
        <p className="text-muted mb-0">{doctor.specialty.map(s => s.name).join(", ")}</p>
      </div>
    </div>
    <button className="btn btn-sm px-3"
  style={{
    backgroundColor: "#0086b3",
    borderColor: "#0086b3",
    color: "white",
    fontSize: "15px",
    padding: "2px 1px",
    borderRadius: "5px"
  }}>
  Connect
</button>

    
  </div>
);


const Contant = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.post("https://ahd.instapract.ae/web/api/doctor/doc-list");
        console.log("(response.data.success",response)

        if (response.data.success) {
          console.log("(response.data.success",response.data.success)
          setDoctors(response.data.data);
        } else {
          throw new Error("Failed to fetch doctors");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    // <div className="container mt-5">
    //   <h3 className="mb-4 text-center">List of Available Doctors</h3>
    //   <div className="row justify-content-center">
    //     <div className="col-md-8">
    //       {doctors.map((doctor) => (
    //         <DoctorCard key={doctor.id} doctor={doctor} className="mb-3" />
    //       ))}
    //     </div>
    //   </div>
    // </div>
        <div>
      <Hearder1 /> {/* Include the header here */}
      <div className="container mt-5">
      <h6 className="mb-4 text-center" style={{ color: "#003366", fontWeight: "bold",marginRight: "576px" }}>
  List of Available Doctors
</h6>

      {/* <h6 className=" mb-4 text-center" style={{ color: "#003366",marginRight: "576px" }} >List of Available Doctors</h6>       */}
        <div className="row justify-content-center">
        <div className="col-md-8">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} className="mb-2" />
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contant