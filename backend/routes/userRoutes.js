const express = require('express');
const router = express.Router();
const userControler = require('../controller/userController');

// Routes
router.post('/register', userControler.createUser);
router.get('/getAllUser', userControler.getUsers);


// 👇 New update route
router.put('/update/:id', userControler.updateUser);

router.get('/get/:id', userControler.getUserById);


router.delete('/delete/:id',userControler.deleteUser);


router.post('/login', userControler.loginUser);





module.exports = router;
