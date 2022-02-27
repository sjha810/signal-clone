import { initializeApp } from 'firebase/app';;
import { getAuth } from 'firebase/auth';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyBIAFvLkOybYQ9h-dKdDnTP8F48StEdZLI",
    authDomain: "signal-clone-f46ce.firebaseapp.com",
    projectId: "signal-clone-f46ce",
    storageBucket: "signal-clone-f46ce.appspot.com",
    messagingSenderId: "751924875634",
    appId: "1:751924875634:web:139a126ebb34fe81cb8deb"
  };

 const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);
  const auth = getAuth()

  export {db, auth};