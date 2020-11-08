import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Contract from "./component/Contract";
import Connect from "./component/Connect";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="roll">
        <Header />
        <Connect />
        <section></section>
        <Contract />
      </div>
      <section></section>
      <Footer />
    </div>
  );
}

export default App;
