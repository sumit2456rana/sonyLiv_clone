import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./components/Home Page/HomePage";
import ListingMovies from "./components/Listing Movies/ListingMovies";
import SignIn from "./components/Navbar/SignIn";
import Register from "./components/Navbar/Register";
import { AppContextProvider } from "./components/AppContextProvider";
import UserProfile from "./components/Navbar/UserProfile";
import EditDetails from "./components/Navbar/EditDetails";
import Movie from "./components/Listing Movies/Movie";
import MyList from "./components/MyList/MyList";
import SearchPage from "./components/Search Functionality/SearchPage";
import SubscribePage from "./components/Subscribe/SubscripePage";
import PageNotFound from "./components/Page Not Fount/PageNotFount";
import SettingPreferences from "./components/Setting and Preferences/SettingPreferences";
import ActivateOffer from "./components/Activate Offer/AcitvateOffer";
import ActivateTV from "./components/Activate Tv/ActivateTV";

export default function App() {
  const location = useLocation();

  const isSearchPage = () => {
    return location.pathname === "/search" || location.pathname === "/subscription";
  };

  return (
    <div className="App">
      <AppContextProvider>
        {!isSearchPage() && <Navbar />}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <ListingMovies />
              </>
            }
          />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/myaccount" element={<UserProfile />} />
          <Route path="/myaccount/editdetails" element={<EditDetails />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/usercenter/mylist" element={<MyList />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/subscription" element={<SubscribePage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/setting-preferences" element={<SettingPreferences />} />
          <Route path="/activate_offers" element={<ActivateOffer />} />
          <Route path="/activateTV" element={<ActivateTV />} />
        </Routes>
      </AppContextProvider>
    </div>
  );
}
