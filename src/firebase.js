import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBZVJu9Nz0RhFzQID8Z8RmPoPzQz3f-vKc",
    authDomain: "sloppy-beee6.firebaseapp.com",
    databaseURL: "https://sloppy-beee6.firebaseio.com",
    projectId: "sloppy-beee6",
    storageBucket: "sloppy-beee6.appspot.com",
    messagingSenderId: "792510141748",
    appId: "1:792510141748:web:550db02baff62c9ddd8161",
    measurementId: "G-817GJM329M"
});

const db = firebaseApp.firestore();
export default db;