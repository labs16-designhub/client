import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import UserProfile_LI from './components/UserProfile_LI';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Route exact path="/profile" component={UserProfile_LI} />
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
