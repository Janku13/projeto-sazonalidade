import React from 'react'
import { ProductType, SazonalidadeType } from '../../types';
import { MouseEvent } from "react";
import moment from 'moment'

type Props= {
  tableBody: SazonalidadeType[];
  selectSazonalidade: (e: MouseEvent<HTMLTableRowElement>, index: string, products: ProductType[]) => void;
  isSelectedSazonalidade: (id:string) => boolean
};

export default function SazonalidadeTableBody({ tableBody, selectSazonalidade, isSelectedSazonalidade }: Props) {

  if (tableBody.length === 0) return <tbody></tbody>;
  return (
    <tbody>
      {
        tableBody.map((sazonalidade) => {
          const isSelected = isSelectedSazonalidade(sazonalidade._id)
          return (
            <tr key={sazonalidade._id}
              onClick={(e: MouseEvent<HTMLTableRowElement>) => selectSazonalidade(e, sazonalidade._id,sazonalidade.products)}
              className={isSelected ? "show-curser  light-green-bg" : "show-curser " }
            >
              <th scope='row'>
               {sazonalidade._id}
              </th>
              <td>
               {sazonalidade.name}
             </td>
              <td>
               {sazonalidade.description}
             </td>
              <td>
               {moment(sazonalidade.dataInicio).format('DD/mm/yyyy')}
             </td>
              <td>
                {moment(sazonalidade.dataFim).format('DD/mm/yyyy')} 
             </td>
              <td>
                {moment(sazonalidade.dataProx).format('DD/mm/yyyy')}
             </td>
              <td>
               {sazonalidade.status}
             </td>
              <td>
                {moment(sazonalidade.dataDeCadastro).format('DD/mm/yyyy')}
             </td>
              <td>
               {sazonalidade.user}
             </td>
            </tr>
          )
        })
      }
    </tbody>
  )
}
