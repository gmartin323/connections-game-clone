import React from "react"
import SetInputCard from "../components/SetInputCard"

import { addDoc } from "firebase/firestore/lite";
import { gamesCollectionRef } from "../../firebase";

export default function GameCreationPage() {

  const [sets, setSets] = React.useState({
      set1Title: '',
      set1Answer1: '',
      set1Answer2: '',
      set1Answer3: '',
      set1Answer4: '',
      set2Title: '',
      set2Answer1: '',
      set2Answer2: '',
      set2Answer3: '',
      set2Answer4: '',
      set3Title: '',
      set3Answer1: '',
      set3Answer2: '',
      set3Answer3: '',
      set3Answer4: '',
      set4Title: '',
      set4Answer1: '',
      set4Answer2: '',
      set4Answer3: '',
      set4Answer4: ''
  })
  
  const [newGame, setNewGame] = React.useState(
    {
      Title: '',
      Author: '',
      Difficulty: 0,
      Tags: [''],
      createdAt: Date.now(),
      sets: {}
    }
  )
  
  console.log('newGameState', newGame)

  React.useEffect(()=>{
    console.log('setNewGameNow')
    setNewGame({...newGame, sets: sets})
  }, [sets])

  function handleChange(event){
    setNewGame({...newGame, [event.target.name]: event.target.value})
  }

  async function createGame(event){
    event.preventDefault()
    // modify user inputted tags to array with no whitespace before or after strings
    const tagsArray = newGame.Tags.split(',').map((tag)=>{return tag.trim()})
    const newGameData = {...newGame, Tags: tagsArray}
    const addedGame = await addDoc(gamesCollectionRef, newGameData)
    console.log("id", `${addedGame.id} submitted succesfully`)
    setSets({})
    setNewGame({
      Title: '',
      Author: '',
      Difficulty: 0,
      Tags: [''],
      createdAt: Date.now(),
      sets: {}
    })
  }

  return (
    <div className="input-section">
      <form method="POST" onSubmit={createGame}>
        <div className="sets-input-section">
          <SetInputCard currentSet={'set1'} setSets={setSets}/>
          <SetInputCard currentSet={'set2'} setSets={setSets}/>
          <SetInputCard currentSet={'set3'} setSets={setSets}/>
          <SetInputCard currentSet={'set4'} setSets={setSets}/>
        </div>
        <div className="info-input-section">
          {/* info: title, author, difficulty, tags */}
          <input 
            type="text" 
            name="Title" 
            placeholder="title"
            value={newGame.Title}
            onChange={handleChange}
            autoComplete="off"
            required
          />
          <input 
            type="text" 
            name="Author" 
            placeholder="author"
            value={newGame.Author}
            onChange={handleChange}
            autoComplete="off" 
            required
          />
          <input 
            type="range" 
            min="0" 
            max="5" 
            name="Difficulty"
            value={newGame.Difficulty}
            onChange={handleChange}
            required
          />
          <input 
            type="text" 
            name="Tags" 
            placeholder="tags"
            value={newGame.Tags}
            onChange={handleChange} 
            autoComplete="off" 
          />
        </div>
        <section className="confirm-section">
          <button type="submit">Submit</button>
        </section>
      </form>
    </div>
  )
}