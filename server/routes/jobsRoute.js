import { Router } from "express";
import indexController from "../controllers/indexController";

const router = Router()

// basic route
router.get('/', indexController.jobsController.findAll)
router.get('/:id', indexController.jobsController.findOne)
router.post('/', indexController.jobsController.create)
router.put('/:id', indexController.jobsController.update)
router.delete('/:id', indexController.jobsController.deleted)

// custom route
router.get ('/join/:id', indexController.jobsController.join)


export default router
