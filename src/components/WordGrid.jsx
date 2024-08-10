import React from 'react'

export default function WordGrid( {answersArray} ) {
  console.log(answersArray)

  return (
    <div>
      {answersArray.map((answer)=> {
        return <p key={answer.answer}>{answer.answer}</p>
      })}
    </div>
    
  )
}