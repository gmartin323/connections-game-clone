import React from "react"

export default function SetInputCard( {set, setSet} ) {

  function handleSetChange(event) {
    
    console.log(event.target.value)
  }

  return (
    <div className="set-input-card-container">
      <div className="set-input-title">
        <h2>Title:</h2>
        <input type="text" onChange={handleSetChange} />
      </div>
      <div className="set-input-sets">
        <input className="set-input-sets-input" type="text" onChange={handleSetChange} />
        <input className="set-input-sets-input" type="text" onChange={handleSetChange} />
        <input className="set-input-sets-input" type="text" onChange={handleSetChange} />
        <input className="set-input-sets-input" type="text" onChange={handleSetChange} />
      </div>
    </div>
  )
}