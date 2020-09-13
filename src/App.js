import React from 'react';
import './App.css';
import Routes from './Routes';
import NavBarComp from './NavBarComp';

function App() {
  return (
    <div className='App'>
      <NavBarComp />
      <Routes />
    </div>
  );
}

export default App;
