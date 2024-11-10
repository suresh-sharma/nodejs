const express = require('express');
const userController=require('./Controller/UserController')
const router = express.Router();

// Define routes
router.get('/getallusers', userController.GetAllUser);

router.get('/getuser/:id', userController.GetUserById);

router.post('/createuser', userController.CreateUser);

router.put('/updateuser/:id', userController.UpdateUser);

router.delete('/deleteuser/:id', userController.DeleteUser);

module.exports = router;