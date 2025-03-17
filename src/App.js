
import Contant from "./Contant";
import Footer from "./Footer";
import Hearder1 from "./Hearder1";
import { Routes, Route } from "react-router-dom";

// import './App.css';






function App() {

  // function handleNamechange(){
  //   const names =["Earn","Grow","Give"]
  //   const int = Math.floor(Math.random()*3);
  //   return names[int]
  // }
  // const name = "Revathi"
  return (
    <div>
      {/* heyyyyyyyyyyyyyyyyyyyyyyy
      <p>lets {handleNamechange()} money</p> */}

      {/* <Hearder1 /> */}
      {/* <Contant/> */}


      <Routes>
      <Route path="/Footer" element={<Footer />} />
      <Route path="/Contant" element={<Contant />} /> {/* Ensure this route exists */}
    </Routes>
    </div>
  );
}

export default App;
