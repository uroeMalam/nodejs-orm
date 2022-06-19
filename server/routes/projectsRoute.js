import { Router } from "express";
import indexController from "../controllers/indexController";

const router = Router()

// basic route
router.get('/', indexController.projectsController.findAll)
router.get('/:id', indexController.projectsController.findOne)
router.post('/', indexController.projectsController.create)
router.put('/:id', indexController.projectsController.update)
router.delete('/:id', indexController.projectsController.deleted)

// custom route
router.get ('/join/:id', indexController.projectsController.join)


export default router
