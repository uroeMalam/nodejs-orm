import { Router } from "express";
import indexController from "../controllers/indexController";

const router = Router()

// basic route
router.get('/', indexController.projectAssigmentController.findAll)
router.get('/:id/:id2', indexController.projectAssigmentController.findOne) // id = pras_project_id, id2 = pras_employee_id
router.post('/', indexController.projectAssigmentController.create)
router.put('/:id/:id2', indexController.projectAssigmentController.update)
router.delete('/:id/:id2', indexController.projectAssigmentController.deleted)

// custom route
router.get ('/join', indexController.projectAssigmentController.join)


export default router
