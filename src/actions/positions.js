import firebase from '../config/Firebase';

const dbRef = firebase.database().ref();

export const getOpenPositons = () => {
  return dbRef.child('/open-positions').get().then((snapshot) => {
    if (snapshot.exists()) {
      return snapshot.val()
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
};
