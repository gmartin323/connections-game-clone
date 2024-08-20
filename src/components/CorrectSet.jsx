import React from 'react'

export default function CorrectSet( {correctSet, currentGame} ) {

  const set = {
    answers: "1, 2, 3, 4"
  }


  return (
    <div>
      <h3>{correctSet}</h3>
      <p>{set.answers}</p>
    </div>
  )
}