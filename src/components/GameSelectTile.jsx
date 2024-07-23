import React from 'react'

export default function GameSelectTile( { game } ) {

  const {id, Title, Author, Difficulty} = game

  let starRatingEl

  function getStarRatingEl(num) {
    const filledSkulllIcon = <i class="fa-solid fa-skull" style={{color: 'coral', padding: '1px'}}></i>
    const emptySkullIcon = <i class="fa-solid fa-skull" style={{color: '#e3d8d3', padding: '1px'}}></i>
    let filledStarEl = []
    for (let i=0; i < num; i++ ) {
      filledStarEl.push(filledSkulllIcon)
    }
    let emptyStarsEl = []
    for (let i=0; i < 5 - num; i++ ) {
      filledStarEl.push(emptySkullIcon)
    }

    starRatingEl = <p className="rating">{filledStarEl}{emptyStarsEl}</p>
    return starRatingEl
  }

  const randomStarRating = Math.random()* (5 - 1) + 1

  console.log(randomStarRating)

  return (
    <div className="game-selection-tile" >
      <img src="src\images\board-100x100.svg" alt="template of 4x4 game board" />
      <div className="game-selection-tile-info">
        {getStarRatingEl(Difficulty)}
        <p>
          <i className="fa-solid fa-star"></i>
          <span className='star-rating-num'>{randomStarRating.toFixed(1)}</span>
        </p>
        {/* <p>by {Author}</p> */}
      </div>
      <h3 className="game-selection-tile-title">{Title}</h3>
    </div>
  )
}