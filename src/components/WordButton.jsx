import React from 'react'

export default function WordButton( props ) {

  const { selected, setSelected, answerObj } = props

  const { answer, set } = answerObj

  const styles = selected.includes(answer) ?
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

