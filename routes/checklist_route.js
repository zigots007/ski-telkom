var express = require('express');
var router = express.Router();

const checklist = require("../controller/checklist");
const auth = require('../authentication');

router.get('/',  [auth.verification], checklist.GetAllChecklist);
router.get('/:checklistId',  [auth.verification], checklist.GetById);
router.patch('/:checklistId',  [auth.verification], checklist.UpdateChecklist);
router.delete('/:checklistId',  [auth.verification], checklist.DeleteChecklist);
router.post('/',  [auth.verification], checklist.CreateChecklist);


module.exports = router;