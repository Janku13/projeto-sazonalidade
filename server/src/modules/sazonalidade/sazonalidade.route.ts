import express from 'express'
import validate from '../../middleware/validateRequest'

import { registerSazonalidade,fetchSazonalidades,getSazonalidade,updateSazonalidade, deleteSazonalidade, deleteManySazonalidadesController } from './sazonalidade.controller'
import { createSazonalidadeSchema, deleteManySazonalidades, updateSazonalidadeParams,updateSazonalidadeSchema } from './sazonalidade.schema'


const sazonalidadeRouter = express.Router()

sazonalidadeRouter.post("/", validate(createSazonalidadeSchema),registerSazonalidade)
sazonalidadeRouter.get("/fetch-all-sazonalidades",fetchSazonalidades)
sazonalidadeRouter.get("/get-sazonalidade/:sazonalidadeId", validate(updateSazonalidadeParams), getSazonalidade)
sazonalidadeRouter.put("/update-sazonalidade/:sazonalidadeId", validate(updateSazonalidadeSchema), updateSazonalidade)
sazonalidadeRouter.delete("/delete-sazonalidade/:sazonalidadeId", validate(updateSazonalidadeParams), deleteSazonalidade)
sazonalidadeRouter.post("/delete-many-sazonalidades", validate(deleteManySazonalidades), deleteManySazonalidadesController)



export default sazonalidadeRouter