import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';

import Lab1 from './Lab1/Lab1';

function App() {
  return (
    <div className="app-container">
      <h1 className="app-container__heading">Algorytmy Kombinatoryczne</h1>
      <Router>
        <div>
          <nav>
            <ul className="nav-list">
              <li className="nav-list__item">
                <NavLink
                  to="/lab1"
                  className="item__link"
                  activeStyle={{
                    fontWeight: 'bold',
                    textDecoration: 'underline',
                  }}
                >
                  lab1
                </NavLink>
              </li>
            </ul>
          </nav>

          <Switch>
            <Route path="/lab1">
              <Lab1 />
            </Route>
            <Route path="/"></Route>
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;