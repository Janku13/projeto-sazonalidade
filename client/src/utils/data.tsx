import { TbEdit } from 'react-icons/tb';
import { BsTrash } from 'react-icons/bs';
import { HiUpload } from 'react-icons/hi';
import { Icon } from '../pages/sazonalidade/sazonalidade-components/encarte/Encarte';


export const sazonalidadeIconsList: Icon[] = [
    {
      text: 'editar',
      icon: <TbEdit size={20} className="icon-action"/>
    },
    {
      text: 'exculir',
      icon: <BsTrash size={20} className="icon-action"/>
    },
    {
      text: 'exportar em .csv',
      icon: <HiUpload size={20} className="icon-action"/> 
    },
    {
      text: 'exportar em .pdf',
      icon: <HiUpload size={20} className="icon-action"/> 
    },
  ]
  export const produtosIcons: Icon[] = [
    {
      text: 'exportar em .csv',
      icon: <HiUpload size={20} className="icon-action"/> 
    },
    {
      text: 'exportar em .pdf',
      icon: <HiUpload size={20} className="icon-action"/> 
    },
  ]
 
  export const sazonalidadeTableHeader: string[] = [
    'ID',
    'NOME SAZONALIDADE',
    'DESCRIÇÃO',
    'DATA INÍCIO',
    'DATA FIM',
    'DATA PROX.INÍCIO',
    'STATUS',
    'DATA CAD.',
    'USUÁRIO CAD',
  ]
  export const productTableHeader: string[] = [
    'ID',
    'NOME PRODUTO',
    'NOME FAMÍLIA',
    'MARCA',
    'CLASSE',
    'EMB',
    'QNT',
    'CATEGORIA'
  ]
 
  

  