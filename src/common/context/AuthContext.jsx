import React, { useContext, createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../services/firebase";
import { router } from "next/router";
export const AuthContext = createContext({
  user: {},
  SignIn: () => {},
  SignUp: () => {},
  LogOut: () => {},
  error: {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [error, setError] = useState();
  const SignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => router.push("/"), setUser(email))
      .catch((req) => setError(req.toString().split("/")[1].slice(0, -2)));
  };
  const SignUp = (email, password) => {
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        router.push("/");
      })
      .catch((req) => setError(req.toString().split("/")[1].slice(0, -2)));
  };
  const LogOut = () => {
    auth.signOut().then(() => {
      router.push("/SignIn");
      setUser(null);
    });
  };
  return (
    <AuthContext.Provider value={{ user, SignIn, SignUp, error, LogOut }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuthContext = () => {
  return useContext(AuthContext);
};
