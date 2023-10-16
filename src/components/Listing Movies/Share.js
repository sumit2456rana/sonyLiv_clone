import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function Share({ title, link, setCloseModal }) {
  const [isCopied, setIsCopied] = useState(false);

  function handleCopyUrl() {
    const linkInput = document.getElementById("shareLinkInput");

    if (linkInput) {
      linkInput.select();
      linkInput.setSelectionRange(0, 99999);
      document.execCommand('copy');
      setIsCopied(true);    
    }
  }

  return (
    <div className="share_main_container">
      <div className="shareMovieLink">
        <div className="closeIcon" onClick={() => setCloseModal(false)}>
          <CloseIcon />
        </div>
        <h1 className="shareTitle">Share this Movie</h1>
        <p className="movieHead">Movie :</p>
        <p className="movieTitle">{title}</p>
        <p className="shareLink">Share Link :</p>
        <input
          id="shareLinkInput"
          className="link"
          value={link}
          readOnly
        />
        <div className="copyLink" onClick={handleCopyUrl}>
          
          {isCopied ? 'Link Copied!' : <><ContentCopyIcon /><span>Copy Link</span></>}
        </div>
      </div>
    </div>
  );
}

export default Share;
