const express = require('express');
const router = express.Router();
const firebase = require("firebase");

var db = firebase.firestore();

router.get('/', async (req, res) => {
    
    try {
        const jobsRef = db.collection('jobs');
        const snapshots = await jobsRef.get();
        jobs = [];
        snapshots.forEach(doc => {
            // console.log(doc.id, ' => ', doc.data());
            jobs.push(doc.data())
        })

        res.json(jobs);
    } catch (error) {
        console.error(error);
    }
});

module.exports = router;