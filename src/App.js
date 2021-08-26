import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Unprotected from "./Unprotected";
import Protected from "./Protected";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Link to Home Page</Link>
          </li>
          <li>
            <Link to="/protected">Link to Protected Page</Link>
          </li>
          <li>
            <Link to="/unprotected">Link to Unprotected Page</Link>
          </li>
        </ul>
      </div>
      <Switch>
        <Route path="/protected" component={Protected} />
        <Route path="/unprotected" component={Unprotected} />
      </Switch>
    </Router>
  );
}

export default App;
