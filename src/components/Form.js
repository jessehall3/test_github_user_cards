import React, {useState} from 'react'

const Form = props => {
  const [username, setUsername] = useState('')

  const fillTest = event => {
    console.log("HELLLOOOO");
    setUsername(event.target.value)
    let el = document.querySelector('#test')
    el.innerText = username
  }

  return (
    <form>
      <input
        type="text"
        value={username}
        onChange={fillTest}
        placeholder="GitHub username"
        required
      />
      <button type="submit">Add card</button>
    </form>
  )
}

export default Form
