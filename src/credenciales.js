import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDwlWldSyTNvP9kLy9NYuRjgV7HM1PWluk",
  authDomain: "prueba2-1726d.firebaseapp.com",
  projectId: "prueba2-1726d",
  storageBucket: "prueba2-1726d.appspot.com",
  messagingSenderId: "848132370975",
  appId: "1:848132370975:web:b4349bbd250f7730331b2a",
};

// Iniciar Firebase
const appFirebase= initializeApp(firebaseConfig);
export default appFirebase; 