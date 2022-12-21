// libraries
import {
  doc, getDoc, setDoc,
} from '@firebase/firestore';
import { FormikValues } from 'formik';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
// api
import { database, auth } from 'api/config';

const createUser = async (values: FormikValues) => {
  await setDoc(doc(database, 'users', values.email), values);
};

export const getUser = async (values: string) => {
  const userDoc = doc(database, 'users', values);
  const docSnap = await getDoc(userDoc);

  return docSnap.data();
};

export const signUp = async (values: FormikValues) => {
  try {
    await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password,
    );
  } catch (error) {
    alert(error);
  }
};

export const signIn = async (values: FormikValues) => {
  try {
    await signInWithEmailAndPassword(
      auth,
      values.email,
      values.password,
    );
  } catch (error) {
    alert(error);
  }
};

export const logoutUser = async () => {
  await signOut(auth);
};

export default createUser;
