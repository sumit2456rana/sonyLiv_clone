import Logo from "./Logo";
import Navigations from "./Navigations";
import RightNavBar from "./RightNavBar";
import "./navbar.css"
import { usePostProvider } from "../AppContextProvider";
function Navbar() {
  // const {userDetail, userToken, isLogin} = usePostProvider();
  // console.log("IS USER LOGINS -> " , isLogin);
  // console.log("USER DETAIL -> " , userDetail);
  // console.log("USER TOKEN -> " , userToken);
  return (
    <nav>
      <div className="leftNavbar">
        <Logo />
        <Navigations />
      </div>
      <RightNavBar />
    </nav>
  );
}
export default Navbar;
