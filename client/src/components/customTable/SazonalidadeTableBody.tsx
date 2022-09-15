import React from 'react'
import { SazonalidadeType } from '../../types';

type Props= {
  tableBody: SazonalidadeType[];
};
export default function SazonalidadeTableBody({ tableBody }: Props) {
  if (tableBody.length === 0) return <tbody></tbody>;
  return (
    <tbody>
      {
        tableBody.map((sazonalidade) => {
          return (
            <tr>
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
