const express = require('express')
const {register,login } = require('../controller/auth.Controller.js')
const router = express.Router();

router.post('/register',register );
router.post('/login',login);


module.exports = router;