import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCLl6gsZtk8pKXup_AftW2GGUefN1ILNg0",
  authDomain: "cart-app-a7aec.firebaseapp.com",
  projectId: "cart-app-a7aec",
  storageBucket: "cart-app-a7aec.appspot.com",
  messagingSenderId: "681194905122",
  appId: "1:681194905122:web:0c46f9c9ef34fadc88747b"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

