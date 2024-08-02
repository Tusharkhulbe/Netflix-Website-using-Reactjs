
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyD8rpwyKV1joPaKjjz6UoRc-IUsgPtKy0Q",
  authDomain: "netflix-clone-website-b16de.firebaseapp.com",
  projectId: "netflix-clone-website-b16de",
  storageBucket: "netflix-clone-website-b16de.appspot.com",
  messagingSenderId: "934027096577",
  appId: "1:934027096577:web:db0af51984ea9c04e80600",
  measurementId: "G-B5F03DWJ4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const  auth=getAuth(app)
const db=getFirestore(app)
const signUp=async(name,email,password)=>{
    try{
   const res= await createUserWithEmailAndPassword(auth,email,password);
   const user=res.user;
   await addDoc(collection(db,"user"),{
    uid:user.uid,
    name,
    authProvider:"local",
    email,
   });
    }
    catch(error){
        console.log(error);
        toast.error(error.code)

    }
}
const login =async(email,password)=>{
    try{
        signInWithEmailAndPassword(auth,email,password)
    }
    catch(error){
     console.log(error);
     toast.error(error.code)
    }
}
const logout=()=>{
    signOut(auth);
}
export {auth,db,login,signUp,logout};