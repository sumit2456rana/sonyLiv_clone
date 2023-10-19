import React from "react"
import MovieUi from "./MovieUi";
import "./homePage.css"
const MovieDetails = [
    {
      id: 1,
      poster_img: "https://images.slivcdn.com/videoasset_images/mc2_episodic_17oct_masthead_web_v1.jpg?h=auto&w=1366&q=high&fr=webp",
      title_img: "https://images.slivcdn.com/videoasset_images/mc2_episodic_17oct_masthead_logo.png?w=400&q=high&fr=webp",
      title: "MasterChef India",
      genre: "Reality , Cookery",
      language: "Hindi",
      realesed: "2023",
    },
    {
      id: 2,
      poster_img: "https://images.slivcdn.com/videoasset_images/scam2003thetelgistory_volume2_trailer_18oct_masthead_web_v1_.jpg?h=auto&w=1366&q=high&fr=webp",
      title_img: "https://images.slivcdn.com/videoasset_images/scam2003thetelgistory_volume2_trailer_18oct_masthead_logo.png?w=400&q=high&fr=webp",
      title: "Scam 2003",
      genre: "Thriller , Based on True...",
      language: "Hindi",
      realesed: "2023",
    },
    {
        id: 3,
        poster_img: "https://images.slivcdn.com/videoasset_images/scam2003thetelgistory_6_masthead_web_v1_r.jpg?h=auto&w=1366&q=high&fr=webp",
        title_img: "https://images.slivcdn.com/videoasset_images/scam2003thetelgistory_rev_hindi_multilang_masthead_logo_new_show.png?w=400&q=high&fr=webp",
        title: "Scam 2003",
        genre: "Biography , Crime , Dram…",
        language: "Hindi",
        realesed: "2023",
    },
    {
        id: 4,
        poster_img: "https://images.slivcdn.com/videoasset_images/lokkhichele_1_masthead_web_v1.jpg?h=auto&w=1366&q=high&fr=webp",
        title_img: "https://images.slivcdn.com/videoasset_images/lokkhichele_1_masthead_logo_dated.png?w=400&q=high&fr=webp",
        title: "Lokkhi Chhele",
        genre: "Drama",
        language: "Bengali",
        realesed: "2023",
    },
    {
        id: 5,
        poster_img: "https://images.slivcdn.com/videoasset_images/usopen_ostapenko_hls_4sep_masthead_web_v1.jpg?h=auto&w=1366&q=high&fr=webp",
        title_img: "https://images.slivcdn.com/videoasset_images/usopen2023_round4_highlights_3sept_masthead_logo.png?w=400&q=high&fr=webp",
        title: "US Open 2023",
        genre: "Tennis",
        language: "English",
        realesed: "",
    },
    {
        id: 6,
        poster_img: "https://images.slivcdn.com/videoasset_images/kbc_episode_1sepep_masthead_web_v1.jpg?h=auto&w=1366&q=high&fr=webp",
        title_img: "https://images.slivcdn.com/videoasset_images/kbc2023_latest_ep_masthead_logo_re.png?w=400&q=high&fr=webp",
        title: "Kaun Banega Corerpati",
        genre: "Game Show",
        language: "Hindi",
        realesed: "2023",
    },
    {
        id: 7,
        poster_img: "https://images.slivcdn.com/videoasset_images/porthozhil5_masthead_web_v1.jpg?h=auto&w=1366&q=high&fr=webp",
        title_img: "https://images.slivcdn.com/videoasset_images/porthozhil_10aug_multilang_masthead_logo_new_movie.png?w=400&q=high&fr=webp",
        title: "Por Thozhil",
        genre: "Thriller, Crime",
        language: "Hindi",
        realesed: "2023",
    },
    
]
function HomePage() {
  return (
    <div>
      <MovieUi MovieDetails={MovieDetails} />
    </div>
  )
};

export default HomePage;
