import React, {useState} from 'react';
import Form from './components/Form'
import CardList from './components/CardList'
import './App.css';

function App() {
  let card = {
    avatar_url: "https://avatars3.githubusercontent.com/u/37995847?s=460&v=4",
    name: "Jessius Maximus",
    blog: "example.com",
  }
  let cards = [card, card]
  return (
    <div className="App">
      <h1>
        Github User Cards
      </h1>
      <hr/>
      <Form/>
      <hr/>
      <CardList cards={cards} />
    </div>
  )
}

export default App;
