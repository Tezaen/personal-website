const express = require('express');
const router = express.Router();
const firebase = require("firebase");

var db = firebase.firestore();

router.get('/', async (req, res) => {
    
    try {
        const projectsRef = db.collection('projects');
        const snpashots = await projectsRef.get();
        projects = [];
        snpashots.forEach(doc => {
            // console.log(doc.id, ' => ', doc.data());
            projects.push(doc.data())
        })

        res.send(projects);
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;