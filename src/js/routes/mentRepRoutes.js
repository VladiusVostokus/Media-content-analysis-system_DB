'use strict';

const express = require('express');
const resDataController = require('../controllers/mentRepController');
const router = new express.Router();

router
    .route('/')
    .get(resDataController.getAllMentReps)
    .post(resDataController.createMentRep);

router
    .route('/:id')
    .get(resDataController.getMentRep)
    .delete(resDataController.delMentRep);

module.exports = router;

