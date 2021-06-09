import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA8PzcZBiF8Sx1wQXSxQHdRz9Jbs4bZuWM",
  authDomain: "sket-mall.firebaseapp.com",
  projectId: "sket-mall",
  storageBucket: "sket-mall.appspot.com",
  messagingSenderId: "650135736804",
  appId: "1:650135736804:web:e183d6dfd7e8a54a34f7f1",
};

//Firebase Database

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

export default db;