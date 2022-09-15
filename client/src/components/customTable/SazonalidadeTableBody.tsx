import React from 'react'
import { SazonalidadeType } from '../../types';
import { MouseEvent } from "react";

type Props= {
  tableBody: SazonalidadeType[];
  selectSazonalidade:(e:MouseEvent<HTMLTableRowElement>,index:number) => void;
};
export default function SazonalidadeTableBody({ tableBody,selectSazonalidade }: Props) {
  if (tableBody.length === 0) return <tbody></tbody>;
  return (
    <tbody>
      {
        tableBody.map((sazonalidade,index) => {
          return (
            <tr key={sazonalidade._id}
              onClick={(e: MouseEvent<HTMLTableRowElement>) => selectSazonalidade(e, index)}
              className="show-curser"
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
               {sazonalidade.dataInicio}
             </td>
              <td>
               {sazonalidade.dataFim}
             </td>
              <td>
               {sazonalidade.dataProx}
             </td>
              <td>
               {sazonalidade.status}
             </td>
              <td>
               {sazonalidade.dataDeCadastro}
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
