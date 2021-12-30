var express = require('express');
var router = express.Router();

const items = require("../controller/items");
const auth = require('../authentication');

router.post('/complete',  [auth.verification], items.Complete);
router.post('/incomplete',  [auth.verification], items.InComplete);
router.get('/:checklistId/items',  [auth.verification], items.GetChecklistAllItems);
router.post('/:checklistId/items',  [auth.verification], items.CreateItems);
router.get('/:checklistId/items/:itemId',  [auth.verification], items.GetById);
router.patch('/:checklistId/items/:itemId',  [auth.verification], items.UpdateItem);
router.delete('/:checklistId/items/:itemId',  [auth.verification], items.DeleteItem);
router.post('/:checklistId/items/_bulk',  [auth.verification], items.UpdateBulk);
router.get('/items/summaries',  [auth.verification], items.GetSummaries);
router.get('/items',  [auth.verification], items.GetAllItems);


module.exports = router;