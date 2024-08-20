import React from 'react'

export default function CorrectSet( {correctSet, currentGame} ) {


  const setTitle = currentGame.sets[correctSet].setTitle
  const setAnswersObj = currentGame.sets[correctSet]

  // surely this could be simpler???
  const currentSetAnswerValues = Object.values(Object.fromEntries(Object.entries(setAnswersObj).filter(([key]) => key !== 'setTitle')))

  const answersList = currentSetAnswerValues.map((answer) => {
    return answer.answer
  }).join(', ')

  return (
    <div>
      <h3>{setTitle}</h3>
      <p>{answersList}</p>
    </div>
  )
}
