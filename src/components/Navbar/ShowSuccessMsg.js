import React, { useEffect } from "react";
import CloseIcon from '@mui/icons-material/Close';
function ShowSuccessMsg({text , handleOnClick}) {
  return (
    <div className="successMsgContainer">
        <div className="closeIcon2" onClick={() => handleOnClick()}>
            <CloseIcon />
        </div>
        <div>
            <img src="/images-removebg-preview.png" />
        </div>
        <p>{text}</p>
    </div>
  )
};

export default ShowSuccessMsg;
