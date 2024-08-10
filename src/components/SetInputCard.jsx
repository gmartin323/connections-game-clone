import React from "react"

export default function SetInputCard( {currentSetName, setSet} ) {

  const [setTitle, setSetTitle] = React.useState("")

  const dummySetDataStructure = [
    {'set1': {
      'answer1': 'Set1Title', 
      'answer2': 'Set1Title', 
      'answer3': 'Set1Title', 
      'answer4': 'Set1Title', 
    }},
    {'set2': {
      'answer1': 'Set2Title', 
      'answer2': 'Set2Title', 
      'answer3': 'Set2Title', 
      'answer4': 'Set2Title', 
    }},
    {'set3': {
      'answer1': 'Set3Title', 
      'answer2': 'Set3Title', 
      'answer3': 'Set3Title', 
      'answer4': 'Set3Title', 
    }},
    {'set4': {
      'answer1': 'Set4Title', 
      'answer2': 'Set4Title', 
      'answer3': 'Set4Title', 
      'answer4': 'Set4Title', 
    }}
  ]

  function handleSetChange(event){
    setSet((prevSet) => {
      return ({
        ...prevSet, 
        [event.target.name]: 
          {answer: event.target.value, set: currentSetName}
        })
    })
  }

  function handleTitleChange(event) {
    setSet((prevSet) => {
      return ({
        ...prevSet,
        setTitle: event.target.value
      })
    })
  }


  return (
    <div className="set-input-card-container">
      <div className="set-input-title">
        <h2>Title:</h2>
        <input
          type="text"
          name="setTitle"
          placeholder="set title" 
          onChange={handleTitleChange}
          data-input="title"
          // value={currentSetName.setTitle}
        />
      </div>
      <div className="set-input-sets">
        <input 
          type="text"
          name="answer1" 
          className="set-input-sets-input" 
          onChange={handleSetChange}
          // data-input="answer1"
          autoComplete="off"
          required
        />
        <input 
          type="text"
          name="answer2"
          className="set-input-sets-input" 
          onChange={handleSetChange}
          // data-input="answer2"
          autoComplete="off"
          required
        />
        <input 
          type="text"
          name="answer3"
          className="set-input-sets-input" 
          onChange={handleSetChange}
          // data-input="answer3"
          autoComplete="off"
          required
        />
        <input 
          type="text"
          name="answer4" 
          className="set-input-sets-input" 
          onChange={handleSetChange}
          // data-input="answer4"
          autoComplete="off"
          required
        />
      </div>
    </div>
  )
}