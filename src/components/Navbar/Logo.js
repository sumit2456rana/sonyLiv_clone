import { NavLink } from "react-router-dom";

export default function Logo() {
  return (
    <div className="logo-container">
      <NavLink to="/">
        <img
          className="logo"
          src="https://images.slivcdn.com/UI_icons/sonyliv_new_revised_header_logo.png?w=40&q=high&fr=webp"
          alt="logo"
        />
      </NavLink>
      <button className="subscribeBtn">
        Subscribe
        <img
          className="greaterThanArrow"
          src="https://images.slivcdn.com/UI_icons/smart_hook/arrow_image.png?h=8&w=4&q=high&fr=webp"
          alt=">"
        />
      </button>
      <div className="seperator-div"></div>
    </div>
  );
}
