import React, { createContext, useContext , useState } from "react";

const AppContext = createContext();

function AppContextProvider({ children }) {
    const [userDetail, setUserDetail] = useState({});
    const [userToken, setUserToken] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    let initialState = {
        userDetail,
        setUserDetail,
        userToken,
        setUserToken,
        isLogin,
        setIsLogin
    }
  return (
    <AppContext.Provider value={initialState}>
      {children}
    </AppContext.Provider>
  );
}

function usePostProvider() {
    const postContext = useContext(AppContext);
    return postContext;
}

export {AppContextProvider , usePostProvider};