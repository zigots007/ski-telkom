var express = require('express');
var router = express.Router();


router.use('/checklists/', require("./items_route"));
router.use('/checklists/templates/', require("./template_route"));
router.use('/checklists/histories/', require("./history_route"));
router.use('/checklists/', require("./checklist_route"));


module.exports = router;