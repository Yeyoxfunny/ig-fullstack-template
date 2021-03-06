'use strict';

const express = require('express');
const controller = require('./entitdad.controller');

const router = express.Router();

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.insertEntity);
router.put('/:id', controller.updateEntity);
router.delete('/:id', controller.deleteEntity);

module.exports = router;
