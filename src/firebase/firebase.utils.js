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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;

}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promt: 'select_account'});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;

