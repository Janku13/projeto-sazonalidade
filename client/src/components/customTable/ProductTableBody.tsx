import React from 'react'
import { ProductType } from '../../types';

type Props= {
  tableBody: ProductType[];
};
export default function ProductTableBody({ tableBody }: Props) {
  if (tableBody.length === 0) return <tbody></tbody>;
  return (
       <tbody>
      {
        tableBody.map((sazonalidade) => {
          return (
            <tr>
              <th scope='row'>
               1
              </th>
              <td>
               {sazonalidade.productName}
             </td>
              <td>
               {sazonalidade.nomeFamilia}
             </td>
              <td>
               {sazonalidade.marca}
             </td>
              <td>
               {sazonalidade.class}
             </td>
              <td>
               {sazonalidade.unidade}
             </td>
              <td>
               {sazonalidade.quantidade}
             </td>
              <td>
               {sazonalidade.categoria}
             </td>
            
            </tr>
          )
        })
      }
  
    </tbody>
  )
}
