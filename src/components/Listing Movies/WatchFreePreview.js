import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useState } from 'react';
import ShowPreviewVideo from './ShowPreviewVideo';
function WatchFreePreview({video_url}) {
    const [showVideo , setShowVideo] = useState(false);
    
    return (
      <div>
        <button 
        className="watchPrevBtn"
        onClick={() => setShowVideo(true)}
        ><span style={{marginRight: "5px"}}><PlayArrowIcon /></span>Watch Free Preview</button>
        {showVideo && <ShowPreviewVideo video_url={video_url} setShowVideo={setShowVideo} />}
      </div>
    )
}

export default WatchFreePreview;