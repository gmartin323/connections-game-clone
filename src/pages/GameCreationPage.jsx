import React from "react"
import SetInputCard from "../components/SetInputCard"

import { addDoc } from "firebase/firestore";
import { gamesCollectionRef } from "../../firebase";

export default function GameCreationPage() {

  /* const defaultSets = {
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
  } */

  const [set1, setSet1] = React.useState({})
  const [set2, setSet2] = React.useState({})
  const [set3, setSet3] = React.useState({})
  const [set4, setSet4] = React.useState({})
  
  const [newGame, setNewGame] = React.useState(
    {
      Title: '',
      Author: '',
      Difficulty: 0,
      Tags: [''],
      createdAt: Date.now(),
      // sets: {}
    }
  )
  
  
  React.useEffect(()=>{
    setNewGame({...newGame, sets: {
      set1: set1,
      set2: set2,
      set3: set3,
      set4: set4,
    }})
    
  }, [set1, set2, set3, set4])

  console.log('newGameState', newGame.sets)
  // console.log('set1', set1)
  
  function handleChange(event){
    setNewGame({...newGame, [event.target.name]: event.target.value})
  }

  function clearState() {
    setNewGame({
      Title: '',
      Author: '',
      Difficulty: 0,
      Tags: [''],
      createdAt: Date.now(),
      sets: {}
    })
  }

  async function createGame(event){
    event.preventDefault()
    // modify user inputted tags to array with no whitespace before or after strings
    let tagsArray
    newGame.Tags[0] ?
      tagsArray = newGame.Tags.split(',').map((tag)=>{return tag.trim()}) : 
      tagsArray = []
    const newGameData = {...newGame, Tags: tagsArray}
    const addedGame = await addDoc(gamesCollectionRef, newGameData)
    console.log("id", `${addedGame.id} submitted succesfully`)
    clearState()
    event.target.reset()
  }

  return (
    <div className="input-section">
      <form method="POST" onSubmit={createGame}>
        <div className="sets-input-section">
          <SetInputCard currentSetName={'set1'} setSet={setSet1}/>
          <SetInputCard currentSetName={'set2'} setSet={setSet2}/>
          <SetInputCard currentSetName={'set3'} setSet={setSet3}/>
          <SetInputCard currentSetName={'set4'} setSet={setSet4}/>
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
          <button 
            type="submit"
            className="play-page-btn create-page-btn"
          >
            Submit
          </button>
        </section>
      </form>
    </div>
  )
}