import express from 'express';
import { Signup,getAll } from '../Controllers/clients';
import { login } from '../Controllers/login';
import { verifyToken } from '../middlewares/verifyToken';
import { isAdmin } from '../middlewares/isAdmin';

export const clientRouter = express.Router();

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       scheme: bearer
 *       type: http
 *       bearerFormat: JWT
 * 
 *   schemas:
 *     Client:
 *       type: object
 *       properties:
 *         FullName:
 *           type: string
 *         Email:
 *           type: string
 *         Password:
 *           type: string
 *         country: 
 *           type: string
 *         Gender:
 *           type: string
 *         Age:
 *           type: number
 *         TelNumber:
 *           type: number
 *         PaymentMethod:
 *           type: string
 * @swagger
 * /api/v1/client/signup:
 *   post:
 *     tags: [Client]
 *     summary: signup for new client
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Client'
 * 
 *     responses:
 *       '200':
 *         description: Client created successfully
 *       '204':
 *         description: Client not created successfully
 *
 */
clientRouter.post('/signup',Signup);

/**
* @swagger
* tags:
*   name: Client
*   description: Operations related to client
*
* /api/v1/client/getAll:
*   get:
*     tags: [Client]
*     summary: Get all client information
*     responses:
*       '200':
*         description: Successful response
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 type: object 
*                 properties:
*                   FullName:
 *                     type: string
 *                   Email:
 *                     type: string
 *                   password:
 *                     type: string
 *                   country:
 *                     type: string
 *                   Gender:
 *                     type: string
 *                   TelNumber:
 *                     type: number
 *                   Age:
 *                     type: number
 *                   PaymentMethod:
 *                     type: string
 * 
 */

// clientRouter.get('/getAll',verifyToken,isAdmin,getAll);
clientRouter.get('/getAll',getAll);

/**
 * @swagger
 * /api/v1/client/login:
 *   post:
 *     tags: [Client]
 *     summary: client login
 *     description: Authenticates a Client with their email and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Email:
 *                 type: string
 *               Password:
 *                 type: string
 *             required:
 *               - Email
 *               - Password
 *     responses:
 *       '200':
 *         description: Successful login
 *       '401':
 *         description: Unauthorized - Invalid credentials
 *       '500':
 *         description: Internal server error 
 * 
 *
 *  */
 
clientRouter.post('/login',login);