import React from "react"

export default function SetInputCard( {set, setSet} ) {

  function handleSetChange(event){
    setSet((prevSet) => {
      return ({...prevSet, [event.target.dataset.input]: event.target.value})
    })
    // console.log(event.target.dataset.input)

  }


  return (
    <div className="set-input-card-container">
      <div className="set-input-title">
        <h2>Title:</h2>
        <input
          type="text"
          placeholder="set title" 
          onChange={handleSetChange}
          data-input="title"
        />
      </div>
      <div className="set-input-sets">
        <input 
          type="text" 
          className="set-input-sets-input" 
          onChange={handleSetChange}
          data-input="answer1"
          autoComplete="off"
          required
        />
        <input 
          type="text" 
          className="set-input-sets-input" 
          onChange={handleSetChange}
          data-input="answer2"
          autoComplete="off"
          required
        />
        <input 
          type="text" 
          className="set-input-sets-input" 
          onChange={handleSetChange}
          data-input="answer3"
          autoComplete="off"
          required
        />
        <input 
          type="text" 
          className="set-input-sets-input" 
          onChange={handleSetChange}
          data-input="answer4"
          autoComplete="off"
          required
        />
      </div>
    </div>
  )
}