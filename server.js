const express = require('express');
const firebase = require("firebase");

const app = express();

// Required for side-effects
require("firebase/firestore");

// Init middleware for body parsing
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello World')
});

let firebaseApiKey;
let firebaseAppId;

if (process.env.NODE_ENV !== 'production') {
    firebaseApiKey = process.env.FIREBASE_API_KEY_LOCAL;
    firebaseAppId = process.env.FIREBASE_APP_ID_LOCAL;
} else {
    firebaseApiKey = process.env.FIREBASE_API_KEY
    firebaseAppId = process.env.FIREBASE_APP_ID
}

// Firebase config
const firebaseConfig = {
    apiKey: firebaseApiKey,
    authDomain: "personal-website-tezaen.firebaseapp.com",
    projectId: "personal-website-tezaen",
    storageBucket: "personal-website-tezaen.appspot.com",
    messagingSenderId: "449594421594",
    appId: firebaseAppId,
    measurementId: "G-YRM91F1XXQ"
};

// init firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

// Define Routes
const users = require('./routes/users');
const auth = require('./routes/auth');
const projects = require('./routes/projects');
const jobs = require('./routes/jobs');

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/projects', projects);
app.use('/api/jobs', jobs);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
