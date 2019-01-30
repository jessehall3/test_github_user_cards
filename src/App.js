import React, {useState} from 'react';
import Form from './components/Form'
import CardList from './components/CardList'
import './App.css';

function App() {
  let testCard = {
    avatar_url: "https://avatars3.githubusercontent.com/u/37995847?s=460&v=4",
    name: "Jessius Maximus",
    blog: "example.com",
  }

  let testCards = [testCard, testCard]

  const [cards, setCards] = useState([])

  const addNewCard = cardInfo => {
    setCards(cards.concat(cardInfo))
  }

  return (
    <div className="App">
      <h1>
        Github User Cards
      </h1>
      <hr/>
      <Form onSubmit={addNewCard}/>
      <hr/>
      <h1 id="test">
        Foo
      </h1>
      <hr/>
      <CardList cards={testCards} />
      <hr/>
      <CardList cards={cards} />
    </div>
  )
}

export default App;
