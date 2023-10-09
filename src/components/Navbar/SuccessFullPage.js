import React from "react"
import CheckIcon from '@mui/icons-material/Check';
import { usePostProvider } from "../AppContextProvider";
import { useNavigate } from "react-router-dom";
function SuccessFullPage({text , email , subs , btnText , handleOnClick}) {

    return (
    <div className="successFullPage">
      <div className="success-content">
        <div className="checkIcon"> 
            <CheckIcon />
        </div>
        <p className="successText">{text}</p>
        {email && <p className="email">{email}</p>}
        {subs && <p className="noActiveSubs">{subs}</p>}
        <button className="contBtn" onClick={() => handleOnClick()}>{btnText}</button> 
      </div>
    </div>
  )
};

export default SuccessFullPage;
