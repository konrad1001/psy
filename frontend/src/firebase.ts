import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCfIrODg6_Cpn6GtgxQePZrK_ASF2dPLtU",
  authDomain: "psychotherapy-ealing.firebaseapp.com",
  projectId: "psychotherapy-ealing",
  storageBucket: "psychotherapy-ealing.firebasestorage.app",
  messagingSenderId: "871681889122",
  appId: "1:871681889122:web:cfcedd7a7e61d34850523b",
  measurementId: "G-QFPH52L1RX",
};

const app = initializeApp(firebaseConfig);

export const analytics = getAnalytics(app);
