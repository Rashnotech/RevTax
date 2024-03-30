import { Router } from "express";
import jwtAuth from '../middleware/jwtauth.js'
import BusinessController from "../controllers/BusinessController.js"


const BusinessRouter = Router();
BusinessRouter.post('/api/businesses', jwtAuth, BusinessController.createBusiness)

BusinessRouter.put('/api/businesses/:businessId', jwtAuth, BusinessController.updateBusiness)

BusinessRouter.get('/api/businesses', jwtAuth, BusinessController.getAllBusiness)

BusinessRouter.get('/api/businesses/:businessId', jwtAuth, BusinessController.getBusiness)
BusinessRouter.get('/api/users/:userId/businesses', jwtAuth, BusinessController.getBusinessByUser);

BusinessRouter.delete('/api/businesses/:businessId', jwtAuth, BusinessController.deleteBusiness)


export default BusinessRouter


