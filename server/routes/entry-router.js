const express = require('express')

const EntryController = require('../controllers/entry-controller')

const router = express.Router()

router.post('/entry', EntryController.createEntry)
router.put('/entry/:id', EntryController.updateEntry)
router.delete('/entry/:id', EntryController.deleteEntry)
router.get('/entry/:id', EntryController.getEntryById)
router.get('/entries', EntryController.getEntries)

module.exports = router
