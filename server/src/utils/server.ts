import express from 'express'
import cors from 'cors'
import api from '../routes';

function createServer() {
  const app = express()
  app.use(cors({
    origin: process.env.front || 'http://localhost:3000',
    credentials:true,
  }))

  app.use(express.json());
  //app routes version middleware
  app.use("/api/v1",api)
  return app
}

export default createServer