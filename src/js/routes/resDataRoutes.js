'use strict';

const express = require('express');
const resDataController = require('../controllers/resDataController');
const router = new express.Router();

router
    .route('/')
    .get(resDataController.getAllResData)
    .post(resDataController.createResData);

router
    .route('/:id')
    .get(resDataController.getResData)
    .delete(resDataController.delResData);

module.exports = router;