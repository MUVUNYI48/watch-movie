import express from 'express';
import { getAll } from '../Controllers/videos/getAll';
import { addSubscription } from '../Controllers/videos/addSubscribers';
import { uploadVideo } from '../Controllers/customer';


export const videoRouter=express.Router();

videoRouter.get('/getAll',getAll);
videoRouter.patch('/addSubscribers/:id',addSubscription);
videoRouter.post('/upload',uploadVideo);

