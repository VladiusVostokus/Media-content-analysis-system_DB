'use strict';

const express = require('express');
const userController = require('../controllers/userController');
const router = new express.Router();


router
    .route('/')
    .get(userController.getAllUsers)
    .post(userController.createUser);

router
    .route('/:id')
    .get(userController.getUser)
    .put(userController.updatePassword)
    .delete(userController.deleteUser);

module.exports = router;
