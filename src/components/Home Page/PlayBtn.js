import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import ReplyIcon from '@mui/icons-material/Reply';
import ComingSoon from "../Coming Soon/ComingSoon";

function PlayBtn({handleShowComingSoon}) {

  function handlePlayBtn() {
    handleShowComingSoon(true);

    setTimeout(() => {
      handleShowComingSoon(false);
    }, 3000);
  }

  return (
    <>
      <div className="play-container">
        <div onClick={handlePlayBtn} style={{ textAlign: "center" }}>
          <div style={{ fontWeight: "bold", cursor: "pointer" }}><AddIcon className="addIcon" /></div>
          <div >Add to My List</div>
        </div>
        <div>
          <button className="play-btn" onClick={handlePlayBtn}>Play Now</button>
        </div>
        <div onClick={handlePlayBtn} style={{ textAlign: "center" }}>
          <div style={{ cursor: "pointer" }}><ReplyIcon className="shareIcon" /></div>
          <div>Share</div>
        </div>
      </div>
    </>
  );
}

export default PlayBtn;
