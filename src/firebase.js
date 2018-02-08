import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyB27sTAlar6ISEOcid4RHf_mf3N9sJNk0k",
    authDomain: "anochat-2be0c.firebaseapp.com",
    databaseURL: "https://anochat-2be0c.firebaseio.com",
    projectId: "anochat-2be0c",
    storageBucket: "anochat-2be0c.appspot.com",
    messagingSenderId: "216727983013"
}

export const firebaseApp = firebase.initializeApp(config);
export const roomRef = firebase.database().ref('rooms');