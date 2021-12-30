var express = require('express');
var router = express.Router();

const history = require("../controller/history");
const auth = require('../authentication');


router.get('/',  [auth.verification], history.GetListHistory);
router.get('/:historyId',  [auth.verification], history.GetById);


module.exports = router;