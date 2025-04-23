const express = require('express');
const router = express.Router();
const mailController = require('../controllers/mailController');

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/send', mailController.sendMail);

module.exports = router;