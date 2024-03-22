import { Router } from "express";
import UsersController from "../controllers/UsersController.js";
import jwtAuth from '../middleware/jwtauth.js'
import PaymentController from "../controllers/PaymentController.js";
import verify from "../controllers/verify.js"
import User from '../models/users.js'


const router = Router();


router.post('/auth/signup', UsersController.register);

router.post('/auth/login', UsersController.login);
router.get('/users', jwtAuth, UsersController.getAllUsers);
router.get('/users/:userId', jwtAuth, UsersController.getUser);
router.put('/users/:userId', jwtAuth, UsersController.updateUser)
router.delete('/users/:userId', jwtAuth, UsersController.deleteUser);

/**
 * @swagger
 * openapi: 3.0.0
 * info:
 *   title: Payment API
 *   description: API for managing payments
 *   version: 1.0.0
 * servers:
 *   - url: http://localhost:5000
 * paths:
 *   /payments:
 *     post:
 *       summary: Create a new payment
 *       description: |
 *         Endpoint to create a new payment.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 amount:
 *                   type: number
 *                   description: The amount of the payment
 *                   example: 500
 *       responses:
 *         '200':
 *           description: Payment successfully created
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   userId:
 *                     type: string
 *                     description: The ID of the user who made the payment
 *                   amount:
 *                     type: number
 *                     description: The amount of the payment
 *                   payment_method:
 *                     type: string
 *                     description: The payment method used
 *                   status:
 *                     type: string
 *                     description: The status of the payment
 *                   _id:
 *                     type: string
 *                     description: The unique identifier of the payment
 *                   created_at:
 *                     type: string
 *                     format: date-time
 *                     description: The timestamp indicating when the payment was created
 *                   __v:
 *                     type: number
 *                     description: Version key used by MongoDB
 *         '401':
 *           description: Unauthorized - Invalid or missing JWT token
 *       security:
 *         - BearerAuth: []
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 */

router.post('/payments', jwtAuth, PaymentController.makePayment);


/**
 * @swagger
 * /payments/{paymentId}:
 *   put:
 *     summary: Update a payment status
 *     description: Update a payment status
 *     parameters:
 *       - in: path
 *         name: paymentId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the payment to update
 *     responses:
 *       200:
 *         description: Return the updated payment
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 */

router.put('/payments/:paymentId', jwtAuth, PaymentController.updatePayment);

router.get('/payments', jwtAuth, PaymentController.getAllPayment);

router.get('/payments/:paymentId', jwtAuth, PaymentController.getPayment);

router.get('/users/:userId/payments', jwtAuth, PaymentController.getPaymentByUser);
router.post('/verify/:email', verify)

router.post('/requesttoken', AuthController.requestToken)
router.post('/verifytoken', AuthController.verifyToken)
router.post('/resetpassword', AuthController.resetPassword)

export default router;
