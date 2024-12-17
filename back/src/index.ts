import express from 'express';
 const app =  express();
 var cors = require('cors')

import { PrismaClient } from '@prisma/client'
import { courseRouter } from './routes/course';
const port = 3000

app.use(express.json());
let corsOptions = {
    origin : ['http://localhost:5500'],
 }
 
app.use(cors(corsOptions))
export const prisma = new PrismaClient()

app.use('/courses',courseRouter)
 

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })