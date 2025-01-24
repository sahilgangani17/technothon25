import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBncclJvMPg2JWZ6Xx_og8KWvGCki970V8",
    authDomain: "carbonari-1d14b.firebaseapp.com",
    projectId: "carbonari-1d14b",
    storageBucket: "carbonari-1d14b.firebasestorage.app",
    messagingSenderId: "988846234895",
    appId: "1:988846234895:web:5ad714634aabcd1bdb327a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

function Showmsg(message, divID) {
    const messagediv = document.getElementById(divID);
    messagediv.style.display = "block";
    messagediv.innerHTML = message;
    messagediv.style.opacity = 1;

    setTimeout(() => {
        messagediv.style.opacity = "0";
        setTimeout(() => (messagediv.style.display = "none"), 500); 
    }, 5000);
}

const Signup = document.getElementById('SubmitSignUp');

Signup.addEventListener('click', (event) => {
    event.preventDefault();

    const username = document.getElementById('Username').value;
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('Password1').value;
    const confirmPassword = document.getElementById('Password2').value;

    if (password !== confirmPassword) {
        Showmsg("Passwords do not match.", "signupmsg");
        return; // Prevent further action if passwords don't match
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        Showmsg("Please enter a valid email address.", "signupmsg");
        return;
    }

    // Validate password length
    if (password.length <= 6) {
        Showmsg("Password must be at least 6 characters long.", "signupmsg");
        return;
    }

    createUserWithEmailAndPassword(auth,  email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const userdata = { username, email, password };

          //Showmsg("Account created successfully!", "signupmsg");
            alert("Account created successfully!");     
            const docref = doc(db, "user", user.uid);
            return setDoc(docref, userdata);
        })
        .then(() => {
            window.location.href = "login.html";
        })
        .catch((error) => {
            console.error("Error writing to Firestore:", error);
            if (error.code === "auth/email-already-in-use") {
                Showmsg("Email already in use.", "signupmsg");
            } else if (error.code === "auth/invalid-email") {
                Showmsg("Invalid email address.", "signupmsg");
            } else if (error.code === "auth/weak-password") {
                Showmsg("Password is too weak.", "signupmsg");
            } else {
                Showmsg(`Signup failed: ${error.message}`, "signupmsg");
            }
            // Showmsg("Error saving user data.", "signupmsg");
        })
        .catch((error) => {
            console.error("Firebase Signup Error:", error.code, error.message);
        });
});



// const signin = document.getElementById('Submit');
// signin.addEventListener('click', (event)=>{
//     event.preventDefault();
//     const email = document.getElementById('Username').value;
//     const password = document.getElementById('Password').value;
//     const auth = getAuth();

//     signInWithEmailAndPassword(auth, email,  password)
//     .then((userCredential)=>{
//         Showmsg('Login Successful', 'signupmsg');
//         const user = userCredential.user;
//         localStorage.setItem('LoggedUserID', user.uid);
//         window.location.href = 'game.html';

//     })
//     .catch((error)=>{
//         const errorcode = error.code;
//         if(errorcode === 'auth/invalid-credential'){
//             Showmsg('Incorrect Email or Password', 'signupmsg');
//         }
//         else{
//             Showmsg("Account Does Not Exist", "signupmsg");
//         }
//     })
// })