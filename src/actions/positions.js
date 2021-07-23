import firebase from '../config/Firebase';

const database = firebase.database();

export const getOpenPositons = userId => {
  return database.ref().child('/open-positions/'+ userId).get().then((snapshot) => {
    if (snapshot.exists()) {
      const objToArr = Object.entries(snapshot.val());
      return objToArr
    } else {
      return [];
    }
  }).catch((error) => {
    console.error(error);
  });
};

export const addOpenPosition = (userId) => {
  const newPositionRef = database.ref('/open-positions/'+userId).push();
  newPositionRef.set({
    "average" : 779,
    "entryDate" : "19-04-21",
    "no" : 2,
    "quantity" : 30,
    "symbol" : "Mindtree"
  });
  return getOpenPositons(userId);
}

export const closePosition = (userId, positionId) => {
  database.ref().child('/open-positions/'+userId+'/'+positionId).remove();
  return getOpenPositons(userId);
}
