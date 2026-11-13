
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCCr3MDdRXm9GP0uDZDmQB__N0cBWuHlEI",
    authDomain: "loja-cupcakes.firebaseapp.com",
    projectId: "loja-cupcakes",
    storageBucket: "loja-cupcakes.firebasestorage.app",
    messagingSenderId: "336346999711",
    appId: "1:336346999711:web:d73198b0d0e9165bc1ebaa"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
