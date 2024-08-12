import React from 'react'
import shuffle from '../util/shuffle'

import WordButton from './WordButton'

export default function WordGrid( props ) {

  const { answersArray, selected, setSelected } = props

  const shuffledArray = React.useMemo(() => {
    return shuffle(answersArray)
  }, [answersArray])
  console.log('shufArr', shuffledArray)

  return (
    <div className='word-grid word-grid-default'>
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