const express = require('express');
const router = express.Router();
const firebase = require("firebase");

var db = firebase.firestore();

router.get('/', async (req, res) => {
    try {
        const projectsRef = db.collection('projects');
        const snapshots = await projectsRef.get();
        projects = [];
        snapshots.forEach(doc => {
            // console.log(doc.id, ' => ', doc.data());
            projects.push(doc.data())
        })
        
        res.json(projects);
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;