'use strict';

const express = require('express');
const roleController = require('../controllers/roleController');
const router = new express.Router();

router.get('/', roleController.getAllRoles);
router.get('/:id', roleController.getRole);

module.exports = router;
