import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxw3W0-F5tMsB8BKQ9iBNPsGu83bI-OyQ",
  authDomain: "push-app-31dc6.firebaseapp.com",
  databaseURL: "https://push-app-31dc6-default-rtdb.firebaseio.com",
  projectId: "push-app-31dc6",
  storageBucket: "push-app-31dc6.appspot.com",
  messagingSenderId: "21880923749",
  appId: "1:21880923749:web:fdd7bb48398aafbc42088c",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
