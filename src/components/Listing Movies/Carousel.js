import React, { useEffect, useState } from "react"
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import { NavLink } from "react-router-dom";

function Carousel({ heading, movieList, class1 }) {

    const [showBtn, setShowBtn] = useState(false);
    // const [showPrevBtn, setShowPrevBtn] = useState(false);

    const container = document.querySelector(`.${class1}`);
    function btnLeft() {
        let width = container.clientWidth;
        container.scrollLeft = container.scrollLeft - width;
    }
    function btnRight() {
        let width = container.clientWidth;
        container.scrollLeft = container.scrollLeft + width;

    }
    useEffect(() => {
        if(window.innerWidth <= 1000){
            setShowBtn(false)
        }
    } , [window.innerWidth]) 
    return (
        <div className="carousel-container"

            onMouseEnter={() => {
                if (window.innerWidth >= 1000)
                    setShowBtn(true);
            }
            }
            onMouseLeave={() => {
                if (window.innerWidth >= 1000)
                    setShowBtn(false);
            }}

        >
            <h3>{heading}</h3>

            {showBtn && <button className="pre-btn" onClick={btnLeft}><WestIcon /></button>}
            {showBtn && <button className="next-btn" onClick={btnRight}><EastIcon /></button>}

            <div className={`${class1} main_movies_cont`}>
                {movieList?.map((eMovie, idx) => (
                    <EachMovieCard key={idx} eMovie={eMovie} />
                ))}
            </div>
        </div>
    )
};

function EachMovieCard({ eMovie }) {
    let style = {
        backgroundImage: `url(${eMovie.thumbnail})`,
    }
    // console.log(eMovie);
    return (
        <NavLink to={`/movies/${eMovie._id}`}><div className="movie-card" style={style}>
        </div></NavLink>
    )
}
export default Carousel;
