import express from 'express';
import { create } from '../Controllers/Admin/create';

export const adminR = express.Router();

adminR.post('/create',create)

