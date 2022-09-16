import React from 'react'
import { ProductType } from '../../types';



type Props= {
  tableBody: ProductType[];

};
export default function ProductTableBody({ tableBody }: Props) {

  if (tableBody.length === 0) {
    return <tbody> </tbody>
  }
  return (
       <tbody>
      {
        tableBody.map((product) => {
          console.log(product)
          return (
            <tr key={product._id}>
              <th scope='row'>
               {product._id}
              </th>
              <td>
               {product.productName}
             </td>
              <td>
               {product.nomeFamilia}
             </td>
              <td>
               {product.marca}
             </td>
              <td>
               {product.class}
             </td>
              <td>
               {product.unidade}
             </td>
              <td>
               {product.quantidade}
             </td>
              <td>
               {product.categoria}
             </td>
            
            </tr>
          )
        })
      }
  
    </tbody>
  )
}
