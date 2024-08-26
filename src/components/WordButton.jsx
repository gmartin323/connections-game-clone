import React from 'react'

export default function WordButton( props ) {

  const { selected, setSelected, answerObj } = props

  const { answer, set } = answerObj

  const styles = selected.some(obj => obj['answer'] === answer) ?
    {
      backgroundColor: '#5a594e',
      color: '#fff',
      transitionDuration: '0.3s',
      transitionTimingFunction: 'easeInOut',
      transitionProperty: 'transform, color, background-color'
    } :
    {
      backgroundColor: '#efefe6',
      color: '#000',
      transitionDuration: '0.3s',
      transitionTimingFunction: 'easeInOut',
      transitionProperty: 'transform, color, background-color'
    }

  function handleMouseDown() {
    console.log("touched")
    let newSelected 
      if (selected.some(obj => obj['answer'] === answer)) {
        newSelected = selected.filter(word => word.answer !== answer)
      } else if (selected.length === 4) {
        newSelected = selected
      } else {
        newSelected = [...selected, {answer: answer, set: set}]
      }
      setSelected(newSelected)
  }

  return (
    <button
      className='word-button unselectable'
      style={styles}
      onMouseDown={handleMouseDown}
      disabled={selected.length === 4 && !selected.some(obj => obj['answer'] === answer)}
    >
      {answer}
    </button>
  )
}

