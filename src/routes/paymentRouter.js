import express from 'express';
import { payViews } from '../Controllers/payment/youtuber/payView';


export const paymentRouter = express.Router();

paymentRouter.get('/payViews',payViews);