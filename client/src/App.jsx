// Libraries
import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// Components
import { Navbar, Footer, PrivateRoute, Logout } from "./components";
// Pages
import { HomePage, LoginPage, FriendsPage, AddFriendPage } from "./pages";
// Contexts
import { LoginContext } from "./contexts";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const updateLoginStatus = () => {
    if (localStorage.getItem("token")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  return (
    <>
      <LoginContext.Provider value={{ isLoggedIn, updateLoginStatus }}>
        <Navbar isLoggedIn={isLoggedIn} />
        <Switch>
          <PrivateRoute path="/friends" component={FriendsPage} />
          <PrivateRoute path="/add-friend" component={AddFriendPage} />
          <PrivateRoute path="/logout" component={Logout} />
          <Route path="/login" component={LoginPage} />
          <Route path="/" component={HomePage} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </LoginContext.Provider>
    </>
  );
};

export default App;
