import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyC_O2cTb1ltTVcS1PVxQCrUbQKFEVbmGeQ",
  authDomain: "tradeassist-05.firebaseapp.com",
  databaseURL: "https://tradeassist-05-default-rtdb.firebaseio.com",
  storageBucket: "tradeassist-05.appspot.com"
};
firebase.initializeApp(config);

export default firebase;
