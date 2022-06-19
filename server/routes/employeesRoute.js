import { Router } from "express";
import indexController from "../controllers/indexController";

const router = Router()

// basic route
router.get('/', indexController.employeesController.findAll)
router.get('/:id', indexController.employeesController.findOne)
router.post('/', indexController.employeesController.create)
router.put('/:id', indexController.employeesController.update)
router.delete('/:id', indexController.employeesController.deleted)

// custom route
router.get ('/join/:id', indexController.employeesController.join)


export default router
