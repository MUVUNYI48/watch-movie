import express from 'express';
import { getAll } from '../Controllers/videos/getAll';
import { addSubscription } from '../Controllers/videos/addSubscribers';
import { uploadVideo } from '../Controllers/customer';


export const videoRouter=express.Router();

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
 *     Video:
 *       type: object
 *       properties:
 *         userId:
 *           type: string
 *         lengthOfVideo:
 *           type: string
 *         views:
 *           type: string
 *         subscribers: 
 *           type: string
 *         share:
 *           type: string
 *         comment:
 *           type: number
 *         lenthOfVideo:
 *           type: number
 * 
 * */
/**
 * @swagger
* tags:
*   name: Client
*   description: Operations related to client
*
* /api/v1/video/getAll:
*   get:
*     tags: [Video]
*     summary: Get all video information
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
*                   userId:
 *                     type: string
 *                   Email:
 *                     type: string
 *                   views:
 *                     type: string
 *                   share:
 *                     type: string
 *                   comment:
 *                     type: string
 *                   subscribers:
 *                     type: number
 *                   lenthOfVideo:
 *                     type: string
 * 
 */
videoRouter.get('/getAll',getAll);
/** 
 * 
 *@swagger
 *  /api/v1/video/updateOneTour/{id}:
 *   get:
 *     tags: [Video]
 *     summary: Get videomjjjh j   data by ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the video to retrieve.
 *     responses:
 *       '200':
 *         description: data updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Video'
 *       '404':
 *         description: Tour not found
 */

videoRouter.patch('/addSubscribers/:id',addSubscription);
videoRouter.post('/upload',uploadVideo);

