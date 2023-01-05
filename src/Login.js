import './App.css';
import React, { useState } from 'react';
import app from "./firebase";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
function Login() {
    

const auth = getAuth(app);

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

const signUp=()=>{

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   console.log(user);
   alert("success");
  })
  .catch((error) => {
    const errorCode = error.code;
    alert(errorCode)
    // ..
  });
}
const signIn=()=>{

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
   alert("This user has successfully signed in");
    
  })
  .catch((error) => {
    const errorCode = error.code;
    alert(errorCode)
  });
}


  return (
    <div className="main">
      <div className='App'>
      <input type={"email"} placeholder=" email" onChange={(e)=>setEmail(e.target.value)}/>
      <input type={"password"} placeholder=" password"  onChange={(e)=>setPassword(e.target.value)}/>

      <button onClick={signUp}>Create Account</button>
      <button onClick={signIn}>Sign in</button>
      </div>
    </div>
  );
}

export default Login;