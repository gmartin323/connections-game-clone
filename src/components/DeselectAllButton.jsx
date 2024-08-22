import React from 'react'

export default function DeselectAllButton( {selected, setSelected, buttonVisible} ) {

  function handleDeselectAll() {
    setSelected([])
  }

  return (
    buttonVisible 
      && 
    <button
      className='play-page-btn'
      onClick={handleDeselectAll}
      disabled={selected.length === 0}
      aria-disabled={selected.length === 0 ? "true" : "false"}
    >
      Deselect all
    </button>
  )
}