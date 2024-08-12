import React from 'react'

export default function WordButton( props ) {

  const { selected, setSelected, answerObj } = props

  const { answer, set } = answerObj

  return (
    <button
      className='word-button'
      onClick={() => {
        let newSelected 
        if (selected.includes(answer)) {
          newSelected = selected.filter(word => word !== answer)
        } else if (selected.length === 4) {
          newSelected = selected
        } else {
          newSelected = [...selected, answer]
        }
        setSelected(newSelected)
      }}
    >
      {answer}
    </button>
  )
}

