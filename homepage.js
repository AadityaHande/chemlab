import { auth, db } from './firebase-config.js';
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

window.addEventListener("DOMContentLoaded", () => {
    const nameEl = document.querySelector('.user-name');
    const emailEl = document.querySelector('.user-email');

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            const userRef = doc(db, "users", user.uid);
            const userSnap = await getDoc(userRef);

            if (userSnap.exists()) {
                const { name, role } = userSnap.data();
                nameEl.textContent = name;
                emailEl.textContent = role;
            } else {
                nameEl.textContent = "Unknown";
                emailEl.textContent = "Role not found";
            }
        } else {
            nameEl.textContent = "Guest";
            emailEl.textContent = "-";
        }
    });
});
