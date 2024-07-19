import { Link } from "react-router-dom";

import GameSelectTile from "../GameSelectTile";

export default function GameSelectCarousel( {gameArray} ) {

  return (
    <section className="games-selection-container">
      <div className="games-container" >
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
          <Link className='game-selection-tile'>See more</Link>
      </div>
    </section>
  )
}