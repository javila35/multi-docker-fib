import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Fib from "./components/Fib";
import { Info } from "./components/Info";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to="/">Home</Link>
          <Link to="/info">Info</Link>
        </header>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/info" component={Info} />
        </div>
      </div>
    </Router>
  );
}

export default App;
