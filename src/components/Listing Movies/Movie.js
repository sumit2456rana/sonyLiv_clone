import React, { useEffect, useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import ReplyIcon from '@mui/icons-material/Reply';
import DoneIcon from '@mui/icons-material/Done';
import { useAsyncError, useNavigate, useParams } from "react-router-dom";
import WatchFreePreview from "./WatchFreePreview";
import ShowSuccessMsg from "../Navbar/ShowSuccessMsg";
import { usePostProvider } from "../AppContextProvider";
function Movie() {
  const [movieData, setMovieData] = useState({});
  const { userToken, isLogin } = usePostProvider();
  const [showAddedToList, setShowAddedToList] = useState(false);
  const [showDoneIcon, setShowDoneIcon] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  async function fetchData() {
    const resp = await fetch(`https://academics.newtonschool.co/api/v1/ott/show/${id}`, {
      method: "GET",
      headers: {
        projectId: 'ub5yjy8wj6ez',
      }
    });
    const data = await resp.json();
    setMovieData(data.data);
    console.log(data.data);
  }
  useEffect(() => {
    fetchData();
  }, [id])
  function handleMyListBtn() {
    if (isLogin) {
      setShowDoneIcon((prev) => !prev);
      addMovieToList();
      setTimeout(() => {
        setShowAddedToList(false);
      } , 3000);
    }else {
      navigate("/signin")
    }
  }

  async function addMovieToList() {
    const url = "https://academics.newtonschool.co/api/v1/ott/watchlist/like";
    const resp = await fetch(url, {
      method: "PATCH",
      headers: {
        'Authorization': `Bearer ${userToken}`,
        projectId: 'ub5yjy8wj6ez',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'showId': id,
      })
    })
    const data = await resp.json();
    console.log(data);
    if (data.status === 'success') {
      setShowAddedToList(true);
      setMsg(data.message);
    }
  }



  return (
    <div>
      <div className="movieGradientDiv">
        <div className="movie_left_side">
          <div>
            <h1><img src="https://images.slivcdn.com/UI_icons/packWise/premium_icon.png?h=24&w=24&q=high&fr=webp" style={{ marginRight: "10px" }} />{movieData.title}</h1>
          </div>
          <div className="movie_genre">
            <p>
              {movieData.createdAt?.split("-")[0]}
              <span className="dot">&bull;</span>
              <span className="movie_type">{movieData.type}</span>
              <span className="dot">&bull;</span>
              <span className="movie_type">{movieData.keywords?.join(", ")}</span>
            </p>
          </div>
          <div className="movie_desc">
            <p>" {movieData.description} "</p>
          </div>
          <div className="movie_cast">
            <p><span style={{ color: "rgba(255,255,255,0.6)" }}>Director:</span> {movieData.director}</p>
            <p><span style={{ color: "rgba(255,255,255,0.6)" }}>Cast:</span> {movieData.cast?.join(", ")}</p>
          </div>
          <div className="subs_watch_btn">
            <WatchFreePreview video_url={movieData.video_url} />
            <SubscribeBtnMovie />
          </div>
          <div style={{ display: "flex", marginTop: "20px" }}>
            <div className="addToMyListBtn">
              <button onClick={() => handleMyListBtn()}><span style={{ paddingRight: "5px" }}>{showDoneIcon ? <DoneIcon /> : <AddIcon />}</span>My List</button>
            </div>
            <div className="addToMyListBtn">
              <button><span style={{ paddingRight: "5px" }}>{<ReplyIcon />}</span>Share</button>
            </div>
          </div>
        </div>
        <div className="movie_right_side">
          <img src={movieData.thumbnail} />
        </div>
      </div>
      {showAddedToList && <ShowSuccessMsg text={msg} handleOnClick={() => setShowAddedToList(false)} />}
    </div>
  )
};

function SubscribeBtnMovie() {
  const navigate = useNavigate();
  return (
    <div className="subsBtnMovie" onClick={() => navigate("/subscription")}>
      <div className="left_subs">
        <img src="https://images.slivcdn.com/UI_icons/packWise/premium_icon.png?h=24&w=24&q=high&fr=webp" style={{ marginRight: "10px" }} />
        <span>Subscribe Now</span>
      </div>
      <div className="right-subs">
        <span>Stream Live Sports and Ad-Free Originals</span>
      </div>
    </div>
  )
}
export default Movie;