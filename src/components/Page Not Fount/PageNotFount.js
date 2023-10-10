import React from "react"
import "./pageNotFound.css"
import { useNavigate } from "react-router-dom";
function PageNotFound() {
    const navigate = useNavigate();
  return (
    <div className="pageNotFound">
      <img src="https://www.sonyliv.com/publicAssets/error.png" />
      <p>The page you are looking for is not available right now.</p>
      <button onClick={() => navigate("/")} style={{width : "200px"}} className="contBtn">Go to Home</button>
    </div>
  )
};

export default PageNotFound;
