import React from "react"
import { NavLink } from "react-router-dom";
import Loader from "./Loader";

function ShowSearchedMovie({ isloading, movieList, error }) {
    return (
        <div>
            <div className="categories_header">
                <h2>Top Searches</h2>
            </div>
            {isloading ?
                <Loader /> :
                <div className="popSearches_container">
                    {error ? <h2>No Movies Found</h2> : (
                        movieList?.map((e, i) => (
                            <NavLink to={`/movies/${e._id}`}><img src={e.thumbnail} key={i} /></NavLink>
                        ))
                    )}
                </div>
            }
        </div>
    )
};

export default ShowSearchedMovie;
