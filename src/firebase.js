// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVVnrDed07VghG7JYruFKaRofCgshSBnk",
  authDomain: "uploadingfile-ffd1e.firebaseapp.com",
  projectId: "uploadingfile-ffd1e",
  storageBucket: "uploadingfile-ffd1e.appspot.com",
  messagingSenderId: "61570077480",
  appId: "1:61570077480:web:4609b1cf1f1768408cb61d",
};
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
