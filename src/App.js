import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import { GlobalStyle } from "./GlobalStyle";
import Home from "./Pages/Homepage/Home";
import Footer from "./Components/Footer/Footer";
import PricingTrial from "./Components/PricingTrial/PricingTrial";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>

        <Switch>
          <Route path="/pricing">
            <PricingTrial></PricingTrial>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
