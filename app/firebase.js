  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js"
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyALJTpmZtLIgTFvJDaCKwgPh7emM42OYks",
    authDomain: "fir-senati-db266.firebaseapp.com",
    projectId: "fir-senati-db266",
    storageBucket: "fir-senati-db266.appspot.com",
    messagingSenderId: "373349992501",
    appId: "1:373349992501:web:4805e6b24a062de4eb097c"
  };
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  