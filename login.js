// login.js
import { auth, db } from './firebase-config.js';

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence
} from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js';

import {
  doc,
  setDoc,
  getDoc
} from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js';

// FORM REFERENCES
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const toggleLinks = document.querySelectorAll('.toggle-link');
const rememberMeLogin = document.getElementById('rememberLogin');
const rememberMeRegister = document.getElementById('rememberRegister');

// 1️⃣ TOGGLE BETWEEN LOGIN AND REGISTER
toggleLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('active');
  });
});

// 2️⃣ PASSWORD VISIBILITY TOGGLE
document.querySelectorAll('.toggle-password').forEach(icon => {
  icon.addEventListener('click', () => {
    const input = icon.previousElementSibling;
    if (input.type === 'password') {
      input.type = 'text';
      icon.textContent = '🙈';
    } else {
      input.type = 'password';
      icon.textContent = '👁️';
    }
  });
});

// 3️⃣ LOGIN WITH EMAIL/PASSWORD
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = loginForm.email.value;
  const password = loginForm.password.value;
  const persistence = rememberMeLogin.checked ? browserLocalPersistence : browserSessionPersistence;

  try {
    await setPersistence(auth, persistence);
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = 'homepage.html';
  } catch (error) {
    alert("Login Error: " + error.message);
  }
});

// 4️⃣ REGISTER NEW USER
registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = registerForm.email.value;
  const password = registerForm.password.value;
  const persistence = rememberMeRegister.checked ? browserLocalPersistence : browserSessionPersistence;

  try {
    await setPersistence(auth, persistence);
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    
    // Save to Firestore with role
    await setDoc(doc(db, "users", userCred.user.uid), {
      email: email,
      role: "guest"
    });

    window.location.href = 'homepage.html';
  } catch (error) {
    alert("Registration Error: " + error.message);
  }
});

// 5️⃣ GOOGLE SIGN-IN FOR BOTH LOGIN/REGISTER
document.querySelectorAll('.google-btn').forEach(button => {
  button.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      // Only add new Google user if not already present
      if (!userSnap.exists()) {
        await setDoc(userRef, {
          email: user.email
        });
      }

      window.location.href = 'homepage.html';
    } catch (error) {
      alert("Google Sign-in Error: " + error.message);
    }
  });
});

// 6️⃣ FORGOT PASSWORD LINK
document.getElementById('forgotPassword').addEventListener('click', async () => {
  const email = prompt("Enter your email to receive a password reset link:");

  if (email) {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent!");
    } catch (error) {
      alert("Error: " + error.message);
    }
  }
});
