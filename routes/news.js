const express = require('express');
const router = express.Router();

const newsController = require('../controllers/NewsControllers');

router.get('/', newsController.index);
router.get('/newsbyid/:id', newsController.getNewsById);
router.get('/newsbycat',newsController.getListNewsByCat)

module.exports = router;
