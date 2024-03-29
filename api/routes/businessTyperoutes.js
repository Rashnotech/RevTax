import { Router } from "express";
import jwtAuth from '../middleware/jwtauth.js'
import AuthController from "../controllers/AuthController.js"
import BusinessTypeController from "../controllers/BusinessTypeController.js"


const BusinessTypeRouter = Router();

BusinessTypeRouter.post('/api/businesstypes', jwtAuth, BusinessTypeController.createBusinessType)

BusinessTypeRouter.put('/api/businesstypes/:code', jwtAuth, BusinessTypeController.updateBusinessType)

BusinessTypeRouter.get('/api/businesstypes', jwtAuth, BusinessTypeController.getAllBusinessType)

BusinessTypeRouter.get('/api/businesstypes/:code', jwtAuth, BusinessTypeController.getBusinessType)

BusinessTypeRouter.delete('/api/businesstypes/:code', jwtAuth, BusinessTypeController.deleteBusinessType)


export default BusinessTypeRouter


