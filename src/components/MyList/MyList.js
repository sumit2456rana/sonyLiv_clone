import React, { useEffect, useState } from "react"
import "./myList.css";
import WatchList from "./WatchList";
import Interest from "./Interest";
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { usePostProvider } from "../AppContextProvider";
import { useNavigate } from "react-router-dom";
function MyList() {
    const {isLogin} = usePostProvider();
    const navigate = useNavigate();
    const [selected , setSelected] = useState("watchlist");
    const [isEditing , setIsEditing] = useState(false);
    const [movieLength , setMovieLength] = useState();

    useEffect(() => {
        if(!isLogin) {
          navigate("/signin") ;
        }
      } , [])
  return (
    <div className="myList">
        <div className="mylist_header">
            <div>
                <h2>Mylist</h2>
            </div>
            {movieLength > 0 && <div className="right_mylist" onClick={() => setIsEditing(v => !v)}>
                <div>
                    {!isEditing && <BorderColorIcon className="editIcon" />}
                </div>
                <p>{isEditing ? "Done" : "Edit"}</p>
            </div>}
        </div>
        <div style={{marginTop: "40px"}}>
            <div className="main_container">
                <div onClick={() => setSelected("watchlist")} className="watchlist_container">
                    <div className={`watchlist_header ${selected === 'watchlist' ? 'gold_border' : 'normal_border'}`}>
                        <p>Watchlist</p>
                    </div>
                </div>
                <div onClick={() => setSelected("interest")} className="interest_container">
                    <div className={`interest_header ${selected === 'interest' ? 'gold_border' : 'normal_border'}`}>
                        <p>Interest</p>
                    </div>
                </div>
            </div>
            <div style={{marginTop: "20px", color: "#fff"}}>
                {selected === 'watchlist' ? <WatchList isEditing={isEditing} setLength={setMovieLength} /> : <Interest />}
            </div>
        </div>
    </div>
  )
};

export default MyList;
