import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAuth } from "firebase/auth";
// import { getFunctions } from "firebase/functions";

const firebaseConfig = {
    apiKey: "AIzaSyD3xReHQjoRENBjKpx8LVSN5-bbfXO20sE",
    authDomain: "dropbox-clone-2ead8.firebaseapp.com",
    projectId: "dropbox-clone-2ead8",
    storageBucket: "dropbox-clone-2ead8.appspot.com",
    messagingSenderId: "652287700971",
    appId: "1:652287700971:web:940dd3d4766e4c7e4573ae",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
// const auth = getAuth(app);
// const functions = getFunctions(app);

export { db, storage };
