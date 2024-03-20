import { Router } from "express";
import UsersController from "../controllers/UsersController.js";
import jwtAuth from '../middleware/jwtauth.js'
import PaymentController from "../controllers/PaymentController.js";
import verify from "../controllers/verify.js"
import User from '../../models/users.js'


const router = Router();

router.post('/auth/signup', UsersController.register);
router.post('/auth/login', UsersController.login);

router.post('/payments', jwtAuth, PaymentController.makePayment);
router.put('/payments/:paymentId', jwtAuth, PaymentController.updatePayment);
router.get('/payments', jwtAuth, PaymentController.getAllPayment);
router.get('/payments/:userId', jwtAuth, PaymentController.getPaymentByUser);
router.post('verify/:email', verify)


export default router;
