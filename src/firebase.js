import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyC2mc2iq45DHWOyMNkAcyuIY1uQoC2YdYg",
    authDomain: "blockchain-voting-595fc.firebaseapp.com",
    projectId: "blockchain-voting-595fc",
    storageBucket: "blockchain-voting-595fc.appspot.com",
    messagingSenderId: "300076921444",
    appId: "1:300076921444:web:159f0137a0c74b751ca571",
    measurementId: "G-P665M5H5T4"
})

export const auth = app.auth()
export default app
