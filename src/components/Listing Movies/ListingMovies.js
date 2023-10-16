import React, { useState } from "react"
import "./listingMovies.css"
import Carousel from "./Carousel";
import { useEffect } from "react";

function chunkArray(array, chunkSize) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
}

function ListingMovies() {
  const [movie , setMovie] = useState([]);
  function fetchShows() {
    const projectId = "ub5yjy8wj6ez";
    const url = "https://academics.newtonschool.co/api/v1/ott/show?limit=100";
    
    fetch(url, {
      method: "GET",
      headers: {
        projectId: projectId
      }
    })
    .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error(
        `Failed to retrieve data. Status code: ${response.status}`
      );
      }
    })
    .then((data) => {
      setMovie(data.data);
    })
    .catch((error) => {
      console.error(error);
    });
  }
  useEffect(() => {
    fetchShows();
  }, []);
  const movieChunks = chunkArray(movie, 20);
  return (
    <div className="main">
        {/* Carousel Component */}
        <Carousel heading={"Today's Hot Picks"} movieList={movieChunks[0]} class1="movies-container" />
        <Carousel heading={"Trendings"} movieList={movieChunks[1]} class1="movies1-container" />
        <Carousel heading={"Popular on Liv"} movieList={movieChunks[2]} class1="movies2-container" />
        <Carousel heading={"New on Liv"} movieList={movieChunks[3]} class1="movies3-container" />
        <Carousel heading={"Latest Episodes"} movieList={movieChunks[4]} class1="movies4-container" />
    </div>
  )
};

export default ListingMovies;
