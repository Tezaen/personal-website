const express = require('express');
const firebase = require("firebase");

const app = express();

// Required for side-effects
require("firebase/firestore");

app.get('/', (req, res) => {
    res.send('Hello World')
});

// Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCZMDrBu0eFgW9sW0-JyvN5v8XyA2UQS2A",
    authDomain: "personal-website-tezaen.firebaseapp.com",
    projectId: "personal-website-tezaen",
    storageBucket: "personal-website-tezaen.appspot.com",
    messagingSenderId: "449594421594",
    appId: "1:449594421594:web:d42900dec9501609270363",
    measurementId: "G-YRM91F1XXQ"
};

// init firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

// Define Routes
const users = require('./routes/users');
const auth = require('./routes/auth');
const projects = require('./routes/projects');

app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/projects', projects);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
