import React, { useState } from "react"
import InputBox from "./InputBox";
import "./search.css"
import PopularCategories from "./PopularCategories";
import PopularSearches from "./PopularSearches";

function SearchPage() {
  const [show, setShow] = useState(false);
  return (
    <div className="searchPageWrapper">
        <InputBox setShow={setShow} />
        {!show && <>
          <PopularCategories />
          <PopularSearches />
        </>}
        
    </div>
  )
};

export default SearchPage;
