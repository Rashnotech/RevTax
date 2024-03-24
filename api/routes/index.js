import { Router } from "express";
import UsersController from "../controllers/UsersController.js";
import jwtAuth from '../middleware/jwtauth.js'
import PaymentController from "../controllers/PaymentController.js";
import verify from "../controllers/verify.js"
import User from '../models/users.js'
import AuthController from "../controllers/AuthController.js"

const router = Router();

/**
 * @swagger
 * openapi: 3.0.0
 * info:
 *   title: User Authentication API
 *   description: API for user authentication and signup
 *   version: 1.0.0
 * servers:
 *   - url: http://localhost:5000
 * paths:
 *   /api/auth/signup:
 *     post:
 *       summary: User Signup
 *       description: |
 *         Endpoint for user registration.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 firstname:
 *                   type: string
 *                   description: The first name of the user
 *                   example: Inimfon
 *                 lastname:
 *                   type: string
 *                   description: The last name of the user
 *                   example: Ebong
 *                 telephone:
 *                   type: string
 *                   description: The telephone number of the user
 *                   example: "09168848808"
 *                 email:
 *                   type: string
 *                   format: email
 *                   description: The email address of the user
 *                   example: ebonginimfon7@gmail.com
 *                 password:
 *                   type: string
 *                   description: The password for user authentication
 *                   example: inimfon
 *                 type:
 *                   type: integer
 *                   description: Type of user
 *                   example: 1
 *                 address:
 *                   type: string
 *                   description: The address of the user
 *                   example: Cross river state
 *       responses:
 *         '200':
 *           description: User created successfully
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     description: Confirmation message
 *                     example: User created successfully
 *         '400':
 *           description: Bad Request - Invalid input or missing required fields
 *         '409':
 *           description: Conflict - User with provided email already exists
 *         '500':
 *           description: Internal Server Error - Something went wrong while processing the request
 *       security: []
 */

router.post('/api/auth/signup', UsersController.register);

/**
 * @swagger
 * openapi: 3.0.0
 * info:
 *   title: User Authentication API
 *   description: API for user authentication and signup
 *   version: 1.0.0
 * servers:
 *   - url: http://localhost:5000
 * paths:
 *   /api/auth/login:
 *     post:
 *       summary: User Login
 *       description: |
 *         Endpoint for user authentication and login.
 *       requestBody:
 *         required: true
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 telephone:
 *                   type: string
 *                   description: The telephone number of the user
 *                   example: "09168848807"
 *                 email:
 *                   type: string
 *                   format: email
 *                   description: The email address of the user
 *                   example: ebonginimfon8@gmail.com
 *                 password:
 *                   type: string
 *                   description: The password for user authentication
 *                   example: inimfon
 *       responses:
 *         '200':
 *           description: Successful login
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   token:
 *                     type: string
 *                     description: JWT token for authentication
 *                     example: eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmRkYmVjOThmMzY2MmJlZWU2NGM0MCIsImlhdCI6MTcxMTEzNjA0NywiZXhwIjoxNzEzNzI4MDQ3fQ.-TreDaCTx_dmkgXteRum6V9oj4qA-_7GaUM1IYdnLFratapF9YQsyMt14bGT1xohy112i_k_I7073W9wXSNkSw
 *         '400':
 *           description: Bad Request - Invalid input or missing required fields
 *         '401':
 *           description: Unauthorized - Invalid email, telephone, or password
 *         '500':
 *           description: Internal Server Error - Something went wrong while processing the request
 *       security: []
 */

router.post('/api/auth/login', UsersController.login);

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
 *         - APIKeyAuth: []
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
 *     ApiKeyAuth:
 *       type: apiKey
 *       in: header
 *       name: Authorization
 */

router.get('/api/users', jwtAuth, UsersController.getAllUsers);

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
 *   /users/{userId}:
 *     get:
 *       summary: Get user by ID
 *       description: |
 *         Retrieves a specific user by their ID.
 *       parameters:
 *         - name: userId
 *           in: path
 *           description: The ID of the user to retrieve
 *           required: true
 *           schema:
 *             type: string
 *           example: 65fc22ad432b9300e6dd813c
 *         - name: Authorization
 *           in: header
 *           description: Access token obtained after authentication
 *           required: true
 *           schema:
 *             type: string
 *           example: eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmQzODNjZWI5MmNjYWUwNGExMGI4OCIsImlhdCI6MTcxMTA5MzkwMiwiZXhwIjoxNzEzNjg1OTAyfQ.g8kITz9UO0PHFkHnCxBfFa4DaBQ900m-99nJ5kJN7UrNU9Uj6cC8Y_SwRMpO2LI4-ly6ITo0w4m_EHQc6QjNqA
 *       responses:
 *         '200':
 *           description: Successful response
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/User'
 *         '401':
 *           description: Unauthorized - Invalid or expired token
 *         '404':
 *           description: Not Found - User with the specified ID not found
 *         '500':
 *           description: Internal Server Error - Something went wrong while processing the request
 *       security:
 *         - ApiKeyAuth: []
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
 *     ApiKeyAuth:
 *       type: apiKey
 *       in: header
 *       name: Authorization
 */

router.get('/api/users/:userId', jwtAuth, UsersController.getUser);


router.put('/api/users/:userId', jwtAuth, UsersController.updateUser)
router.delete('/api/users/:userId', jwtAuth, UsersController.deleteUser);

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


router.post('/api/payments', jwtAuth, PaymentController.makePayment);


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

router.put('/api/payments/:paymentId', jwtAuth, PaymentController.updatePayment);

router.get('/api/payments', jwtAuth, PaymentController.getAllPayment);

router.get('/api/payments/:paymentId', jwtAuth, PaymentController.getPayment);

router.get('/api/users/:userId/payments', jwtAuth, PaymentController.getPaymentByUser);
router.post('/api/verify/:email', verify)

router.post('/api/requesttoken', AuthController.requestToken)
router.post('/api/verifytoken', AuthController.verifyToken)
router.post('/api/resetpassword', AuthController.resetPassword)

export default router;
