const express = require('express')
const router = express.Router();
const middleware = require('../Middleware/Middleware');
const contactController = require('../controllers/ContactControllers')


router.post('/',middleware.uploadFile,contactController.postContact)
module.exports = router;
