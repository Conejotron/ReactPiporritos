import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

import { firebaseConfig } from "../../config/firebase.config"

const app = initializeApp(firebaseConfig)

export const dbase = getFirestore(app)