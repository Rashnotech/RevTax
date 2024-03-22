import { Router } from "express";
import UsersController from "../controllers/UsersController.js";
import jwtAuth from '../middleware/jwtauth.js'
import PaymentController from "../controllers/PaymentController.js";
import verify from "../controllers/verify.js"
import User from '../models/users.js'
import AuthController from "../controllers/AuthController.js"

const router = Router();


router.post('/auth/signup', UsersController.register);

router.post('/auth/login', UsersController.login);

/**
 * @swagger
 * openapi: 3.0.0
 * info:
 *   title: User Management API
 *   description: API for managing users
 *   version: 1.0.0
 * servers:
 *   - url: http://localhost:5000
 * paths:
 *   /users:
 *     get:
 *       summary: Get all users
 *       description: |
 *         Retrieves a list of all users.
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               schema:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/User'
 *         '401':
 *           description: Unauthorized - Invalid or expired token
 *       security:
 *         - APIKeyHeader: []
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: The unique identifier of the user
 *         firstname:
 *           type: string
 *           description: The first name of the user
 *         lastname:
 *           type: string
 *           description: The last name of the user
 *         telephone:
 *           type: string
 *           description: The telephone number of the user
 *         email:
 *           type: string
 *           format: email
 *           description: The email address of the user
 *         token:
 *           type: string
 *           description: Access token associated with the user
 *         validated:
 *           type: boolean
 *           description: Indicates whether the user has been validated
 *         type:
 *           type: integer
 *           description: Type of user
 *         address:
 *           type: string
 *           description: The address of the user
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the user was created
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: The date and time when the user was last updated
 *         __v:
 *           type: integer
 *           description: Version control field
 *   securitySchemes:
 *     APIKeyHeader:
 *       type: apiKey
 *       in: header
 *       name: Authorization
 */

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
 *         - ApiKeyAuth: []
 * components:
 *   securitySchemes:
 *     ApiKeyAuth:
 *       type: apiKey
 *       in: header
 *       name: Authorization
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
