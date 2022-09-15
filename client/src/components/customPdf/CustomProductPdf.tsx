import React from 'react'
import { Document, Page, Text, View } from '@react-pdf/renderer';
import { ProductType } from '../../types';

type Props = {
  data: ProductType[];
  
};
export default function CustomProductPDF({data}:Props) {
  return (
    <Document>
      <Page size="A4">
        <>
        {
          data.map((item) => {
            return (
              <>
                <View >
                  <Text>{item._id}</Text>
                </View>
                <View >
                  <Text>{item.productName}</Text>
                </View>
                <View >
                  <Text>{item.nomeFamilia}</Text>
                </View>
                <View >
                  <Text>{item.marca}</Text>
                </View>
                <View >
                  <Text>{item.class}</Text>
                </View>
                <View >
                  <Text>{item.unidade}</Text>
                </View>
                <View >
                  <Text>{item.quantidade}</Text>
                </View>
                <View >
                  <Text>{item.categoria}</Text>
                </View>
                 
              </>
              
            )
          })
        }
        </>
        </Page>
      </Document>
  )
}
