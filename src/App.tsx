import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Routes } from 'react-router-dom';

function App() {
  return (
      <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
              <a href="/tutorials" className="navbar-brand">
                  bezKoder
              </a>
              <div className="navbar-nav mr-auto">
                  <li className="nav-item">
                      Oskarro
                  </li>
                  <li className="nav-item">
                      Oskar
                  </li>
              </div>
          </nav>

          <div className="container mt-3">
              {/*<Routes>*/}
              {/*    <Route path="/" />*/}
              {/*    <Route path="/tutorials"/>*/}
              {/*    <Route path="/add" />*/}
              {/*    <Route path="/tutorials/:id" />*/}
              {/*</Routes>*/}
          </div>

      </div>
  );
}

export default App;
