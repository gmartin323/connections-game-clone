import React from 'react'

export default function WordButton( props ) {

  const { selected, setSelected, answerObj } = props

  const { answer, set } = answerObj

  const styles = selected.some(obj => obj['answer'] === answer) ?
    {
      backgroundColor: '#5a594e',
      color: '#fff'
    } :
    {
      backgroundColor: '#efefe6',
      color: '#000'
    }

  return (
    <button
      className='word-button'
      style={styles}
      onClick={() => {
        let newSelected 
        if (selected.some(obj => obj['answer'] === answer)) {
          newSelected = selected.filter(word => word.answer !== answer)
        } else if (selected.length === 4) {
          newSelected = selected
        } else {
          newSelected = [...selected, {answer:answer, set:set}]
        }
        setSelected(newSelected)
      }}
    >
      {answer}
    </button>
  )
}

