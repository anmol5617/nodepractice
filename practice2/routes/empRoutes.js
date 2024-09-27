const express = require('express')

const empCcontroller = require('./../controllers/empController')

const router = express.Router()

router.post('/', empCcontroller.createEmp)
router.get('/', empCcontroller.getEmp)
router.route('/:id').delete(empCcontroller.deleteEmp).patch(empCcontroller.updateEmp)


module.exports = router