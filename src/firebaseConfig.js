import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

// ✅ Secure Firebase Configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// ✅ Initialize Firebase Services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// ✅ Function to Store User Data in Firestore
const saveUserToDatabase = async (user) => {
  if (!user) return;

  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    try {
      await setDoc(userRef, {
        name: user.displayName,
        email: user.email,
        profileImage: user.photoURL,
        createdAt: new Date(),
      });
      console.log("✅ User saved to Firestore");
    } catch (error) {
      console.error("🔥 Error saving user to Firestore:", error);
    }
  }
};

// ✅ Sign Up with Email & Password
const signUpWithEmail = async (name, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      name,
      email,
      createdAt: new Date(),
    });

    console.log("✅ User registered successfully:", user);
    return user;
  } catch (error) {
    console.error("🔥 Error signing up:", error.message);
    return null;
  }
};

// ✅ Sign In with Email & Password
const signInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("✅ Signed in user:", userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error("🔥 Error signing in:", error.message);
    throw new Error("Invalid credentials");
  }
};

// ✅ Sign In with Google
const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    await saveUserToDatabase(user);

    console.log("✅ Google Sign-In successful:", user);
    return user;
  } catch (error) {
    console.error("🔥 Google Sign-In Error:", error.message);
    throw new Error("Google Sign-In failed");
  }
};

// ✅ Export Firebase Services & Functions
export { auth, db, signInWithGoogle, signUpWithEmail, signInWithEmail };
