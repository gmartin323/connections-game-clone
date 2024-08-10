import React from 'react'
import shuffle from '../util/shuffle'

export default function WordGrid( {answersArray} ) {
  console.log('arr',answersArray)
  const shuffledArray = shuffle(answersArray)
  console.log('shufArr', shuffledArray)

  return (
    <div>
      {answersArray.map((answer)=> {
        return <p key={answer.answer}>{answer.answer}</p>
      })}
    </div>
    
  )
}