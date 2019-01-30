import React, {useState} from 'react'

const Form = props => {
  return (
    <form>
      <input
        type="text"
        placeholder="GitHub username"
      />
      <button type="submit">Add card</button>
    </form>
  )
}

export default Form
