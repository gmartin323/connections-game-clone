import React from 'react'
import { getDocs, query, orderBy, limit } from "firebase/firestore"
import { gamesCollectionRef } from '../../../firebase'

import GameSelectionTile from '../GameSelectionTile'
import { Link } from 'react-router-dom'


export default function RecentGamesSelection() {

  const [recentGames, setRecentGames] = React.useState([])

  async function getRecentGames() {
    const q = query(gamesCollectionRef, orderBy("createdAt", "desc"), limit(10))
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
        return (
          <Link 
            to={`/play/${game.Title}/${game.id}`}
            key={game.id}
            
          >
            <GameSelectionTile  game={game} />
          </Link>
        )
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