// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";
import toast from "react-hot-toast";

const firebaseConfig = {
  apiKey: "AIzaSyA7SNHJzRCBd9GIbwpig2ssdeFgrDaztTA",
  authDomain: "o-erkek-ol.firebaseapp.com",
  projectId: "o-erkek-ol",
  storageBucket: "o-erkek-ol.appspot.com",
  messagingSenderId: "658920097513",
  appId: "1:658920097513:web:8c6c76cc020de56c7c5278",
};

initializeApp(firebaseConfig);
export const storage = getStorage();
export const auth = getAuth();
export const db = getFirestore();

export const LoginWithEmailAndPassword = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      toast.success("Başarılı bir şekilde giriş yaptınız.");
      return user;
    })
    .catch((error) => {
      console.log(error.message);
    });
export const handleSignOut = () => {
  signOut(auth)
    .then(() => {
      toast.success("Başarılı bir şekilde çıkış yaptınız.");
      console.log("Başarılı bir şekilde çıkış yapıldı...");
    })
    .catch((error) => {
      toast.error("Hata");
      console.log(error.message);
    });
};

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     console.log("Oturum Açık, gözlemci");
//     const dispatch = useDispatch();
//     dispatch(login(user));
//   } else {
//     const dispatch = useDispatch();
//     console.log("Oturum Kapalı, gözlemci");

//     dispatch(login());
//   }
// });
