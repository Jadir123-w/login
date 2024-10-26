import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { auth } from './firebase.js'

document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.querySelector('#register-form');

    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = signupForm['regis-email'] ? signupForm['regis-email'].value : '';
        const password = signupForm['regis-password'] ? signupForm['regis-password'].value : '';

        console.log("Email:", email);
        console.log("Contraseña:", password);

        try {
            const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
            console.log("Usuario creado:", userCredentials);
            // Aquí puedes agregar más lógica, como redirigir al usuario a otra página
        } catch (error) {
            console.log("Error al crear el usuario:", error);
        }
    });
});