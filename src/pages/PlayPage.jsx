import React from 'react'
import { useParams } from 'react-router-dom'
import { getGame } from '../../firebase'
import { doc } from 'firebase/firestore'

// import formatSets from '../util/formatSets'

export default function PlayPage() {
  const [currentGame, setCurrentGame] = React.useState(null)
  const { id, title } = useParams()
  // use promise object correctly to setCurrentGame state
  async function getData(id) {
    const data = await getGame(id)
    setCurrentGame(data)
  }

  React.useEffect(()=> {
    getData(id)
  }, [])

  console.log(currentGame)

  // const answerArray = [
    
  // ]

  

  return (
    <div className='page-container'>
      <section>
        <h1>Game Title</h1>
      </section>
      <section>
        <h3>Game play section</h3>
        {/* {currentGame && <p>{setsTilesEl}</p>} */}
      </section>
    </div>

  )
}