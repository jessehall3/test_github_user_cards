import React, { Component } from 'react';
import Card from './components/Card'
import CardList from './components/CardList'
import './App.css';

function App() {
  let cardProps = {
    avatar_url: "https://avatars3.githubusercontent.com/u/37995847?s=460&v=4",
    name: "Jessius Maximus",
    blog: "example.com",
  }
  return (
    <div className="App">
      <h1>
        Github User Cards
      </h1>
      <Card {...cardProps} />
    </div>
  )
}

export default App;
