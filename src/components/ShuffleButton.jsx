import React from 'react'
import shuffle from '../util/shuffle'

export default function ShuffleButton( { answersArray, setAnswersArray, buttonVisible } ) {

  function handleShuffle() {
    setAnswersArray(shuffle([...answersArray]))
  }

  // console.log(answersArray)

  return (
    buttonVisible 
      && 
    <button
      className='play-page-btn'
      onClick={handleShuffle}
    >
      Shuffle
    </button>
  )
}