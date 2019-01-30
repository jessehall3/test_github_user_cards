import React, {useState} from 'react'

const Form = props => {
  const [username, setUsername] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    let el = document.querySelector('#test')
    el.innerText = username
    // axios.get(`https://api.github.com/users/${username}`).then(resp => {
    //   props.onSubmit(resp.data)
    //   setUsername('')
    // })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={event => setUsername(event.target.value)}
        placeholder="GitHub username"
        required
      />
      <button type="submit">Add card</button>
    </form>
  )
}

export default Form
