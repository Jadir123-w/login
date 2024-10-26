import { GoogleAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js"
import { auth } from './firebase.js'

const googleButton = document.querySelector('#googlebtn')

googleButton.addEventListener('click', async() => {
    const provider = new GoogleAuthProvider()


    try {
      const credentials = await signInWithPopup(auth, provider)
      console.log(credentials)

      

    } catch (error) {
        console.log(error)
    }
})