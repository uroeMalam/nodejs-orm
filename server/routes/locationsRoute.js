import { Router } from "express";
import indexController from "../controllers/indexController";

const router = Router()

// basic route
router.get('/', indexController.locationsController.findAll)
router.get('/:id', indexController.locationsController.findOne)
router.post('/', indexController.locationsController.create)
router.put('/:id', indexController.locationsController.update)
router.delete('/:id', indexController.locationsController.deleted)

// custom route
router.get ('/join/:id', indexController.locationsController.join)


export default router
