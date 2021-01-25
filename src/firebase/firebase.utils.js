import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDJZ3Yu_KtIAJwMPsoF5fl4-3MXfal52lY",
    authDomain: "shop-items-warehouse.firebaseapp.com",
    projectId: "shop-items-warehouse",
    storageBucket: "shop-items-warehouse.appspot.com",
    messagingSenderId: "301633276871",
    appId: "1:301633276871:web:c2dff2c975e9024ceee7e2",
    measurementId: "G-LML5JRG9EG"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;


