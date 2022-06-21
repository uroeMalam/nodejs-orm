import { Router } from "express";
import indexController from "../controllers/indexController";

const router = Router()

// basic route
router.get('/', indexController.departmentsController.findAll)
router.get('/newRoute', indexController.departmentsController.newRoute) //join sequelize
router.get('/:id', indexController.departmentsController.findOne)
router.post('/', indexController.departmentsController.create)
router.put('/:id', indexController.departmentsController.update)
router.delete('/:id', indexController.departmentsController.deleted)

// custom route
router.get ('/join/:id', indexController.departmentsController.join)


export default router
