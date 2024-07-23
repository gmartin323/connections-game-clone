import React from 'react'


export default function GameSelectTile( { game } ) {

  const {id, Title, Author, Difficulty} = game

  return (
    <div className="game-selection-tile" >
      <img src="src\images\board-100x100.svg" alt="template of 4x4 game board" />
      {/* <div className="game-selection-tile-info">
        <p>{Difficulty}/5</p>
        <p>by {Author}</p>
      </div> */}
      <h3 className="game-selection-tile-title">{Title}</h3>
    </div>
  )
}