import React from 'react'

export default function CorrectSet( {correctSet, currentGame} ) {


  const setTitle = currentGame.sets[correctSet].setTitle
  const setAnswersObj = currentGame.sets[correctSet]

  console.log(correctSet)

  let bgColor 

  if (correctSet === 'set1') {
    bgColor = '#f9df6d'
  } else if (correctSet === 'set2') {
    bgColor = '#a0c35a'
  } else if (correctSet === 'set3') {
    bgColor = '#b0c4ef'
  } else {
    bgColor = '#ba81c5'
  }

  // surely this could be simpler???
  const currentSetAnswerValues = Object.values(Object.fromEntries(Object.entries(setAnswersObj).filter(([key]) => key !== 'setTitle')))

  const answersList = currentSetAnswerValues.map((answer) => {
    return answer.answer
  }).join(', ')

  return (
    <div className='correct-set-container' style={{backgroundColor: bgColor}}>
      <h3>{setTitle}</h3>
      <p>{answersList}</p>
    </div>
  )
}
