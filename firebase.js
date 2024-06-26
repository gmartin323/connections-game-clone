import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, getDoc, addDoc } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyC9qkf6ZWNj_4ioAtzdVmiZ_eIWJsnufMY",
  authDomain: "connections-game-52b4b.firebaseapp.com",
  projectId: "connections-game-52b4b",
  storageBucket: "connections-game-52b4b.appspot.com",
  messagingSenderId: "424852250986",
  appId: "1:424852250986:web:527ad02663ffe5784d4513",
  measurementId: "G-NXLJM9XYH1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)

export const gamesCollectionRef = collection(db, "games")

// for use on home screen/play sceen
export async function getGames() {
  const snapshot = await getDocs(gamesCollectionRef)
  const games = snapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return games
}


