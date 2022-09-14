import {Request,Response} from 'express'
import { StatusCodes } from 'http-status-codes'
import { CreaSazonalidadeInput, UpdateSazonalidadeParams } from './sazonalidade.schema'
import { createSazonalidade, deleteSazonalidadeService, finalAllSazonalidade, findAndUpdateSazonalidade, findSazonalidade } from './sazonalidade.service'

export async function registerSazonalidade(req: Request<{}, {}, CreaSazonalidadeInput['body']>, res: Response) {  
  const body = req.body
  const sazonalidade = await createSazonalidade(body)
  try {
   return res.status(StatusCodes.CREATED).send(sazonalidade)
  } catch (e:any) {
     if (e.code === 11000) {
      return res.status(StatusCodes.CONFLICT).send("Sazonalidade already exists")
    }
    return  res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("e.message")
  }
}
export async function  fetchSazonalidades(_:Request, res:Response) {
  try {
    const sazonalidades = await finalAllSazonalidade();
    return res.status(StatusCodes.OK).send(sazonalidades)
  } catch (e) {
    return  res.status(StatusCodes.BAD_REQUEST).send("e.message")   
  }

}

export async function getSazonalidade(req: Request<UpdateSazonalidadeParams['params'], {}, {}>, res: Response) {
  const _id = req.params.sazonalidadeId
  console.log(_id)
  try {
    const sazonalidade = await findSazonalidade({ _id })
    if (sazonalidade) {
      return res.status(StatusCodes.OK).send(sazonalidade)
    } else {
       return  res.status(StatusCodes.NOT_FOUND).send("Não encontrado")
    }
  } catch (e) {
    return  res.status(StatusCodes.BAD_REQUEST).send("e.message") 
  }
}

export async function updateSazonalidade(req: Request<UpdateSazonalidadeParams['params'], {},CreaSazonalidadeInput['body']>, res: Response) {
  const _id = req.params.sazonalidadeId;
  const update = req.body
  try {
    const sazonalidade = await findSazonalidade({ _id })
    if (!sazonalidade) {
      return  res.status(StatusCodes.NOT_FOUND).send("Não encontrado")
    } else {
      const updatedProduct = await findAndUpdateSazonalidade({ _id }, update, { new: true })
      return res.status(StatusCodes.OK).send(updatedProduct)
    }
  } catch (e) {
    return  res.status(StatusCodes.BAD_REQUEST).send("e.message") 
  }
  
}

export async function deleteSazonalidade(req:Request<UpdateSazonalidadeParams['params'], {},{}>, res:Response) {
  
  const _id = req.params.sazonalidadeId
  try {
    const sazonalidade = await findSazonalidade({ _id })
    if (!sazonalidade) {
      return  res.status(StatusCodes.NOT_FOUND).send("Não encontrado")
    } else {
      await deleteSazonalidadeService({ _id })
      return res.sendStatus(StatusCodes.NO_CONTENT)
    }
  } catch (e) {
    return  res.status(StatusCodes.BAD_REQUEST).send("e.message") 
  }
}