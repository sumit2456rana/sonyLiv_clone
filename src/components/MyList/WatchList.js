import React, { useEffect, useState } from "react"
import Interest from "./Interest";
import { usePostProvider } from "../AppContextProvider";
import { NavLink } from "react-router-dom";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ShowSuccessMsg from "../Navbar/ShowSuccessMsg";

function WatchList({ isEditing , setLength }) {
  const { userToken } = usePostProvider();
  const [userMyListShows, setUserMyListShows] = useState([]);
  const [msg, setMsg] = useState("");
  async function getMovieFromWatchList() {
    const url = "https://academics.newtonschool.co/api/v1/ott/watchlist/like";
    const resp = await fetch(url, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${userToken}`,
        projectId: 'ub5yjy8wj6ez',
      }
    })
    const data = await resp.json();
    setUserMyListShows(data.data?.shows);
    setLength(data.data?.shows.length);
  }

  useEffect(() => {
    getMovieFromWatchList();
  }, [])

  async function handleDeleteShowFromMyList(id) {
    if (isEditing) {
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
      if (data.status === "success") {
        getMovieFromWatchList();
        setMsg(data.message);
      }
      else {
        alert("SomeThing Went Wrong!!");
      }
    }
  }

  function handleOnClose() {
    setMsg("");
  }
  if (msg) {
    setTimeout(() => {
      setMsg("");
    }, 2000)
  }
  return (
    <>
      {
        userMyListShows?.length > 0 ?
          <div className="watchlistMain_container">
            {userMyListShows.map((eShows) => {
              return (
                <NavLink style={{ color: "#fff" }} to={!isEditing && `/movies/${eShows._id}`}>
                  <div onClick={() => handleDeleteShowFromMyList(eShows._id)} className="watchlist_card" style={{ backgroundImage: `url(${eShows.thumbnail})` }}>
                    <div className="gradient"></div>
                    {isEditing && <div className="gradient delete">{<DeleteOutlineOutlinedIcon />}</div>}
                    <div className="content">
                      <h4>{eShows.title}</h4>
                    </div>
                  </div>
                </NavLink>
              )
            })}
          </div> : <Interest text={"mylist"} />
      }
      {msg && <ShowSuccessMsg text={msg} handleOnClick={handleOnClose} />}
    </>
  )
};

export default WatchList;
