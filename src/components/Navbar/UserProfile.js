import React, { useState } from "react"
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { NavLink, useNavigate } from "react-router-dom";
import { usePostProvider } from "../AppContextProvider";
import SuccessFullPage from "./SuccessFullPage";
function UserProfile() {
  const { userDetail, userToken, isLogin, setIsLogin} = usePostProvider();
  const [showLogOut , setShowLogOut] = useState(false);
  const navigate = useNavigate();
  function handleSignOut() {
    setShowLogOut(true);
    setIsLogin(false);
    // navigate("/");
  }
  function handleOnClick() {
    navigate("/");
  }
  console.log(userDetail);
  return (
    <div className="myaccount-container">
      <div>
        <div className="heading">
          <h2>My Account</h2>
        </div>
        <div className="myAccountProfile">
          <div>
            <img src={userDetail.profileImage ? userDetail.profileImage : "https://shorturl.at/HLOUY"} className="profile-img" alt="img" />
            <h4 className="user-name">{userDetail.name}</h4>
            <div className="editDetails">
              <NavLink to="/myaccount/editDetails"><p><span className="pencil-icon"><BorderColorOutlinedIcon /></span> Edit Details</p></NavLink>
            </div>
          </div>
        </div>
        <div className="MyAccountMenuListWrapper" style={{ backgroundImage: "url(https://origin-staticv2.sonyliv.com/UI_icons/rail_bg.png)" }}>
          <div>
            <img src="https://origin-staticv2.sonyliv.com/UI_icons/latest_premium_button.png" className="subs-icon" />
          </div>
          <div className="premium-container" >
            <div className="watchPremium">To watch Premium videos</div>
            <div className="goPremium">Go Premium</div>
          </div>
          <div className="arrow-icon">
            <KeyboardArrowRightOutlinedIcon />
          </div>
        </div>
        <div>
          {/* {menuData.map((e, i) => {
            return (
              <MyAccountMenuList key={i} src={e.src} text={e.text} />
            )
          })} */}
          <div className="myAccEachMenuList">
            <img src="https://images.slivcdn.com/UI_icons/transaction_history/transaction_history.png" className="menuListIcon" />
            <p>Transaction History</p>
          </div>
          <div className="myAccEachMenuList">
            <img src="https://images.slivcdn.com/UI_icons/transaction_history/devicemanagementicon.png" className="menuListIcon" />
            <p>Device Management</p>
          </div>
          <div onClick={handleSignOut} className="myAccEachMenuList">
            <img src="https://images.slivcdn.com/UI_icons/transaction_history/signout.png" className="menuListIcon" />
            <p>Sign Out</p>
          </div>
        </div>
      </div>
      {showLogOut && <SuccessFullPage text={"You have succesfully signed out."} btnText={"Go to home page"} handleOnClick={handleOnClick} />}
    </div>
  )
};

export default UserProfile;
