import firebase, { auth, firestore } from "./firebase.core";

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signOut = () => auth.signOut();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    await userRef
      .set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
      .catch((error) => console.log(`error creating user`, error.message));
  }

  return userRef;
};
