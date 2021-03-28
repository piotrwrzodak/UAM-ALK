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
  const AppLink = (props) => {
    return (
      <li className="nav-list__item">
        <NavLink
          to={props.to}
          className="item__link"
          activeStyle={{
            fontWeight: 'bold',
            textDecoration: 'underline',
          }}
        >
          {props.to}
        </NavLink>
      </li>
    );
  };

  return (
    <div className="app-container">
      <h1 className="app-container__heading">Algorytmy Kombinatoryczne</h1>
      <Router>
        <div>
          <nav>
            <ul className="nav-list">
              <AppLink to="lab1" />
              <AppLink to="lab2" />
              <AppLink to="lab3" />
              <AppLink to="lab4" />
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
            <Route path="/" />
            <Redirect to="/" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
