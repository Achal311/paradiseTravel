// import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  // const [count, setCount] = useState(0);
  const imgURL = [
    "./public/assets/bgimg.png",
    "./public/assets/bgimg.png",
    "./public/assets/bgimg.png",
  ];
  return (
    <>
      <Navbar></Navbar>
      <div className="home">
        <h1 className="heading-home">
          travel <br /> as if you <br /> are in
        </h1>
        <div className="image-container">
          <img
            className="paradise-text"
            src="src/assets/rev.png"
            alt="paradise-text"
          />
          <img
            className="whiteRev"
            src="./public/assets/bgimg.png"
            alt="icons-of-monuments"
          />
        </div>
      </div>
      <div className="services"></div>
      <div className="packages">
        <div className="slider">
          {imgURL.map((url, index) => (
            <img src={url} alt="" key={index} className="slider-cards" />
          ))}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
