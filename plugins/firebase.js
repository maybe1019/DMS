import { initializeApp } from 'firebase/app'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    setPersistence,
    browserSessionPersistence,
    signInWithPopup,
    GoogleAuthProvider,
    EmailAuthProvider,
    sendEmailVerification,
    deleteUser,
} from 'firebase/auth'
import { getFirestore, collection, getDocs, addDoc, setDoc, doc, updateDoc, getDoc } from 'firebase/firestore'

// Initialize Firebase

export default (
    { $config: { apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId, measurementId, databaseUrl } },
    inject
) => {
    const firebaseConfig = {
        apiKey,
        authDomain,
        projectId,
        storageBucket,
        messagingSenderId,
        appId,
        measurementId,
        databaseUrl,
    }
    const app = initializeApp(firebaseConfig)
    const auth = getAuth(app)
    const db = getFirestore(app)

    inject('fire', {
        auth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        setPersistence,
        signInWithPopup,
        GoogleAuthProvider,
        browserSessionPersistence,
        sendEmailVerification,
        deleteUser,
        EmailAuthProvider,
        app,
        db,
        collection,
        getDocs,
        addDoc,
        setDoc,
        doc,
        updateDoc,
        getDoc,
    })
}
