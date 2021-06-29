import firebase from "firebase";
import "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD4G12xippUEltvanQzOyRP22WJPjg-GeM",
  authDomain: "facebook-clone-b4018.firebaseapp.com",
  projectId: "facebook-clone-b4018",
  storageBucket: "facebook-clone-b4018.appspot.com",
  messagingSenderId: "1017211993909",
  appId: "1:1017211993909:web:74807f4b8ddfb16a86967c",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
