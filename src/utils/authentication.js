import { async } from "@firebase/util";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword ,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import {auth} from './firebase-config';
import {getAuth} from 'firebase/auth';

async function signIn(email,password){
console.log("signing in",auth)
  try{

  await createUserWithEmailAndPassword(auth,email,password).then(userCredential=>userCredential.user);

  }
  catch(error){
    return `${error.code},${error.message}`
  }
}
async function logIn(email,password){
  try {
 await signInWithEmailAndPassword(auth,email, password).then(userCredential=>userCredential.user);

  } catch (error) {
    return `${error.code},${error.message}`;
  }
}

async function signInWithGmail(){
  //create an instance of google authprovider
const provider= new GoogleAuthProvider();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
export {logIn,signIn,signInWithGmail}