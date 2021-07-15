const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const firebase = require("firebase");
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');

const db = firebase.firestore();

// @route POST api/users
// @desc Register a user
// @access Public



router.post('/', [
    check('username', 'Please add a username').not().isEmpty(),
    check('emailAddress', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({
        min: 6
    })
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    try {

        let { username, emailAddress, password } = req.body;

        const userRef = db.collection('users');

        // adding new user to firebase auth
        let userRefDoc = await userRef.doc(username).get();
        if (userRefDoc.exists) {
            console.log(user);
            return res.status(400).json({ msg: 'User exists'});
        }

        const salt = await bcrypt.genSalt(10);

        password = await bcrypt.hash(password, salt);
        
        const createdUserResult = await firebase
            .auth()
            .createUserWithEmailAndPassword(emailAddress, password);

        // Authentication create username
        await createdUserResult.user.updateProfile({
            displayName: username
        });

        user = {
            userId: createdUserResult.user.uid,
            username: username.toLowerCase(),
            emailAddress: emailAddress.toLowerCase(),
            dateCreated: Date.now()
        }

        await userRef.add(user);
        
        const payload = {
            user: {
                id: user.userId
            }
        }

        jwt.sign(payload, config.get('jwtSecret'), (err, token) => {
            if (err) throw err;
            res.json({ token });
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;