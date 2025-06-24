// login.js
import { auth, db } from "./firebase-config.js";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  setPersistence,
  browserSessionPersistence,
  browserLocalPersistence
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import {
  doc,
  setDoc,
  getDoc,
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


// 🔁 Toggle Login <-> Register
window.toggleBox = function () {
  const loginBox = document.getElementById("login-box");
  const registerBox = document.getElementById("register-box");

  loginBox.classList.toggle("active");
  registerBox.classList.toggle("active");
};


// 👁 Toggle Password Visibility
window.togglePassword = function (inputId, eyeIcon) {
  const field = document.getElementById(inputId);
  if (field.type === "password") {
    field.type = "text";
    eyeIcon.textContent = "🙈";
  } else {
    field.type = "password";
    eyeIcon.textContent = "👁";
  }
};


// 🔐 Email/Password Login
window.login = async function () {
  const emailOrUsername = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value;
  const rememberMe = document.getElementById("rememberMe").checked;

  const persistence = rememberMe ? browserLocalPersistence : browserSessionPersistence;
  await setPersistence(auth, persistence);

  try {
    let email = emailOrUsername;

    // Check if user entered a username instead of email
    if (!email.includes("@")) {
      const usersSnapshot = await findUserByUsername(emailOrUsername);
      if (!usersSnapshot) throw new Error("Username not found.");
      email = usersSnapshot;
    }

    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "homepage.html";
  } catch (err) {
    alert("Login Error: " + err.message);
  }
};


// 📝 Register New User
window.register = async function () {
  const username = document.getElementById("register-username").value.trim();
  const email = document.getElementById("register-email").value.trim();
  const password = document.getElementById("register-password").value;

  if (username.includes("@")) {
    alert("Username cannot contain '@'");
    return;
  }

  try {
    const userExists = await usernameTaken(username);
    if (userExists) {
      alert("Username already taken.");
      return;
    }

    const cred = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", cred.user.uid), {
      username,
      email,
      role: "guest"
    });

    window.location.href = "homepage.html";
  } catch (err) {
    alert("Registration Error: " + err.message);
  }
};


// 🔁 Forgot Password via Prompt
window.resetPassword = async function () {
  const email = prompt("Enter your email to receive a reset link:");
  if (!email) return;

  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset email sent.");
  } catch (err) {
    alert("Reset Error: " + err.message);
  }
};


// 🔐 Google Login
window.googleLogin = async function () {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
  await setDoc(doc(db, "users", user.uid), {
    email: user.email,
    role: "guest"
  });
} else {
  const existingData = userSnap.data();
  const role = existingData.role;

  if (role === "teacher" || !role) {
    await setDoc(doc(db, "users", user.uid), {
      ...existingData,
      role: "guest"
    }, { merge: true });
  }
    }

    window.location.href = "homepage.html";
  } catch (err) {
    alert("Google Sign-In Error: " + err.message);
  }
};


// 🔎 Utility: Check if username is taken
async function usernameTaken(username) {
  const users = await fetchUserCollection();
  return Object.values(users).some(user => user.username?.toLowerCase() === username.toLowerCase());
}

// 🔎 Utility: Get email from username
async function findUserByUsername(username) {
  const users = await fetchUserCollection();
  for (let uid in users) {
    if (users[uid].username?.toLowerCase() === username.toLowerCase()) {
      return users[uid].email;
    }
  }
  return null;
}

// 📦 Firestore Utility 
async function fetchUserCollection() {
  const userMap = {};

  try {
    const userDocs = await getDocs(collection(db, "users"));
    userDocs.forEach(docSnap => {
      userMap[docSnap.id] = docSnap.data();
    });
  } catch (err) {
    console.error("Failed to fetch users:", err);
    alert("Error fetching user list.");
  }

  return userMap;
}
