const arr = [
    {
        "set": "set1",
        "answer": "1.1"
    },
    {
        "set": "set1",
        "answer": "1.2"
    },
    {
        "set": "set1",
        "answer": "1.4"
    },
    {
        "set": "set1",
        "answer": "1.3"
    },
    {
        "answer": "2.3",
        "set": "set2"
    },
    {
        "answer": "2.1",
        "set": "set2"
    },
    {
        "answer": "2.2",
        "set": "set2"
    },
    {
        "set": "set2",
        "answer": "2.4"
    },
    {
        "answer": "3.1",
        "set": "set3"
    },
    {
        "set": "set3",
        "answer": "3.4"
    },
    {
        "set": "set3",
        "answer": "3.2"
    },
    {
        "answer": "3.3",
        "set": "set3"
    },
    {
        "answer": "4.4",
        "set": "set4"
    },
    {
        "set": "set4",
        "answer": "4.3"
    },
    {
        "set": "set4",
        "answer": "4.2"
    },
    {
        "answer": "4.1",
        "set": "set4"
    }
]

export default function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }
  return arr
}