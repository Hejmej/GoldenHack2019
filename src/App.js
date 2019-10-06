import React from 'react';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Discover from './components/discover';
import Analytics from './components/analytics';
import Search from './components/search';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/discover" component={Home}/>
        <Header/>
      </div>
    </BrowserRouter>
  );
}

export default App;
