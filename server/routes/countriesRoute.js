import { Router } from "express";
import indexController from "../controllers/indexController";

const router = Router()

// basic route
router.get('/', indexController.countriescontroller.findAll) 
router.get ('/newRoute', indexController.countriescontroller.newRoute) //all true
router.get('/:id', indexController.countriescontroller.findOne)
router.post('/', indexController.countriescontroller.create)
router.put('/:id', indexController.countriescontroller.update)
router.delete('/:id', indexController.countriescontroller.deleted)

// custom route
router.get ('/join/:id', indexController.countriescontroller.join)


export default router
