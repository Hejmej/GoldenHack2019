import React from 'react';
import Home from './components/home';
import Startups from './components/startups';
import Discover from './components/discover';
// import Search from './components/search';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path="/startups" component={Startups}/>
        <Route exact path="/discover" component={Discover}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
