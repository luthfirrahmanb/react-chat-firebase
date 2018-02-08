import * as firebase from 'firebase';


const config = {
    apiKey: "YourApiKey",
    authDomain: "YourAuthDomain",
    databaseURL: "YourDatabaseURL",
    projectId: "YourProjectId",
    storageBucket: "YourStorageBucketId",
    messagingSenderId: "YourMessagingSenderId"
}

export const firebaseApp = firebase.initializeApp(config);
export const roomRef = firebase.database().ref('rooms');