import SearchIcon from "@mui/icons-material/Search";
import RightMenu from "./RightMenu";
import { useState } from "react";
import SuccessFullPage from "./SuccessFullPage";
import { useNavigate } from "react-router-dom";
import { usePostProvider } from "../AppContextProvider";
function RightNavBar() {
  const [showRightMenu, setShowRightMenu] = useState(false);
  const [showLogOut , setShowLogOut] = useState(false);
  const {userDetail , isLogin} = usePostProvider();
  const navigate = useNavigate();
  function handleOnClick() {
    console.log("btn is clicked!!");
    setShowLogOut(false);
    navigate("/");
    setShowRightMenu((v) => !v);
  }
  const handleMouseEnter = () => {
    setShowRightMenu(true);
  };

  const handleMouseLeave = () => {
    setShowRightMenu(false);
  };

  return (
    <div className="rightNavBar" onMouseLeave={handleMouseLeave}>
      <div className="search-container" onClick={() => navigate("/search")}>
        <SearchIcon className="search-icon" />
      </div>
      <div className="profile-container" onMouseEnter={handleMouseEnter}>
        <div>
          <img
            className="profile-icon"  
            src={isLogin && userDetail.profileImage ? userDetail.profileImage : "https://shorturl.at/HLOUY"}
            alt="profileIcon"
          />
        </div>
        {showRightMenu && <RightMenu setShowLogOut={setShowLogOut} />}
        
      </div>
      {showLogOut && <SuccessFullPage text={"You have succesfully signed out."} btnText={"Go to home page"} handleOnClick={handleOnClick} />}
    </div>
  );
}

export default RightNavBar;
