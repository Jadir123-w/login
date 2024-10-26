import { FacebookAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js"
import { auth } from './firebase.js'

const facebookButton = document.querySelector('#facebookbtn')

facebookButton.addEventListener('click', async() => {
    const provider = new FacebookAuthProvider()
    try {
      const credentials = await signInWithPopup(auth, provider)
      console.log(credentials)

      

    } catch (error) {
        console.log(error)
    }
})