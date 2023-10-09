import React, { useState } from "react"
import PlayBtn from "./PlayBtn";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
function MovieUi({MovieDetails}) {
    const [show , setShow] = useState(false);
    let carousel = document.querySelector(".movie-carousel")
    function btnNext() {
        let width = window.innerWidth;
        carousel.scrollLeft = carousel.scrollLeft + width;
        console.log(width);
    }
    function btnPrev() {
        let width = window.innerWidth;
        carousel.scrollLeft = carousel.scrollLeft - width;
        console.log(width);
    }
  return (
    <div 
    className="movie-carousel"
    onMouseEnter={() => setShow(prev => !prev)} 
    onMouseLeave={() => setShow(prev => !prev)}
    >
        {show  && <div className="arrow-container">
            <div className="left-arrow">
                <button onClick={btnPrev}><WestIcon /></button>
            </div>
            <div className="right-arrow">
                <button onClick={btnNext}><EastIcon /></button>
            </div>
        </div>}
        {MovieDetails.map((each , idx) => {
            return (
                <div className="container" key={idx} title={each.title}>
                    <div className="img-container">
                        <div>
                            <img className="posterImg" src={each.poster_img} alt={each.title} />
                        </div>
                        <div>
                            <img className="titleImg" src={each.title_img} alt={each.title}/>
                        </div>
                        <div className="genre">
                            <div className="left-genre">
                                <p>{each.genre}
                                    <span className="dot">&bull;</span>
                                    {each.language}
                                    {each.realesed === "" ? "" : (<><span className="dot">&bull;</span>{each.realesed}</>)}
                                </p>
                                <div>
                                    <PlayBtn />
                                </div>
                            </div>
                            <div style={{visibility: "hidden"}}>
                                Something
                            </div>
                        </div>
                    </div>
                    
                </div>
            )
        })}
    </div>
  )
};

export default MovieUi;
