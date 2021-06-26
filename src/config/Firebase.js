import firebase from 'firebase';
import "firebase/auth";

var config = {
  apiKey: "AIzaSyC_O2cTb1ltTVcS1PVxQCrUbQKFEVbmGeQ",
  authDomain: "tradeassist-05.firebaseapp.com",
  databaseURL: "https://tradeassist-05-default-rtdb.firebaseio.com",
  storageBucket: "tradeassist-05.appspot.com"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
firebase.app();
export default firebase;
