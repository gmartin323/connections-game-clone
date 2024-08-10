import React from 'react'
import { useParams } from 'react-router-dom'
import { getGame } from '../../firebase'
import { doc } from 'firebase/firestore'

import getAnswersArray from '../util/getAnswersArray'
import GameTilesSection from '../components/WordGrid'

export default function PlayPage() {

  const [currentGame, setCurrentGame] = React.useState(null)
  const [answersArray, setAnswersArray] = React.useState()

  const [selected, setSelected] = React.useState([])
  const [correct, setCorrect] = React.useState([])
  const [guesses, setGuesses] = React.useState([])

  const { id, title } = useParams()
  
  async function getData(id) {
    const data = await getGame(id)
    setCurrentGame(data)
  }

  React.useEffect(()=> {
    getData(id)
  }, [])

  React.useEffect(() => {
    if (currentGame) {
    setAnswersArray(getAnswersArray(currentGame))
  }
  }, [currentGame])

  return (
    <div className='page-container'>
      <section>
        <h1>Game Title</h1>
      </section>
      <section>
        {answersArray && <GameTilesSection answersArray={answersArray} correct setCorrect selected setSelected guesses setGuesses/>}
      </section>
    </div>

  )
}