import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBsqKOFw_lX0XNYnK-bfBZWkIINWaGE63s",
    authDomain: "linkedin-clone-2e6cd.firebaseapp.com",
    projectId: "linkedin-clone-2e6cd",
    storageBucket: "linkedin-clone-2e6cd.appspot.com",
    messagingSenderId: "705172668731",
    appId: "1:705172668731:web:f28a30ad1f7e96076ff71e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth} ;