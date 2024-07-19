import React from 'react'

export default function GameSelectTile( { game } ) {


  const {id, Title} = game

  return (
    <div className="game-selection-tile" >
      <img src="src\images\board-1.svg" alt="template of 4x4 game board" />
      <h3 className="game-selection-tile-title">{Title}</h3>
    </div>
  )
}