import React from "react"

export default function SetInputCard( {currentSet, setSets} ) {

  function handleSetChange(event){
    /* setSet((prevSet) => {
      return ({...prevSet, [event.target.dataset.input]: event.target.value})
    }) */
    // console.log(event.target.name, event.target.value)
    // console.log(event.target.dataset.input)
    setSets((prevSets) => {
      return ({...prevSets, [event.target.name]: event.target.value})
      return ({...prevSets, [prevSets.set1.title]: event.target.value})
      return ({...prevSets, [prevSets.set1.title]: event.target.value})
    })
  }

  // const setTitle = `${currentSet}.title`
  const setTitle = `${currentSet}Title`
  const answer1 = `${currentSet}Answer1`
  const answer2 = `${currentSet}Answer2`
  const answer3 = `${currentSet}Answer3`
  const answer4 = `${currentSet}Answer4`

  return (
    <div className="set-input-card-container">
      <div className="set-input-title">
        <h2>Title:</h2>
        <input
          type="text"
          name={setTitle}
          placeholder="set title" 
          onChange={handleSetChange}
          data-input="title"
          value={currentSet.setTitle}
        />
      </div>
      <div className="set-input-sets">
        <input 
          type="text"
          name={answer1} 
          className="set-input-sets-input" 
          onChange={handleSetChange}
          // data-input="answer1"
          autoComplete="off"
          required
        />
        <input 
          type="text"
          name={answer2} 
          className="set-input-sets-input" 
          onChange={handleSetChange}
          // data-input="answer2"
          autoComplete="off"
          required
        />
        <input 
          type="text"
          name={answer3} 
          className="set-input-sets-input" 
          onChange={handleSetChange}
          // data-input="answer3"
          autoComplete="off"
          required
        />
        <input 
          type="text"
          name={answer4} 
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