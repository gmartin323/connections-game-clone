import React from 'react'
import { getDocs, query, orderBy, limit } from "firebase/firestore"
import { gamesCollectionRef } from '../../../firebase'

import GameSelectionTile from '../GameSelectionTile'


export default function RecentGamesSelection() {

  const [recentGames, setRecentGames] = React.useState([])

  async function getRecentGames() {
    const q = query(gamesCollectionRef, orderBy("createdAt", "desc"), limit(2))
    const snapshot = await getDocs(q)
    const recentGamesData = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }))
    
    setRecentGames(recentGamesData)
  }  

  console.log("recent games", recentGames)

  React.useEffect(()=>{
    getRecentGames()
  }, []) 

  const gamesSelectionTilesEl = (
    <div className="games-selection-container">
      {recentGames.map((game) => {
        /* return (
          <div className="game-selection-tile" key={game.id}>
            <h3>{game.Title}</h3>
            <p>{game.id}</p>
          </div>
        ) */
        return <GameSelectionTile key={game.id} game={game} />
      })}
    </div>
  )

  return (
    <div className='games-list-container'>
      <p>10 most recent games</p>
      <div className='games-list'>
        {gamesSelectionTilesEl}
      </div>
    </div>
  )
}