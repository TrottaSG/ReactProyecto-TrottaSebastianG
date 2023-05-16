
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBer1w95gRyEgo4-2t0mdzLqNDEn3Guzak",
    authDomain: "react-sebastiangtrotta.firebaseapp.com",
    projectId: "react-sebastiangtrotta",
    storageBucket: "react-sebastiangtrotta.appspot.com",
    messagingSenderId: "987577394195",
    appId: "1:987577394195:web:1b0550eee2fd5359648be6"
};

const app = initializeApp(firebaseConfig)

export const initFirebase = () => app




