import React from 'react'
import CorrectSet from './CorrectSet'

export default function CorrectSetsSection( {correct, currentGame} ) {

  return (
    <>
      {correct.map((correctSet) => {
          return <CorrectSet
                    correctSet={correctSet}
                    currentGame={currentGame}
                    key={correctSet}
                  />
        })
      }
    </>
  )
}