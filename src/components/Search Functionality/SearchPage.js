import React from "react"
import InputBox from "./InputBox";
import "./search.css"
import PopularCategories from "./PopularCategories";
import PopularSearches from "./PopularSearches";

function SearchPage() {
  return (
    <div className="searchPageWrapper">
        <InputBox />
        <PopularCategories />
        <PopularSearches />
    </div>
  )
};

export default SearchPage;
