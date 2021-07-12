import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Country from "./pages/country";
import Header from "./features/Header/Header";
import GlobalStyles from "./GlobalStyles";
import ThemeProvider from "./features/Theme/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyles />
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/country/:name" component={Country} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
