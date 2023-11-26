import express from "express";

import { update, getAll, signup } from "../Controllers/customer";

export const customerRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Customer:
 *       type: object
 *       properties:
 *         FullName:
 *           type: string
 *         Email:
 *           type: string
 *         Password:
 *           type: string
 *         Nationality: 
 *           type: string
 *         Gender:
 *           type: string
 *         Age:
 *           type: number
 *         TelNumber:
 *           type: number
 *         ChannelName:
 *           type: string
 *         linkofTheChannel:
 *           type: string
 *         PaymentStatus:
 *           type: string
 * 
 * 
 * /api/v1/client/signup:
 * 
 *   post:
 *     tags: [Customer]
 *     summary: signup for new client
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Customer'
 * 
 *     responses:
 *       '200':
 *         description: customer created successfully
 *       '204':
 *         description: customer not created successfully
*/
customerRouter.post('/signup', signup);
/**
* @swagger
* tags:
*   name: Customer
*   description: Operations related to Customer
*
* /api/v1/customer/getAll:
*   get:
*     tags: [Customer]
*     summary: Get all Customer information
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
 *                   ChannelName:
 *                     type: string
 *                   linkofTheChannel:
 *                     type: string
 * 
 */

customerRouter.get('/getAll', getAll);

customerRouter.patch('/update/:id', update);

