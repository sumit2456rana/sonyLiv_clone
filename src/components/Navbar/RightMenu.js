import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { usePostProvider } from "../AppContextProvider";
import SuccesFullPage from "./SuccessFullPage";
const data = [
    {
        icon: "https://images.slivcdn.com/UI_icons/New_Final_Icons_30052020/ActivateTV3x.png?h=22&w=22&q=high&fr=webp",
        text: "Activate Tv",
    },
    {
        icon: "https://images.slivcdn.com/UI_icons/settings_icon.png?h=22&w=22&q=high&fr=webp",
        text: "Setting & Preferences",
    },
    {
        icon: "https://images.slivcdn.com/UI_icons/paymentscreenicons/Contact_Us_New_Icon3x.png?h=22&w=22&q=high&fr=webp",
        text: "Contact Us",
    },
    {
        icon: "https://images.slivcdn.com/UI_icons/New_Final_Icons_30052020/WhatsApp_icon_2x.png?h=22&w=22&q=high&fr=webp",
        text: "Chat with us on WhatsApp",
    },
    {
        icon: "https://images-preprod.slivcdn.com/activate/offer.png?h=22&w=22&q=high&fr=webp",
        text: "Activate Offer",
    },


]

function RightMenu({setShowLogOut}) {
    const { userDetail, userToken, isLogin, setIsLogin } = usePostProvider();
    // console.log(userDetail);
    
    function handleSignOut() {
        setIsLogin(false);
        setShowLogOut(true);
    }
    return (
        <div className="right-menu">
            <ul>
                <li>
                    {/* <UserHasNotLoggedIn /> */}
                    {isLogin === true ? <UserHasLoggedIn nameOfUser={userDetail.name} userDetail={userDetail} /> : <UserHasNotLoggedIn />}

                </li>
                <AllData icon={"https://images.slivcdn.com/UI_icons/Subscribe_Now.png?h=22&w=22&q=high&fr=webp"} text={"Subscribe Now"} />
                {isLogin && <NavLink style={{color: "white"}} to={"/usercenter/mylist"}><AllData icon={"https://images.slivcdn.com/UI_icons/mylist_non_selecte.png?h=22&w=22&q=high&fr=webp"} text={"My List"} /></NavLink>}

                {data.map((each, idx) => {
                    return (
                        <AllData icon={each.icon} text={each.text} key={idx} />
                    )
                })}
                {isLogin && <>
                    <li onClick={handleSignOut}>
                        <div className="each-item">
                            <div>
                                <img src="https://images.slivcdn.com/UI_icons/NEW_22052020/Iphone_Icons/logOut@3x.png?h=22&w=22&q=high&fr=webp" />
                            </div>
                            <div style={{
                                position: "absolute",
                                left: "70px"
                            }}>
                                Sign Out
                            </div>
                        </div>
                    </li>
                </>}
            </ul>
        </div>

    )
};
function UserHasNotLoggedIn() {
    return (
        <NavLink to="/signin" style={{ textDecoration: "none", color: "#fff" }}>
            <div className="signIn-container">
                <div>
                    <img src="https://shorturl.at/HLOUY" className="img-icon" alt="profle-icon" />
                </div>
                <div>
                    <p>Sign in</p>
                    <p>a better experience</p>
                </div>
            </div>
        </NavLink>
    )
}

function UserHasLoggedIn({nameOfUser , userDetail}) {
    return (
        <NavLink to="/myaccount"  style={{ textDecoration: "none", color: "#fff" }}>
            <div className="signIn-container">
                <div>
                    <img src={userDetail.profileImage ? userDetail.profileImage : "https://shorturl.at/HLOUY"} className="img-icon" alt="profle-icon" />
                </div>
                <div>
                    <p style={{fontSize: "1.2rem"}}>Hi {nameOfUser}</p>
                    <p>My account</p>
                </div>
            </div>
        </NavLink>
    )
}
function AllData({ icon, text }) {
    return (
        <li>
            <div className="each-item">
                <div>
                    <img src={icon} />
                </div>
                <div style={{
                    position: "absolute",
                    left: "70px"
                }}>
                    {text}
                </div>
            </div>
        </li>
    )
}
export default RightMenu;
