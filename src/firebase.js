import firebase from 'firebase/app';
import 'firebase/firestore';
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCfLEpdsdN8S05hVY0YfmXy1UL80mUrsVs",
    authDomain: "todoist-forme.firebaseapp.com",
    databaseURL: "https://todoist-forme.firebaseio.com",
    projectId: "todoist-forme",
    storageBucket: "todoist-forme.appspot.com",
    messagingSenderId: "781260835011",
    appId: "1:781260835011:web:7b2f2260aa7f1c0d983a76",
    measurementId: "G-8N5N3NY675"
})

export {firebaseConfig as firebase}; 