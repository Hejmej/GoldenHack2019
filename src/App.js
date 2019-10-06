import React from 'react';
import './App.css';
// import Header from './components/header';
import Home from './components/home';
import Startups from './components/startups';
// import Analytics from './components/analytics';
// import Search from './components/search';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/startups" component={Startups}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
