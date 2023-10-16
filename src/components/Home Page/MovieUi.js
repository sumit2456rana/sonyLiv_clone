import React, { useEffect, useRef, useState } from "react"
import PlayBtn from "./PlayBtn";
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';
import ComingSoon from "../Coming Soon/ComingSoon";
function MovieUi({MovieDetails}) {
    const carouselRef = useRef(null);
    const [show , setShow] = useState(false);
    const [showComingSoon , setShowComingSoon] =useState(false);
    function btnNext() {
        let width = window?.innerWidth;
        if (carouselRef.current) {
            carouselRef.current.scrollLeft += width;
        }
        console.log(width);
    }

    function btnPrev() {
        let width = window.innerWidth;
        if (carouselRef.current) {
            carouselRef.current.scrollLeft -= width;
        }
        console.log(width);
    }
    useEffect(() => {
        if(window.innerWidth <= 1000){
        setShow(true);
    }
    } , [window.innerWidth]) 
    function handleShowComingSoon(val) {
        setShowComingSoon(val);
    }
  return (
    <>
    {showComingSoon && <ComingSoon show={true} />}
    <div 
    className="movie-carousel"
    ref={carouselRef}
    onMouseEnter={() => {if(window.innerWidth >= 1000)  setShow(true)}} 
    onMouseLeave={() => {if(window.innerWidth >= 1000) setShow(false)}}
    >
        
        {show && <div className="arrow-container">
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
                                    <PlayBtn handleShowComingSoon={handleShowComingSoon} />
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
    </>
  )
};

export default MovieUi;
