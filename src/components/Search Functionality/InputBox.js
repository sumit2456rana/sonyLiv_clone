import React from "react"
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";
function InputBox() {
    const navigate = useNavigate();
    function handleClose() {
        navigate(-1);
    }
  return (
    <div>
        <div className="closeicon_container" onClick={handleClose}>
            <svg fill="#000000" width="43px" height="43px" viewBox="0 0 24 24" id="cross" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><line id="primary" x1="19" y1="19" x2="5" y2="5" style={{fill: "none", stroke: "#A3A3A3", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.6"}}></line><line id="primary-2" data-name="primary" x1="19" y1="5" x2="5" y2="19" style={{fill: "none", stroke: "#A3A3A3", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.6"}}></line></svg>
        </div>
        <div className="input_container">
            <input type="search" placeholder="Search for movies, shows, sports etc." />
        </div>  
    </div>
  )
};

export default InputBox;
