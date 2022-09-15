import React, { ReactElement } from 'react'
import { Table } from 'reactstrap'

type Props= {
  tableHeader: string[];
  children: ReactElement;
};
export default function CustomTable({ tableHeader,children }: Props) {
  return (
   
  <Table responsive={true}>
    <thead>
        <tr>
          {
            tableHeader.map((item) => {
              return <th>
                      {item}
                    </th>
              })
          }
      </tr>
      </thead>
      {children}
  </Table>
  )
}
