import React from 'react'

export default function GuessButton(props) {

  const { selected } = props

  function showError(message) {

  }

  function handleGuess() {
    
  }

  return (
    <button
      onClick={handleGuess}
      disabled={selected.length !== 4}
      aria-disabled={selected.length !== 4 ? "false" : "true"}
    >
      Submit
    </button>
  )
}