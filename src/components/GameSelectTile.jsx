import React from 'react'

export default function GameSelectTile( { game } ) {

  const {id, Title, Author, Difficulty} = game

  let starRatingEl

  function getStarRatingEl(num) {
    let filledStarEl = []
    for (let i=0; i < num; i++ ) {
      filledStarEl.push(<i className="fa-solid fa-skull" style={{color: 'coral', padding: '1px'}} key={i}></i>)
    }
    let emptyStarsEl = []
    for (let i=0; i < 5 - num; i++ ) {
      filledStarEl.push(<i className="fa-solid fa-skull" style={{color: '#e3d8d3', padding: '1px'}} key={5-i}></i>)
    }

    starRatingEl = <p className="rating">{filledStarEl}{emptyStarsEl}</p>
    return starRatingEl
  }

  // Replace with avg rating after adding that functionality
  const randomStarRating = Math.random()* (5 - 1) + 1

  return (
    <div className="game-selection-tile" >
      <picture>
        <source srcSet="src\images\board-100x100.svg" media="(max-width: 768px)" />
        <source srcSet="src\images\board-1.svg" />
        <img src="src\images\board-1.svg" alt="Template of 4x4 game board" style={{width:"auto"}} />
      </picture>
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