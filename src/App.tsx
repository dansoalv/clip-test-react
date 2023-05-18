import React from 'react';
import './App.css';
import './styles/fonts.css'
import Header from './components/header';
import Main from './components/main';
import CallToAction from './components/callToAction';

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <CallToAction/>
    </div>
  );
}

export default App;
