const admin = require("firebase-admin");
const firebase = require("firebase/app");

const credentials = require("./credential.json");

admin.initializeApp({
  credential: admin.credential.cert(credentials),
  databaseURL: "https://farishta-a6065-default-rtdb.firebaseio.com",
});

const firebaseConfig = {
  apiKey: "AIzaSyCGmGfYdfGTBsKi0ot6uisFqDGZUSrVpM4",
  authDomain: "farishta-a6065.firebaseapp.com",
  databaseURL: "https://farishta-a6065-default-rtdb.firebaseio.com",
  projectId: "farishta-a6065",
  storageBucket: "farishta-a6065.appspot.com",
  messagingSenderId: "658593273938",
  appId: "1:658593273938:web:07cde466849f64ce1ca78b",
  measurementId: "G-P43BKM77DL",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

exports.admin = admin;
exports.db = admin.database().app.firestore();
exports.firebase = firebase;
exports.firebaseConfig = firebaseConfig;
