const express = require('express');
const router = express.Router();
const courseController = require('../controller/courseController');


router.post('/publish', courseController.publishCourse);



module.exports = router;
