import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <h1 className="app-container__heading">Algorytmy Kombinatoryczne</h1>

      <Router>
        <div>
          <nav>
            <ul className="nav-list">
              <li className="nav-list__item">
                <Link to="/lab1" className="item__link">
                  lab1
                </Link>
              </li>
              <li className="nav-list__item">
                <Link to="/lab2" className="item__link">
                  lab2
                </Link>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/lab1">
              <Lab1 />
            </Route>
            <Route path="/lab2">
              <Lab2 />
            </Route>
            <Route path="/"></Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Lab1() {
  return <h2>lab1</h2>;
}

function Lab2() {
  return <h2>lab2</h2>;
}

export default App;
