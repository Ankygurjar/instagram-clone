import firebase from 'firebase'

//const githubSecretKey = 'fed39158970a1399fda20fa88692fe36811e9701';

const firebaseConfig = {
    apiKey: "AIzaSyD5DS6_2cWkMOgmgGqf32EW3-l3860yy7I",
    authDomain: "instagram-b7d1c.firebaseapp.com",
    projectId: "instagram-b7d1c",
    storageBucket: "instagram-b7d1c.appspot.com",
    messagingSenderId: "755201926336",
    appId: "1:755201926336:web:fb07d08074f7d9c702b925",
    measurementId: "G-NYGLYKBXE4"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

const facebookProvider = new firebase.auth.FacebookAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const gitHubProvider = new firebase.auth.GithubAuthProvider();
const storage = firebase.storage();

export { auth, googleProvider, db, facebookProvider, gitHubProvider, storage, firebase};
