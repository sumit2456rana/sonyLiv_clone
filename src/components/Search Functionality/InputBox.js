import React, { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";
import ShowSearchedMovie from "./ShowSearchedMovie";
function InputBox({setShow}) {
    const [query, setQuery] = useState("");
    const [searchedMovie, setSeacrhedMovie] = useState([]);
    const [showSearchedMovie, setShowSeacrhedMovie] = useState(false);
    const [error , setError] = useState(false);
    const [isLoading , setIsLoading] = useState(false);
    const inputRef = useRef();
    const navigate = useNavigate();
    setShow(showSearchedMovie);
    function handleClose() {
        navigate(-1);
    }
    async function getData() {
        setIsLoading(true);
        const url = `https://academics.newtonschool.co/api/v1/ott/show?search={"title" : "${query}"}`
        const resp = await fetch(url, {
            headers: {
                "projectId": "ub5yjy8wj6ez",
            }
        })
        const data = await resp.json();
        console.log(data);
        if(data.status === "success"){
            setSeacrhedMovie(data.data);
            setError(false);
            setIsLoading(false);
        }
        else {
            setError(true)
            setIsLoading(false);
        }
    }
    console.log(showSearchedMovie);
    useEffect(() => {
        inputRef.current.focus();
        if (query.length > 2) {
            getData();
        }
        if(query.length < 2) {
            setShowSeacrhedMovie(false);
        }
    }, [query])
    function handleKeyPress(event) {
        if (query.length > 2) {
            if (event.key === "Enter") {
                setShowSeacrhedMovie(true);
            } else {
                setShowSeacrhedMovie(false);
            }
        }
    }
    return (
        <div>
            <div className="closeicon_container" onClick={handleClose}>
                <svg fill="#000000" width="43px" height="43px" viewBox="0 0 24 24" id="cross" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" class="icon line-color"><line id="primary" x1="19" y1="19" x2="5" y2="5" style={{ fill: "none", stroke: "#A3A3A3", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.6" }}></line><line id="primary-2" data-name="primary" x1="19" y1="5" x2="5" y2="19" style={{ fill: "none", stroke: "#A3A3A3", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.6" }}></line></svg>
            </div>
            <div className="input_container">
                {/* <input type="search" ref={inputRef} value={"Coming Soon...."} disabled placeholder="Search for movies, shows, sports etc." /> */}
                <input type="search" ref={inputRef} value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={handleKeyPress} placeholder="Search for movies, shows, sports etc." />
            </div>
            {query.length > 2 && !showSearchedMovie ? <><div className="search-suggestion">
                {!error ? <ul>
                    {searchedMovie?.map((item, i) => (
                        <li onClick={() => {
                            setQuery(`${item.title}`);
                            setShowSeacrhedMovie(true);
                        }} key={i}>{item.title}</li>
                    ))}
                </ul> : <div className="searchNotFound_container">
                    <img src="https://origin-staticv2.sonyliv.com/UI_icons/paymentscreenicons/no_result.png" className="searchNotFound" />
                    <p>Sorry! Couldn’t find any results matching <span className="query_not">'{query}'</span></p></div>}
            </div></> : ""}
            {(showSearchedMovie) && <ShowSearchedMovie isLoading={isLoading} movieList={searchedMovie} error={error} />}
        </div>
    )
};

export default InputBox;
