import { useState } from "react";
import { NavLink } from "react-router-dom";
function Navigations() {
  const [clickedIdx, setClickedIdx] = useState(null);
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
  return (
    <div className="navigations">
      {links.map((e, idx) => {
        return (
          <NavLink
            key={idx}
            className={idx === clickedIdx ? "active-links" : ""}
            onClick={() => setClickedIdx(idx)}
          >
            {e}
          </NavLink>
        );
      })}
    </div>
  );
}

export default Navigations;
