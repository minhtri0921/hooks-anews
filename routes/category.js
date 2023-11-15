const express = require('express');
const router = express.Router();

const categoriesControllers = require('../controllers/CategoryControllers');

router.get('/', categoriesControllers.index);

router.get('/catbyid', categoriesControllers.getCatById);


module.exports = router;
