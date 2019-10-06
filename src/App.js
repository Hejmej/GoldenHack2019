import React from 'react';
// import Header from './components/header';
import Home from './components/home';
import Startups from './components/startups';
import Feed from './components/feed';
// import Search from './components/search';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/startups" component={Startups}/>
        <Route exact path="/homepage" component={Feed}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
