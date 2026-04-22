const firebaseConfig = {
    apiKey: process.env.VUE_APP_firebase_apiKey,
    authDomain: process.env.VUE_APP_firebase_authDomain,
    projectId: process.env.VUE_APP_firebase_projectId,
    storageBucket: process.env.VUE_APP_firebase_storageBucket,
    messagingSenderId: process.env.VUE_APP_firebase_messagingSenderId,
    appId: process.env.VUE_APP_firebase_appId
};
console.log(process.env)
export default firebaseConfig;