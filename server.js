const express = require('express');
const firebase = require("firebase");
const app = express();
const path = require('path');

// Required for side-effects
require("firebase/firestore");

// Init middleware for body parsing
app.use(express.json({ extended: false }));

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

// console.log(process.env.TEST);
// console.log("process env fb api key:", process.env.FIREBASE_API_KEY);
// console.log("process env fb ID:", process.env.FIREBASE_APP_ID);
firebaseApiKey = process.env.FIREBASE_API_KEY
firebaseAppId = process.env.FIREBASE_APP_ID

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

// Serve static assets in prod
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => 
        res.sendFile(path.resolve(__dirname, 'client', 'build','index.html'))
    );
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
