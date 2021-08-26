import React, {useState} from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Unprotected from "./Unprotected";
import Protected from "./Protected";
import Home from "./Home";
import GuardedRoute from "./GuardedRoute";

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
            <Link to='/protected'>Link to Protected Page</Link>
          </li>
          <li>
            <Link to="/unprotected">Link to Unprotected Page</Link>
          </li>
        </ul>
        <button onClick={login}>Login</button>
        <br />
        <button onClick={logout}>Logout</button>
      </div>
      <Switch>
        <Route exact path="/" component={Home} />
        <GuardedRoute path="/protected" component={Protected} auth={isAuthenticated} />
        <Route path="/unprotected" component={Unprotected} />
      </Switch>
    </Router>
  );
}

export default App;
