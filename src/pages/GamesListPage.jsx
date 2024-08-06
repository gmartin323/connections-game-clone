import React from 'react'
import { Link } from 'react-router-dom'

import { getAllGames } from '../../firebase'
import GameSelectTile from '../components/GameSelectTile'

export default function GamesListPage() {

  const [allGamesData, setAllGamesData] = React.useState([])
  const [error, setError] = React.useState(null);

  React.useEffect(()=>{
    getAllGames()
      .then(data => {
        setAllGamesData(data)
      })
      .catch(error => setError(error.message));
  },[])

  console.log('allGamesState', allGamesData)

  const gamesListEl = (
    allGamesData.map((game)=>{
      return (
        <Link 
          to={`/play/${game.Title}/${game.id}`}
          key={game.id}
        >
          <GameSelectTile game={game} key={game.id}/>
        </Link>
      )
    })
  )

  return(
    <div className='page-container'>
      <h2>Games List</h2>
      <section className='tiles-container-section'>
        {gamesListEl}
      </section>
    </div>
  )
}