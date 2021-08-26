import React from "react";
import { BrowserRouter as Link, Router, Route, Switch } from "react-router-dom";
import Unprotected from "./Unprotected";
import Protected from "./Protected";
import Home from "./Home";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function login() {
    setIsAuthenticated(true);
    console.log("loggedInUser:" + isAuthenticated);
  }

  function logout() {
    setIsAuthenticated(false);
    console.log("loggedInUser:" + isAuthenticated);
  }

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
        <Route exact path="/" component={Home} />
        <Route path="/protected" component={Protected} />
        <Route path="/unprotected" component={Unprotected} />
      </Switch>
    </Router>
  );
}

export default App;
