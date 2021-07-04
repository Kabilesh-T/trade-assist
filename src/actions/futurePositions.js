import firebase from '../config/Firebase';

const database = firebase.database();

export const getFuturePositons = userId => {
    return database.ref().child('/future-positions/'+ userId).get().then((snapshot) => {
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

export const addFuturePosition = (userId) => {
    const newPositionRef = database.ref('/future-positions/'+userId).push();
    newPositionRef.set({
        "no": 1,
        "entry" : 721,
        "quantity" : 30,
        "symbol" : "Mindtree",
        "stoploss": 700,
        "risk": 500,
        "capital": 8000
    });
    return getFuturePositons(userId);
}

export const removeFuturePosition = (userId, positionId) => {
    database.ref().child('/future-positions/'+userId+'/'+positionId).remove();
    return getFuturePositons(userId);
}
