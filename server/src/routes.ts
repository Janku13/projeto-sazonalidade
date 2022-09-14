import express, { Request,Response} from 'express'
import sazonalidadeRouter from './modules/sazonalidade/sazonalidade.route'

  const api = express.Router()
  api.get("/healthcheck", (req:Request,res:Response) => res.sendStatus(200))
  api.use("/sazonalidade",sazonalidadeRouter)

export default api