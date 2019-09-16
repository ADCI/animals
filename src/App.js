import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import MainPage from './pages/MainPage';
import AnimalDetailsPage from './pages/AnimalDetailsPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={MainPage} />
        <Route path="/:id" component={AnimalDetailsPage} />
      </Router>
    </div>
  );
}

export default App;
