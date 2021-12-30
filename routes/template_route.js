var express = require('express');
var router = express.Router();

const template = require("../controller/templates");
const auth = require('../authentication');

//template router
router.get('/',  [auth.verification], template.ListAllCheckList);
router.post('/',  [auth.verification], template.CreateChecklist);
router.get('/:templateId',  [auth.verification], template.GetChecklistTemplate);
router.patch('/:templateId', [auth.verification], template.UpdateCheklist);
router.delete('/:templateId', [auth.verification], template.DeleteChecklist);
router.post('/:templateId/assigns', [auth.verification], template.Assigns);


module.exports = router;