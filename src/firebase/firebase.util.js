import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyC_kuL5jIfadV8Ut8BBfPse-kHSByL_rYY",
  authDomain: "crwn-db-41b05.firebaseapp.com",
  databaseURL: "https://crwn-db-41b05.firebaseio.com",
  projectId: "crwn-db-41b05",
  storageBucket: "crwn-db-41b05.appspot.com",
  messagingSenderId: "49607781712",
  appId: "1:49607781712:web:f614b0e940bc421202d055",
  measurementId: "G-X3JQHT1G7E"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log(`Error creating user ${error.message}`);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
