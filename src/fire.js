import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAMIr9hT7zTYuBS76dD9mndOmJ-JsLTv9I",
    authDomain: "handitover-52b63.firebaseapp.com",
    databaseURL: "https://handitover-52b63-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "handitover-52b63",
    storageBucket: "handitover-52b63.appspot.com",
    messagingSenderId: "7948359141",
    appId: "1:7948359141:web:f5cf0db8e45553f1f6cb0c",
    measurementId: "G-4KVN27E0GH"
};

firebase.initializeApp(firebaseConfig)

export default firebase