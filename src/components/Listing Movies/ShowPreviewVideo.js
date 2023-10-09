import React from "react"
import CloseIcon from '@mui/icons-material/Close';
function ShowPreviewVideo({video_url , setShowVideo}) {
    function handleOnEnded() {
        setShowVideo(false);
    }
  return (  
    <div className="showVideo">
      <div className="closeIcon" onClick={() => setShowVideo(false)}><CloseIcon /></div>  
      <video src={video_url} controls autoPlay onEnded={() => handleOnEnded()}></video>
    </div>
  )
};

export default ShowPreviewVideo;
