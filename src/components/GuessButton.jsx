import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function GuessButton(props) {

  const { answersArray, setAnswersArray, selected, setSelected, guesses, setGuesses, correct, setCorrect, buttonVisible, setButtonVisible } = props

  function handleGuess() {
    const categories = selected.map(word => word.set)
    const uniqueCategories = [...new Set(categories)]
    if (uniqueCategories.length > 1) {
      const newGuesses = guesses - 1
      if (newGuesses === 0) {
        setButtonVisible(false)
        toast('Game Over')
      } else if (uniqueCategories.length === 2) {
        toast('One away...')
      } else {
        toast('Incorrect!')
      }
      setGuesses(newGuesses)
      setSelected([])
      return
    }
    if (uniqueCategories[0] === selected[0].set) {
      // toast('Correct!')

      // remove correct guesses from answersArray
      const filteredAnswersArray = answersArray.filter((answer) => {
        return answer.set !== uniqueCategories[0]
      })
      setAnswersArray(filteredAnswersArray)
      setSelected([])
      setCorrect(prev => [...prev, uniqueCategories[0]])
      
      // check if all categories have been guessed correctly 
      if (filteredAnswersArray.length === 0) {
        setButtonVisible(false)
        toast('You solved it! Wow you must have big brain')
      }
    }
  }

  return (
    <>
      {buttonVisible 
        && 
        <button
          className='play-page-btn'
          onClick={handleGuess}
          disabled={selected.length !== 4}
          aria-disabled={selected.length !== 4 ? "false" : "true"}
          >
          Submit
        </button>
      }
    </>
  )
}