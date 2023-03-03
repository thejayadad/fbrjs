import { initializeApp } from "firebase/app";// TODO: Add SDKs for Firebase products that you want to use

import {getFirestore} from "firebase/firestore";

import {getStorage} from "firebase/storage"

import {getAuth} from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyAPXg4nOcdm9NviwAeKw3jTCZj1h4Yj-ag",
  authDomain: "ventboard1.firebaseapp.com",
  projectId: "ventboard1",
  storageBucket: "ventboard1.appspot.com",
  messagingSenderId: "917688646912",
  appId: "1:917688646912:web:21a694c4c71b3d515687e5",
  measurementId: "G-VGP1TK426C"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };