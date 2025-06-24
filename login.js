import { auth, db } from './firebase-config.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  setPersistence,
  browserSessionPersistence,
  browserLocalPersistence
} from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js';

import {
  doc,
  setDoc,
  getDoc
} from 'https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js';

// === DOM ELEMENTS ===
const toggleLoginBtn = document.getElementById('toggle-login');
const toggleRegisterBtn = document.getElementById('toggle-register');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const rememberCheckbox = document.getElementById('remember-me');
const forgotPasswordLink = document.getElementById('forgot-password-link');

const googleLoginBtn = document.getElementById('google-login');
const googleRegisterBtn = document.getElementById('google-register');

const passwordToggles = document.querySelectorAll('.toggle-password');

// === FORM TOGGLE ===
toggleLoginBtn.addEventListener('click', () => {
  toggleLoginBtn.classList.add('active');
  toggleRegisterBtn.classList.remove('active');
  loginForm.classList.remove('hidden');
  registerForm.classList.add('hidden');
});

toggleRegisterBtn.addEventListener('click', () => {
  toggleRegisterBtn.classList.add('active');
  toggleLoginBtn.classList.remove('active');
  registerForm.classList.remove('hidden');
  loginForm.classList.add('hidden');
});

// === PASSWORD VISIBILITY TOGGLE ===
passwordToggles.forEach(icon => {
  icon.addEventListener('click', () => {
    const inputId = icon.dataset.target;
    const input = document.getElementById(inputId);
    if (input.type === 'password') {
      input.type = 'text';
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
    } else {
      input.type = 'password';
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
    }
  });
});

// === LOGIN FORM SUBMIT ===
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const persistence = rememberCheckbox.checked ? browserLocalPersistence : browserSessionPersistence;

  try {
    await setPersistence(auth, persistence);
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = 'homepage.html';
  } catch (error) {
    alert('Login Failed: ' + error.message);
  }
});

// === REGISTER FORM SUBMIT ===
registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  try {
    const userCred = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCred.user;

    // Save user role as 'guest' in Firestore
    const userRef = doc(db, 'users', user.uid);
    await setDoc(userRef, {
      email: user.email,
      role: 'guest'
    });

    window.location.href = 'homepage.html';
  } catch (error) {
    alert('Registration Failed: ' + error.message);
  }
});

// === FORGOT PASSWORD ===
forgotPasswordLink.addEventListener('click', async (e) => {
  e.preventDefault();
  const email = prompt('Enter your email to reset password:');
  if (!email) return;

  try {
    await sendPasswordResetEmail(auth, email);
    alert('Password reset email sent.');
  } catch (error) {
    alert('Failed to send reset email: ' + error.message);
  }
});

// === GOOGLE LOGIN / REGISTER ===
async function handleGoogleSignIn() {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);

    // Add user if doesn't exist
    if (!userSnap.exists()) {
      await setDoc(userRef, {
        email: user.email,
        role: 'guest'
      });
    }

    window.location.href = 'homepage.html';
  } catch (error) {
    alert('Google Sign-In Failed: ' + error.message);
  }
}

googleLoginBtn.addEventListener('click', handleGoogleSignIn);
googleRegisterBtn.addEventListener('click', handleGoogleSignIn);
