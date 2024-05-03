var express = require('express');
var router = express.Router();
const multer = require('multer');
var user = require('../Controller/Usercontroller');

router.get('/userdet',user.getdata);
router.post('/userinsert',user.insert);

module.exports = router;
