import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const loginRequest = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password);
};
