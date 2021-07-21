import firebase from 'firebase';
const Config = {
    apiKey: "AIzaSyDeW_sfPIcsa2V3pUb1xGQwRMSW4RkLzpw",
    authDomain: "task-tracker-301ab.firebaseapp.com",
    databaseURL: "https://task-tracker-301ab-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "task-tracker-301ab",
    storageBucket: "task-tracker-301ab.appspot.com",
    messagingSenderId: "824322791324",
    appId: "1:824322791324:web:fb36d7334d9a5b61371a59",
    measurementId: "G-Z4DM59W0YL"
}
firebase.initializeApp(Config);
const db = firebase.firestore()
export{db};
