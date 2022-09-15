
import { ProductBySazonalidade, SazonalidadeType } from "../types";


const productHeaders = [
  {
    label: 'ID',
    key: '_id'
  },
  {
    label: 'NOME PRODUTO',
    key: 'nome'
  },
  {
    label: 'NOME FAMÍLIA',
    key: 'nomeFamilia'
  },
  {
    label: 'MARCA',
    key: 'marca'
  },
  {
    label: 'CLASS',
    key: 'class'
  },
  {
    label: 'EMB',
    key: 'unidade'
  },
  {
    label: 'QNT',
    key: 'quantidade'
  },
  {
    label: 'CATEGORIA',
    key: 'categoria'
  },
  
]
const sazonalidadeHeaders = [
  {
    label: 'ID',
    key: '_id'
  },
  {
    label: 'NOME SAZONALIDADE',
     key: 'nome'
  },
  {
    label: 'DESCRIÇÃO',
     key: 'descricao'
  },
  {
    label: 'DATA INÍCIO',
     key: 'dataInicio'
  },
  {
    label: 'DATA FIM',
     key: 'dataFim'
  },
  {
    label: 'DATA PROX INÍCIO',
     key: 'dataProx'
  },
  {
    label: 'STATUS',
     key: 'status'
  },
  {
    label: 'DATA CAD.',
     key: 'dataCad'
  },
  {
    label: 'USUÁRIO CAD.',
     key: 'user'
  },
]
export const transformSazonalidadeToCsvData = (sazonalidade:SazonalidadeType[]) => {
  const dataBody = sazonalidade.map((item) => {
    return {
      _id: item._id,
      nome:item.name,
      descricao: item.description,
      dataInicio: item.dataInicio,
      dataFim: item.dataFim,
      dataProx: item.dataProx,
      status: item.status,
      dataCad: item.dataDeCadastro,
      user: item.user,      
    }
  })
  return {
    headers: sazonalidadeHeaders,
    data:dataBody
  }
}
export const transformProductToCsvData = (product: ProductBySazonalidade[]) => {

  const listOfProducts = product.flatMap(item => {
    return  item.products
  })

  const dataBody = listOfProducts.flatMap((item) => {
    return {
      _id: item._id,
      nome:item.productName,
      nomeFamilia: item.nomeFamilia,
      marca: item.marca,
      class: item.class,
      unidade: item.unidade,
      quantidade: item.quantidade,
      categoria: item.categoria,    
    }
  })
  return {
    headers: productHeaders,
    data:dataBody,
  }
}