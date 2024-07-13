import React from 'react'

export default function GameSelectionTile( { game } ) {


  const {id, Title} = game

  return (
    <div className="game-selection-tile" >
      <h3>{Title}</h3>
      <p>{id}</p>
    </div>
  )
}