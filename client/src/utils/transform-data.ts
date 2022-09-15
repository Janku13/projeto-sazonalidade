import { SazonalidadeType } from "../types";



const data = [
  { details: { firstName: 'Ahmed', lastName: 'Tomi' }, job: 'manager'},
  { details: { firstName: 'John', lastName: 'Jones' }, job: 'developer'},
];
  // _id: string;
  // user: string;
  // products: ProductType[];
  // name: string;
  // description: string;
  // dataInicio: string;
  // dataFim: string;
  // dataProx: string;
  // status: string;
  // dataDeCadastro: string;
  // createAt: Date;
  // updateAt: Date;
const headers = [
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
    headers: headers,
    data:dataBody
  }
}