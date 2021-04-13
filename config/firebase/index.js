import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: process.NEXT_PUBLIC_API_KEY,
    authDomain: process.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.NEXT_PUBLIC_MESSAGING_SEND_ID,
    appId: process.NEXT_PUBLIC_APP_ID,
    measurementId: process.NEXT_PUBLIC_MEASUREMENT_ID,
  }

export default firebase.apps.length
     ? firebase.app() 
     : firebase.initializeApp(firebaseConfig);







