import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKJ7VMvya7DG1avOD-nnuotxNj5w92ys4",
  authDomain: "netflix-clone-9dc6b.firebaseapp.com",
  projectId: "netflix-clone-9dc6b",
  storageBucket: "netflix-clone-9dc6b.appspot.com",
  messagingSenderId: "433281255052",
  appId: "1:433281255052:web:aef585f38562e932011da9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;
