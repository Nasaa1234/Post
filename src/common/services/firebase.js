import * as firebase from "firebase/app";
import "firebase/analytics";
import { getStorage } from "firebase/storage";
import { useEffect, useState } from "react";
import { docData, collectionData } from "rxfire/firestore";
import { user as UserObserver } from "rxfire/auth";
import {
  getFirestore,
  doc,
  deleteDoc,
  collection,
  serverTimestamp,
  getDoc,
  setDoc,
  addDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { filter, tap } from "rxjs";
import { identity } from "lodash";

const firebaseConfig = {
  apiKey: "AIzaSyAYLX0IxxJUz80lWmZhttGrUZFIrxuQ6Y0",
  authDomain: "hackateen-ecec3.firebaseapp.com",
  projectId: "hackateen-ecec3",
  storageBucket: "hackateen-ecec3.appspot.com",
  messagingSenderId: "80262419033",
  appId: "1:80262419033:web:f015634b47733966b11748",
  measurementId: "G-7G9HGG3SYT",
};

export const app =
  firebase.getApps().length > 0
    ? firebase.getApp()
    : firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);

export const useCollection = (path) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!firestore) {
      return;
    }
    const subscription = collectionData(collection(firestore, path), {
      idField: "uid",
    }).subscribe((documents) => {
      setData(documents);
      setLoading(false);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [path]);
  return { data, loading };
};

export const useDocument = (path) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!firestore || !auth) {
      return;
    }
    const subscription = docData(doc(firestore, path), {
      idField: "uid",
    }).subscribe((documentData) => {
      setData(documentData);
      setLoading(false);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [path]);
  return { data, loading };
};

export const useUser = () => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!auth) {
      return;
    }
    const subscription = UserObserver(auth)
      .pipe(
        filter(identity),
        tap(() => setLoading(false))
      )
      .subscribe((userData) => setUser(userData));
    return () => {
      subscription.unsubscribe();
    };
  }, [auth]);

  return { user, loading };
};

const USER_HOME = "user";

export const useDocumentWithUser = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const { user } = useUser();
  useEffect(() => {
    if (!firestore || !auth || !user) {
      return;
    }
    const subscription = docData(doc(firestore, `${USER_HOME}/${user?.uid}`), {
      idField: "uid",
    }).subscribe((documentData) => {
      documentData && setUserData(documentData);
      setLoading(false);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, [user]);

  return { userData, loading };
};

export const useDocumentWithUserOnce = () => {
  const [userData, setUserData] = useState();
  const { user } = useUser();
  useEffect(() => {
    if (!firestore || !auth || !user || userData) {
      return;
    }
    getDoc(doc(firestore, `${USER_HOME}/${user?.uid}`))
      .then((documentSnap) => {
        setUserData({ ...documentSnap.data(), uid: user.uid });
      })
      .catch((error) => console.log(error));
  }, []);
  return [userData, auth, user];
};

export const addDocument = (path, data) => {
  const documentReference = collection(firestore, path);
  return addDoc(documentReference, { adddAt: serverTimestamp(), ...data });
};

export const setDocument = (path, data) => {
  const documentReference = doc(firestore, path);
  return setDoc(
    documentReference,
    { updatedAt: serverTimestamp(), ...data },
    { merge: true }
  );
};

export const deleteDocument = (path) => {
  const reference = doc(firestore, path);
  return deleteDoc(reference);
};
