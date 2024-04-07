import React from "react"

export default function SetInputCard() {
  return (
    <div className="set-input-card-container">
      <div className="set-input-title">
        <h2>Title:</h2>
        <input type="text" />
      </div>
      <div className="set-input-sets">
        <h2>Sets:</h2>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </div>
    </div>
  )
}