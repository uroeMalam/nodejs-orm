import { Router } from "express";
import indexController from "../controllers/indexController";

const router = Router()

// basic route
router.get('/', indexController.dependentsController.findAll)
router.get('/newRoute', indexController.dependentsController.newRoute) //join sequelize
router.get('/:id', indexController.dependentsController.findOne)
router.post('/', indexController.dependentsController.create)
router.put('/:id', indexController.dependentsController.update)
router.delete('/:id', indexController.dependentsController.deleted)

// custom route
router.get ('/join/:id', indexController.dependentsController.join)


export default router
