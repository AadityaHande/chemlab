import { auth, db } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import {
  doc,
  setDoc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// Registration
document.getElementById("registerBtn").addEventListener("click", async () => {
  const username = document.getElementById("regUsername").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      name: username,
      email: user.email,
      role: "teacher"
    });

    window.location.href = "./homepage.html";
  } catch (error) {
    alert("Registration Failed: " + error.message);
  }
});

// Login
document.getElementById("loginBtn").addEventListener("click", async () => {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);
    if (!userSnap.exists()) {
      await setDoc(userRef, { role: "teacher" });
    }

    window.location.href = "./homepage.html";
  } catch (error) {
    alert("Login Failed: " + error.message);
  }
});

// Google Login/Register
const provider = new GoogleAuthProvider();

async function handleGoogleAuth(isRegister = false) {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, {
      name: user.displayName,
      email: user.email,
      role: "teacher"
    }, { merge: true });

    window.location.href = "./homepage.html";
  } catch (error) {
    alert((isRegister ? "Google Registration" : "Google Login") + " Failed: " + error.message);
  }
}

document.getElementById("googleLoginBtn").addEventListener("click", () => handleGoogleAuth(false));
document.getElementById("googleRegisterBtn").addEventListener("click", () => handleGoogleAuth(true));

// Toggle Forms
document.getElementById("register-link").addEventListener("click", () => {
  document.querySelector(".register-container").classList.add("active");
  document.querySelector(".login-container").classList.remove("active");
});

document.getElementById("login-link").addEventListener("click", () => {
  document.querySelector(".register-container").classList.remove("active");
  document.querySelector(".login-container").classList.add("active");
});

// Password visibility toggle
document.getElementById("togglePassword").addEventListener("click", () => {
  const pass = document.getElementById("loginPassword");
  pass.type = pass.type === "password" ? "text" : "password";
});

// Enter key navigation (Login)
document.getElementById("loginEmail").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("loginPassword").focus();
  }
});

document.getElementById("loginPassword").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("loginBtn").click();
  }
});

// Enter key navigation (Register)
document.getElementById("regUsername").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("regEmail").focus();
  }
});

document.getElementById("regEmail").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("regPassword").focus();
  }
});

document.getElementById("regPassword").addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    document.getElementById("registerBtn").click();
  }
});
