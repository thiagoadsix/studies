const express = require('express')
const router = express.Router()

const TaskController = require('../controller/TaskController')
const TaskValidation = require('../middleware/TaskValidation')

router.post('/create', TaskValidation, TaskController.create)
router.get('/filter/:id', TaskController.show)
router.put('/update/:id', TaskController.update)
router.delete('/delete/:id', TaskController.delete)
router.put('/done/:id/:done', TaskController.done)

router.get('/all/:macAddress', TaskController.all)
router.get('/late/:macAddress', TaskController.late)
router.get('/today/:macAddress', TaskController.today)
router.get('/weekly/:macAddress', TaskController.weekly)
router.get('/monthly/:macAddress', TaskController.monthly)
router.get('/annually/:macAddress', TaskController.annually)

module.exports = router
