import { useState } from "react";
import { NavLink } from "react-router-dom";
import ComingSoon from "../Coming Soon/ComingSoon";
function Navigations() {
  const [clickedIdx, setClickedIdx] = useState(null);
  const [showCs , setShowCs] = useState(false);
  const links = [
    "KBC",
    "US Open",
    "Originals",
    "QOTY",
    "TV Shows",
    "New",
    "WWE",
    "Sports",
    "Movies",
    "#WatchFree",
    "Premium"
  ];
  function handleLinks(idx) {
    setClickedIdx(idx);
    setShowCs(true)

    setTimeout(() => {
      setShowCs(false);
    } , 3000)
  }
  return (
    <>
    <div className="navigations">
      {links.map((e, idx) => {
        return (
          <NavLink
            key={idx}
            className={idx === clickedIdx ? "active-links" : ""}
            onClick={() => handleLinks(idx)}
          >
            {e}
          </NavLink>
        );
      })}
    </div>
    {showCs && <ComingSoon show={showCs} />}
    </>
  );
}

export default Navigations;
