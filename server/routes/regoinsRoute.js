import { Router } from "express";
import indexController from "../controllers/indexController";

const router = Router()

router.get('/', indexController.regionscontroller.findAll)
router.get('/:id', indexController.regionscontroller.findOne)
router.post('/', indexController.regionscontroller.create)
router.put('/:id', indexController.regionscontroller.update)
router.delete('/:id', indexController.regionscontroller.deleted)
router.get ('/join/:id', indexController.regionscontroller.querySQL)


export default router
