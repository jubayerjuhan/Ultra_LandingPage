import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
      </Router>
    </>
  );
}

export default App;
