import React from 'react'
import shuffle from '../util/shuffle'

export default function ShuffleButton( { answersArray, setAnswersArray, buttonVisible, isShuffling, setIsShuffling } ) {

  function handleShuffle() {
    setIsShuffling(true)
    setTimeout(function(){setAnswersArray(shuffle([...answersArray]))}, 400)
    setTimeout(function(){setIsShuffling(false)}, 600)
  }

  // console.log(answersArray)

  return (
    buttonVisible 
      && 
    <button
      className='play-page-btn'
      onClick={handleShuffle}
      disabled={isShuffling}
    >
      Shuffle
    </button>
  )
}