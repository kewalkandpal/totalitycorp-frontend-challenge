import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyADo3K2esx5jaMxNvvBZkHGHh6s4KdpcuI",
  authDomain: "e-commerce-3abe7.firebaseapp.com",
  projectId: "e-commerce-3abe7",
  storageBucket: "e-commerce-3abe7.appspot.com",
  messagingSenderId: "886166749387",
  appId: "1:886166749387:web:f4e392232728b4cbc65b4e"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);