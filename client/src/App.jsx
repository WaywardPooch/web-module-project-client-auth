// Libraries
import React from "react";
import { Switch, Route } from "react-router-dom";
// Components
import { Navbar, Footer } from "./components";
// Pages
import { HomePage } from "./pages";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
