import { Link } from "react-router-dom";

import GameSelectTile from "../GameSelectTile";

export default function GameSelectCarousel( {gameArray} ) {

  return (
    <section className="games-selection-section">
      <div className="games-selection-container snaps-inline" >
          {gameArray.map((game) => {
            return (
              <Link 
                to={`/play/${game.Title}/${game.id}`}
                key={game.id}
              >
                <GameSelectTile  game={game} />
              </Link>
            )
          })}
          {/* Link to all games page, with sort set to most recent */}
          <Link 
            to={'/games'}
            className='game-selection-tile more-tile'
          >
            <i className="fa-solid fa-arrow-right"></i>
            <p>See more games</p>
          </Link>
      </div>
    </section>
  )
}