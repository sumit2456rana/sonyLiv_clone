import React from "react"
import { useNavigate } from "react-router-dom";

function Heading() {
  const navigate = useNavigate();
  return (
    <>
    <div className="heading_container">
      <div>
        <img onClick={() => navigate("/")}  className="logoImg" src="https://images.slivcdn.com/UI_icons/New_Final_Icons_30052020/liv_icon.png?q=high&fr=webp" alt="logo" />
      </div>
      <div>
        <p className="number">9876543210</p>
      </div>
    </div>
    <div className="heading_subscribe">
        <h1>Subscribe to watch all content on Sony LIV</h1>
    </div>
    </>
  )
};

export default Heading;
