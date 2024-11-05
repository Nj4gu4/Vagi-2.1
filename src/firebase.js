import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD_x5-xMP_e-Z5oGEDT_vHqWeRCXx8Yvoo",
  authDomain: "vagi-fashion.firebaseapp.com",
  projectId: "vagi-fashion",
  storageBucket: "vagi-fashion.appspot.com",
  messagingSenderId: "447799371024",
  appId: "1:447799371024:web:8f8f8f8f8f8f8f8f8f8f8f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;