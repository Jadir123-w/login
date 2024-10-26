import { GithubAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js"
import { auth } from './firebase.js'

const GithubButton = document.querySelector('#githubbtn')

GithubButton.addEventListener('click', async() => {
    const provider = new GithubAuthProvider()
    try {
      const credentials = await signInWithPopup(auth, provider)
      console.log(credentials)

      

    } catch (error) {
        console.log(error)
    }
})