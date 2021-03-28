import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';

import Lab1 from './Lab1/Lab1';
import Lab2 from './Lab2/Lab2';
import Lab3 from './Lab3/Lab3';
import Lab4 from './Lab4/Lab4';

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
              <li className="nav-list__item">
                <NavLink
                  to="/lab2"
                  className="item__link"
                  activeStyle={{
                    fontWeight: 'bold',
                    textDecoration: 'underline',
                  }}
                >
                  lab2
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink
                  to="/lab3"
                  className="item__link"
                  activeStyle={{
                    fontWeight: 'bold',
                    textDecoration: 'underline',
                  }}
                >
                  lab3
                </NavLink>
              </li>
              <li className="nav-list__item">
                <NavLink
                  to="/lab4"
                  className="item__link"
                  activeStyle={{
                    fontWeight: 'bold',
                    textDecoration: 'underline',
                  }}
                >
                  lab4
                </NavLink>
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
            <Route path="/lab3">
              <Lab3 />
            </Route>
            <Route path="/lab4">
              <Lab4 />
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
