import mongoose from "mongoose";
const express = require('express');
import bodyParser from "body-parser";
import { paymentRouter, customerRouter,adminR, clientRouter } from "./src/routes";
import dotenv from 'dotenv';
import { videoRouter } from "./src/routes/videoRouter";

import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from './swaggerConfig.js';

dotenv.config();

const PORT = 8080;
const app = express();
app.use(bodyParser.json());

mongoose.connect(process.env.URL2).then((data) => {
    console.log('App and DB is connected ...');
});

app.use('/swagger-api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/v1/customer/', customerRouter);
app.use('/api/v1/payment/', paymentRouter);
app.use('/api/v1/video/', videoRouter);
app.use('/api/v1/client/', clientRouter);
app.use('/api/v1/admin/', adminR);   

app.listen(PORT, () => {
    console.log(`listening on port:http://localhost:${PORT}`);
});

