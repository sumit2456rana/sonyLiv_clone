import React from "react"
import AddIcon from '@mui/icons-material/Add';
import ReplyIcon from '@mui/icons-material/Reply';
function PlayBtn() {
  return (
    <div className="play-container">
      <div style={{textAlign: "center"}}>
        <div style={{fontWeight: "bold" , cursor: "pointer"}}><AddIcon className="addIcon"/></div>
        <div>Add to My List</div>
      </div>
      <div>
        <button className="play-btn">Play Now</button>
      </div>
      <div style={{textAlign: "center"}}>
        <div style={{cursor: "pointer"}}><ReplyIcon className="shareIcon"/></div>
        <div>Share</div>
      </div>
    </div>
  )
};

export default PlayBtn;
