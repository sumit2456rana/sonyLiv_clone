import React, { useState } from "react"
import "./activateOffer.css";
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import { useNavigate } from "react-router-dom";
function ActivateOffer() {
    const [code , setCode] = useState("");
    const navigate = useNavigate();
  return (
    <div className="myaccount-container">
        <div>
            <h3 className="activate_header">Activate Offer</h3>
            <div className="activate_container">
                <div className="activate_left">
                    <div className="go_back" onClick={() => navigate(-1)}>
                        <ArrowBackIosNewOutlinedIcon />
                    </div>
                    <img src="https://origin-staticv2.sonyliv.com/UI_icons/Tray_With_BG_Image/activation_offer_android_mobile.png" />
                </div>
                <div className="activate_right">
                    <p className="coupan_heading">Do you have a coupon?</p>
                    <p className="activate_offer_text_now">Activate the offer now!</p>
                    <div className="code_container">
                        
                        <LocalOfferOutlinedIcon />
                        <input 
                            type="text" 
                            placeholder="Enter the Code" 
                            value={code}
                            onChange={(e) => setCode(e.target.value)}    
                        />
                    </div>
                    <div className="reset">
                        <p onClick={() => setCode("")}>RESET</p>
                    </div>
                    <div className="activate_btn">
                        <button disabled={code.length <= 0 ? true : false}>Activate offer</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
};

export default ActivateOffer;
