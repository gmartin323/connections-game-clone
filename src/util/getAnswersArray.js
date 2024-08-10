const gameObj = {
  "Difficulty": "1",
  "Title": "test game 7",
  "createdAt": 1723199453270,
  "sets": {
      "set2": {
          "answer1": {
              "set": "set2",
              "answer": "2.1"
          },
          "answer4": {
              "answer": "2.4",
              "set": "set2"
          },
          "answer3": {
              "answer": "2.3",
              "set": "set2"
          },
          "answer2": {
              "answer": "2.2",
              "set": "set2"
          },
          "setTitle": "Set 2"
      },
      "set1": {
          "answer1": {
              "answer": "1.1",
              "set": "set1"
          },
          "setTitle": "Set 1",
          "answer3": {
              "answer": "1.3",
              "set": "set1"
          },
          "answer2": {
              "set": "set1",
              "answer": "1.2"
          },
          "answer4": {
              "answer": "1.4",
              "set": "set1"
          }
      },
      "set3": {
          "answer3": {
              "answer": "3.3",
              "set": "set3"
          },
          "setTitle": "Set 3",
          "answer1": {
              "set": "set3",
              "answer": "3.1"
          },
          "answer4": {
              "set": "set3",
              "answer": "3.4"
          },
          "answer2": {
              "set": "set3",
              "answer": "3.2"
          }
      },
      "set4": {
          "answer4": {
              "set": "set4",
              "answer": "4.4"
          },
          "setTitle": "Set 4",
          "answer3": {
              "answer": "4.3",
              "set": "set4"
          },
          "answer2": {
              "set": "set4",
              "answer": "4.2"
          },
          "answer1": {
              "set": "set4",
              "answer": "4.1"
          }
      }
  },
  "Author": "g",
  "Tags": [],
  "id": "2zIyJpukAxwJFOQKZIkv"
}

export default function getAnswersArray(gameObj) {
  const setsObj = gameObj.sets

  const set1AnswersValues = Object.values(Object.fromEntries(Object.entries(setsObj.set1).filter(([key]) => key !== 'setTitle')))
  const set2AnswersValues = Object.values(Object.fromEntries(Object.entries(setsObj.set2).filter(([key]) => key !== 'setTitle')))
  const set3AnswersValues = Object.values(Object.fromEntries(Object.entries(setsObj.set3).filter(([key]) => key !== 'setTitle')))
  const set4AnswersValues = Object.values(Object.fromEntries(Object.entries(setsObj.set4).filter(([key]) => key !== 'setTitle')))

  let answersArray = [...set1AnswersValues, ...set2AnswersValues, ...set3AnswersValues, ...set4AnswersValues]
  
  return answersArray
}