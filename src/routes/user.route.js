const express = require('express');
const userController = require('../controllers/user.controller');

const router = express.Router();

const prefix = '/user';

router.get(prefix, userController.list);

router.get(`${prefix}/search/:phone`, userController.search);

router.post(`${prefix}/update`, userController.update);

module.exports = router;
