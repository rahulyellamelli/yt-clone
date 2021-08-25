import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXemcSNHMdjgWLMfekjYzkjFsw2hKvaX8",
  authDomain: "yt-clone-31157.firebaseapp.com",
  projectId: "yt-clone-31157",
  storageBucket: "yt-clone-31157.appspot.com",
  messagingSenderId: "407137373152",
  appId: "1:407137373152:web:b758fa9d352dbde2277985",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
