const firebase = require('firebase');

export const TimestampToDate = (timestamp) => {
    var t = new Date(Date.UTC(1970, 0, 1)); // Epoch
    t.setUTCSeconds(timestamp);
    var n = t.toLocaleDateString();
    return n;
}

export const DateToTimeStamp = (dateObject) => {
    var timestamp = firebase.firestore.Timestamp.fromDate(dateObject);
    return timestamp;
}

export default TimestampToDate;