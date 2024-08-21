import React from 'react'
import shuffle from '../util/shuffle'

import WordButton from './WordButton'

export default function WordGrid( props ) {

  const { answersArray, selected, setSelected, correct } = props

  const shuffledArray = React.useMemo(() => {
    return shuffle(answersArray)
  }, [answersArray])

  let wordGridRowsStyle

  if (correct.length === 3) {
    wordGridRowsStyle = 'word-grid-1-row'
  } else if (correct.length === 2) {
    wordGridRowsStyle = 'word-grid-2-rows'
  } else if (correct.length === 1) {
    wordGridRowsStyle = 'word-grid-3-rows'
  } else {
    wordGridRowsStyle = 'word-grid-default'
  }
  
  return (
    <div className={`word-grid ${wordGridRowsStyle}`}>
      {shuffledArray.map((answer)=> {
        return (
          <WordButton 
            key={answer.answer} 
            answerObj={answer}
            selected={selected}
            setSelected={setSelected}
          />
        )
      })}
    </div>
    
  )
}