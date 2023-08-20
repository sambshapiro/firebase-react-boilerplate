import { initializeApp } from "firebase/app";
// https://firebase.google.com/docs/functions/local-emulator#instrument-functions
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

// https://firebase.google.com/docs/emulator-suite/connect_firestore#android_apple_platforms_and_web_sdks
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";

const firebase = initializeApp({
  projectId: "",
  appId: "",
  storageBucket: "",
  apiKey: "",
  authDomain: "",
  messagingSenderId: "",
});
const functions = getFunctions(firebase);
const firestore = getFirestore(firebase);

if (window.location.hostname === "localhost") {
  console.log(
    "testing locally -- hitting local functions and firestore emulators"
  );
  connectFunctionsEmulator(functions, "127.0.0.1", 5001);
  connectFirestoreEmulator(firestore, "127.0.0.1", 8080);
}

export { functions, firestore };
