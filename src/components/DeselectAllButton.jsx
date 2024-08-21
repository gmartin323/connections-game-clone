import React from 'react'

export default function DeselectAllButton( {setSelected, buttonVisible} ) {

  function handleDeselectAll() {
    setSelected([])
  }

  return (
    buttonVisible 
      && 
    <button
      className='play-page-btn'
      onClick={handleDeselectAll}
    >
      Deselect all
    </button>
  )
}